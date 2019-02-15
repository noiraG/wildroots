import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./styles.scss";
import Lawn from "./lawn.png";
import CrateSquare from "./crate-square.png";
import CrateLong from "./crate-long.png";
import CrateCorner from "./crate-corner.png";

export default class SoilVisualMap extends Component{

    constructor(props) {
        super(props);
        this.state = {isScrolling: false};
    }

    componentWillUpdate(nextProps, nextState){
        if(this.state.isScrolling !== nextState.isScrolling ) {
            this.toggleScrolling(nextState.isScrolling);
        }
    }

    toggleScrolling = (isEnable) => {
        if (isEnable) {
            window.addEventListener('mousemove', this.onMouseMove);
            window.addEventListener('mouseup', this.onMouseUp);
        } else {
            window.removeEventListener('mousemove', this.onMouseMove);
        }
    };

    attachScroller = (scroller) => {
        this._scroller = ReactDOM.findDOMNode(scroller);
    };

    onMouseMove = (event) => {
        const {clientX, scrollLeft, scrollTop, clientY} = this.state;
        this._scroller.scrollLeft = scrollLeft + clientX - event.clientX;
        this._scroller.scrollTop = scrollTop + clientY - event.clientY;
    };

    onMouseUp =  () => {
        this.setState({isScrolling: false,
            scrollLeft: 0, scrollTop: 0,
            clientX: 0, clientY:0});
    };

    onMouseDown = (event) => {
        const {scrollLeft, scrollTop} = this._scroller;
        this.setState({isScrolling:true, scrollLeft, scrollTop, clientX:event.clientX, clientY:event.clientY});
    };

    render() {
        return (
        <div className="soil-container"
             ref={this.attachScroller}
             onMouseDown={this.onMouseDown}
        >
            <div className="visual-map">
                <img className="visual-map_lawn" src={Lawn} draggable={false} alt="lawn"/>
                <div className="visual-map_norris">NORRIS</div>
                <img className="visual-map_crate1" src={CrateLong} draggable={false} alt="crate1"/>
                <img className="visual-map_crate2" src={CrateLong} draggable={false} alt="crate2"/>
                <img className="visual-map_crate3" src={CrateSquare} draggable={false} alt="crate3"/>
                <img className="visual-map_crate4" src={CrateLong} draggable={false} alt="crate4"/>
                <img className="visual-map_crate5" src={CrateLong} draggable={false} alt="crate5"/>
                <img className="visual-map_crate6" src={CrateLong} draggable={false} alt="crate6"/>
                <img className="visual-map_crate7" src={CrateLong} draggable={false} alt="crate7"/>
                <img className="visual-map_crate8" src={CrateLong} draggable={false} alt="crate8"/>
                <img className="visual-map_crate9" src={CrateLong} draggable={false} alt="crate9"/>
                <img className="visual-map_crate10" src={CrateSquare} draggable={false} alt="crate10"/>
                <img className="visual-map_crate11" src={CrateLong} draggable={false} alt="crate11"/>
                <img className="visual-map_crate12" src={CrateSquare} draggable={false} alt="crate12"/>
                <img className="visual-map_crate13" src={CrateLong} draggable={false} alt="crate13"/>
                <img className="visual-map_crate14" src={CrateLong} draggable={false} alt="crate14"/>
                <img className="visual-map_crate15" src={CrateSquare} draggable={false} alt="crate15"/>
                <img className="visual-map_crate16" src={CrateLong} draggable={false} alt="crate16"/>
                <img className="visual-map_crate17" src={CrateLong} draggable={false}  alt="crate17"/>
                <img className="visual-map_crate18" src={CrateLong} draggable={false} alt="crate18"/>
                <img className="visual-map_crate19" src={CrateSquare} draggable={false} alt="crate19"/>
                <img className="visual-map_crate20" src={CrateLong} draggable={false} alt="crate20"/>
                <img className="visual-map_crate21" src={CrateLong} draggable={false} alt="crate21"/>
                <img className="visual-map_crate22" src={CrateLong} draggable={false} alt="crate22"/>
                <img className="visual-map_crate23" src={CrateCorner} draggable={false} alt="crate23"/>
                <img className="visual-map_crate24" src={CrateCorner} draggable={false} alt="crate24"/>
                <img className="visual-map_crate25" src={CrateSquare} draggable={false} alt="crate25"/>
                <img className="visual-map_crate26" src={CrateCorner} draggable={false} alt="crate26"/>
                <img className="visual-map_crate27" src={CrateCorner} draggable={false} alt="crate27"/>
                <img className="visual-map_crate28" src={CrateLong} draggable={false} alt="crate28"/>
                <img className="visual-map_crate29" src={CrateLong} draggable={false} alt="crate29"/>
                <img className="visual-map_crate30" src={CrateLong} draggable={false} alt="crate30"/>
                <img className="visual-map_crate31" src={CrateSquare} draggable={false} alt="crate31"/>
                <img className="visual-map_crate32" src={CrateLong} draggable={false} alt="crate32"/>
                <img className="visual-map_crate33" src={CrateLong} draggable={false} alt="crate33"/>
                <img className="visual-map_crate34" src={CrateSquare} draggable={false} alt="crate34"/>
                <img className="visual-map_crate35" src={CrateSquare} draggable={false} alt="crate35"/>
                <img className="visual-map_crate36" src={CrateLong} draggable={false} alt="crate36"/>
                <img className="visual-map_crate37" src={CrateLong} draggable={false} alt="crate37"/>
                <img className="visual-map_crate38" src={CrateLong} draggable={false} alt="crate38"/>
                <img className="visual-map_crate39" src={CrateLong} draggable={false} alt="crate39"/>
                <img className="visual-map_crate40" src={CrateLong} draggable={false} alt="crate40"/>
            </div>
        </div>
        )
    }
}