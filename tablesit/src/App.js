import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Map} from './components/Map.js'

class App extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            width: 5,
            height: 5,
            tWidth: 1,
            tHeight: 1,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
        this.forceUpdate()
    }
    render() {
        return (
            <div>
            <Map width={this.state.width} height={this.state.height} tWidth={this.state.tWidth} tHeight ={this.state.tHeight}/ >
            <form>
                <label>
                  Map Height: 
                  <input name="height" type="number"
                    value={this.state.height}
                    onChange={this.handleInputChange} />
                </label>
                <br></br>
                <label>
                  Map Width: 
                  <input name="width" type="number"
                    value={this.state.width}
                    onChange={this.handleInputChange} />
                </label>
                <br></br>
                <label>
                Table width: 
                    <input name="tWidth" type="number"
                      value={this.state.tWidth}
                      onChange={this.handleInputChange} />
              </label> 
                <br></br>
                <label>
                  Table Height: 
                  <input name="tHeight" type="number"
                    value={this.state.tHeight}
                    onChange={this.handleInputChange} />
                </label>
            </form>
            </div>
        );
    }
}

export default App;
