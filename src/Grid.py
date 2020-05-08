import math
import random
from Desk import Desk

"""
Grids are laid out so that the origin is the top left corner of the office/map/etc.
"""
class Grid:
    def __init__(self,
                 height: int,
                 length: int,
                 desk_x: float = 1.0,
                 desk_y: float = 1.0,
                 grid: [[int]] = None):
        if height < 1 or length < 1:
            raise ValueError("height or length cannot be 0")

        self.height = height
        self.length = length
        self.desk_dim = (desk_x, desk_y)
        if grid:
            self.grid = grid
        else:
            self.grid = [[None for i in range(length)] for j in range(height)]

    def set_desk(self, x: int, y: int, d: Desk) -> Desk:
        """
        Put a desk object at position (x,y) in our grid.
        """
        ret = self.grid[x][y]
        self.grid[x][y] = d

        return ret

    def get_desk(self, x: int, y: int) -> Desk:
        return self.grid[x][y]

    def seating(self, social_distance: float) -> [(int, int)]:
        """
        DFS algorithm to create a list of desks that are:
            1) properly socially distanced and
            2) valid places to sit (according to our office layout)
        """
        searched_desks = []
        good_desks = []
        unsearched_desks = [(0,0)]

        while len(unsearched_desks) > 0:
            (dx, dy) = unsearched_desks.pop()
            searched_desks.append((dx, dy))

            next_desks = [
                (min(dx + i, self.height - 1), min(dy + j, self.length - 1))
                for i in range(2) for j in range(2)
            ]

            for d in next_desks:
                if d in searched_desks:
                    continue
                else:
                    unsearched_desks.append(d)

                desk_obj = self.grid[d[0]][d[1]]
                if not desk_obj or desk_obj.is_obstruction:
                    continue

                if desk_is_properly_spaced(d, good_desks, social_distance, self.desk_dim):
                    good_desks.append(d)

        return good_desks

    def __repr__(self) -> str:
        s = ""
        for row in self.grid:
            s += " ".join(["_" if not d
                          else "|" if d.is_obstruction
                          else "*" # if d is a desk
                          for d in row])
            s += "\n"

        return s

def desk_is_properly_spaced(d: (int,int), others: [(int,int)], social_distance: float, desk_dim: (float, float)) -> bool:
    """
    Check that a particular desk is a certain distance from others in a list.
    """
    for o in others:
        dz = math.sqrt(((d[0]-o[0])/desk_dim[0])**2 + ((d[1]-o[1])/desk_dim[1])**2)
        if dz <= social_distance:
            return False
    return True

if __name__ == "__main__":
    g = Grid(10, 10)
    for i in range(20):
        g.set_desk(random.randint(0,9), random.randint(0,9), Desk(is_obstruction = int(random.randint(0,1))))
    print(g)

    seats = g.seating(1)
    for i in range(10):
        for j in range(10):
            d = g.get_desk(i,j)
            if not d or d.is_obstruction:
                continue

            if (i,j) not in seats:
                g.set_desk(i,j, None)

    print()
    print(g)
