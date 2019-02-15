import React, {Component} from 'react';
import SoilVisualMap from "../soilVisualMap";
import "./style.scss";

const classnames = require('classnames');

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabSelected: "GARDEN"
        }
    }

    render() {
        const gardenClassName = classnames(
            "homepage_tab-bar_tab",
            {"homepage_tab-bar_tab--active": this.state.tabSelected === "GARDEN"}
        )
        const compostClassName = classnames(
            "homepage_tab-bar_tab",
            {"homepage_tab-bar_tab--active": this.state.tabSelected === "COMPOST"}
        )
        const sprinklerClassName = classnames(
            "homepage_tab-bar_tab",
            {"homepage_tab-bar_tab--active": this.state.tabSelected === "SPRINKLER"}
        )
        return (
            <div className="homepage">
                <div className="homepage_tab-bar">
                    <div
                        className={gardenClassName}
                        onClick={() => this.setState({tabSelected: "GARDEN"})}
                    >GARDEN
                    </div>
                    <div
                        className={compostClassName}
                        onClick={() => this.setState({tabSelected: "COMPOST"})}
                    >COMPOST
                    </div>
                    <div
                        className={sprinklerClassName}
                        onClick={() => this.setState({tabSelected: "SPRINKLER"})}
                    >SPRINKLER
                    </div>
                </div>
                {this.state.tabSelected === "GARDEN" &&
                <div className="homepage_garden">
                    <SoilVisualMap/>
                </div>
                }
            </div>
        )
    }
}