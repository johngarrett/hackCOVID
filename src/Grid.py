from Desk import Desk, DeskType

"""
Grids are laid out so that the origin is the top left corner of the office/map/etc.
"""
class Grid:
    def __init__(self, height: int, length: int):
        self.height = height
        self.length = length
        self.grid = [[None for i in range(height)] for j in range(length)]

    def set_desk(self, x: int, y: int, d: Desk) -> Desk:
        ret = self.grid[x][y]
        self.grid[x][y] = d

        return ret

    def seating(self):
        searched_desks = []
        unsearched_desks = []
        good_desks = []
        unsearched_desks.append(find_topmost_desk(self.grid))

        while len(unsearched_desks) > 0:
            dx, dy = unsearched_desks.pop()
            searched_desks.append((dx, dy))

            next_desks = [
                self.grid[dx + i][dy + j]
                for i in range(1) for j in range(1)
            ]

            for d in next_desks:
                if d not in searched_desks:
                    unsearched_desks.append(d)
                if desk_is_properly_spaced(d, good_desks, social_distance):
                    good_desks.append(d)

def desk_is_properly_spaced(d: (int,int), others: [(int,int)], social_distance: int) -> bool:
    for o in others:
        if sqrt((d[0]+o[0])**2 + (d[1]+o[1])**2) < social_distance:
            return False

def find_topmost_desk(grid: [[int]]) -> (int, int):
    """
    Finds first desk from the top left corner of the grid.
    """
    N = len(grid)
    if N >= 1:
        M = len(grid[0])
    else:
        M = 0

    for i in range(N):
        for j in range(M):
            if grid[i][j]:
                return i,j
