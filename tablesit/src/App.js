import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Map} from './components/Map.js'

class App extends React.Component {
    render() {
        return (
            <div>
            <Map width="5.0" height="5.0" tWidth = "1.0" tHeight = "1.0"/ >
            </div>
        );
    }
}

export default App;
