import React from 'react';
import './App.css';
import {Map} from './components/Map.js'

class App extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            width: 96 + (96/12)*2 + 4, //padding
            height: 40 + (40/4)*2 + 4, //padding
            tWidth: 12,
            tHeight: 4,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value < 0 ? 0 : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        this.forceUpdate()
    }
    render() {
        return (
        <div>
            <form>
                <label>
                  Map Height: 
                  <input name="height" type="number" pattern="[0-9]*"
                    value={this.state.height}
                    onChange={this.handleInputChange} />
                </label>
                <br></br>
                <label>
                  Map Width: 
                  <input name="width" type="number" pattern="[0-9]*"
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

            <Map width={this.state.width} height={this.state.height} tWidth={this.state.tWidth} tHeight ={this.state.tHeight}/ >
        </div>
        );
    }
}

export default App;
