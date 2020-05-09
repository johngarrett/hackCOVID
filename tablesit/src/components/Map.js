import React from 'react';
import BSTable from 'react-bootstrap/Table';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';

export class Map extends React.Component {
    render() {
        return (
            <div>
            <BSTable class="table table-dark">
                <tbody>
                    {this.renderDesks()}
                </tbody>
            </BSTable>
            <h1>This is a table with a width of {this.props.width} and a height of {this.props.height} </h1>
            </div>
        );
    }

    renderDesks() {
        let desks = []
        for (let r = 0; r < this.props.height / this.props.tHeight; r++) {
            let rowElems = [];
            for (let c = 0; c < this.props.width / this.props.tWidth; c++) {
                rowElems.push(<td><Desk width={this.props.tWidth} height={this.props.tHeight} /></td>)
            }
            desks.push(<tr>{rowElems}</tr>)
        }
        return desks;
    }
}

class Desk extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Rectangle height={this.props.height * 100} width={this.props.width * 100}/>
        );
    }
}
