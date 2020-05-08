import React from 'react';
import BSTable from 'react-bootstrap/Table';


export class Map extends React.Component {
    render() {
        console.log("test")
        return (
            <div>
            <BSTable>
                <tbody>
                </tbody>
            </BSTable>
            <h1>This is a table with a width of {this.props.width} and a height of {this.props.height} </h1>
            <Table width={this.props.tWidth} height={this.props.tHeight} / >
            </div>
        );
    }

    renderTables() {
    }
}

class Table extends React.Component {
    render() {
        return <p> This is a table with a width of {this.props.width} and height of {this.props.height} </p>;
    }
}

