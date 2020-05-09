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
        return (
            <div>
            <Table responsive>
                <tbody>
                    {this.renderDesks()}
                </tbody>
            </Table>
            </div>
        );
    }

    renderDesks() {
        console.log(this.props)
        var desks = []
        let columns = Math.floor(this.props.width / this.props.tWidth)
        let rows = Math.floor(this.props.height / this.props.tHeight)
        let widthRatio = 1/columns
        let heightRatio = 1/rows
        for (let r = 0; r < rows; r++) {
            let rowElems = [];
            for (let c = 0; c < columns; c++) {
                rowElems.push(<td key={c} style={{width: this.props.tWidth, height: this.props.tHeight}}><Desk width={widthRatio} height={heightRatio} /></td>)
            }
            desks.push(<tr key={r}>{rowElems}</tr>)
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
        return (
            <Rectangle onClick={this.handleClick} fill={{color: this.state.color}} height={'100%'} width={'100%'}/>
        );
    }
}
