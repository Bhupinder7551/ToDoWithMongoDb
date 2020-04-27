import React, { Component } from 'react';
import Todo from './Component/ToDo.js';
//import Mern from './Component/Mern.js';

import './App.css';


class App extends Component {
    constructor(props) {

        super(props);
        this.state = {



        }
    }

    render() {





        return (

            <div>
                <h1>Impossible</h1>
                <Todo />
                
                {// <Mern />
                }
            </div>
        )
    }
}

export default App;
