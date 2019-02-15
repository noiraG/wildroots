import React, {Component} from 'react';
import './App.css';
import HomePage from "./components/homePage";
import NavigationBar from "./components/navigationBar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar/>
                <HomePage/>
            </div>
        );
    }
}

export default App;
