import React from 'react';
import Table from 'react-bootstrap/Table';
import {Rectangle} from 'react-shapes';

export class Map extends React.Component {
    constructor(){
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler(){
    this.forceUpdate();
  };
    render() {
        console.log(this.props)
        let recip = this.props.tWidth / this.props.tHeight
        if (recip < 0) {
            recip = 1/recip
        }

        let tableStyle = {
            padding: '0px',
            margin: 'auto',
            border: '0px',
            'border-spacing': '2px',
            'background-color': '#E8E8E8',
            width: '90vw',
            height: '70vh',
        };
        return (
            <div>
            <Table responsive style={tableStyle}>
                <tbody>
                    {this.renderDesks()}
                </tbody>
            </Table>
            </div>
        );
    }

    renderDesks() {
        let elementStyle = {
            width: (this.props.tWidth / this.props.width), // * actual table width
            height: this.props.height / this.props.tHeight, // * actual table height
            padding: '0px',
            margin: '0px',
            border: '0px',
        };

        let rowStyle = {
            'line-height': '0px',
        };

        var desks = []
        let columns = Math.floor(this.props.width / this.props.tWidth)
        let rows = Math.floor(this.props.height / this.props.tHeight)
        let widthRatio = 1/columns
        let heightRatio = 1/rows
        console.log(columns)
        console.log(this.props.tWidth)
        console.log(columns * this.props.tWidth)
        for (let r = 0; r < rows; r++) {
            let rowElems = [];
            for (let c = 0; c < columns; c++) {
                rowElems.push(
                    <td key={c} style={elementStyle}>
                    <Desk width={widthRatio} height={heightRatio} />
                    </td>
                );
            }
            desks.push(<tr key={r} style ={rowStyle}>{rowElems}</tr>)
        }
        return desks;
    }
}


class Desk extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: '#87e68b',
            status: 0,
        } 

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            status: (this.state.status + 1) % 3,
            color: (this.state.status + 1) % 3  === 0 ?'#87e68b' : (this.state.status + 1) % 3 === 1 ? '#d1605e' : '#000000'
        }))
    }

    render() {
        let rectangleStyle = {
            padding: '0px',
            margin: '0px',
            border: '0px',
            'margin-bottom': '0px',
            flex: 1,
        };
        return (
            <Rectangle style={rectangleStyle} 
                onClick={this.handleClick}
                fill={{color: this.state.color}} 
                height={'100%'} width={'100%'}
            />
        );
    }
}
