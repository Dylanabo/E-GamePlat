import React, { Component } from "react";
import '../assets/css/Matpling.css';
import trump from '../assets/img/trump-1.gif';


class MaplingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleMouseEnter = this.handleMouseEnter.bind(this, this.props.handleMouseEnter)
        this.handleMouseMove = this.handleMouseMove.bind(this, this.props.handleMouseMove)
        this.handleMouseLeave = this.handleMouseLeave.bind(this, this.props.handleMouseLeave)
    }
    handleMouseEnter(e) {
        console.log('onMouseEnter', e.clientX, e.clientY)
    }
    handleMouseMove(e) {
        console.log(
            'onMouseMove',
            e.nativeEvent.clientX, e.nativeEvent.clientY
        )
    }
    handleMouseLeave(e) {
        console.log('onMouseLeave', e.clientX, e.clientY)
    }
    render() {
        return (
            <div className='container'>
                <script>

                </script>
                <div className="horizontal-cut-text">Matpling</div>
                <div onMouseEnter={(e) => this.handleMouseEnter(e)}
                    onMouseMove={(e) => this.handleMouseMove(e)}
                    onMouseLeave={(e) => this.handleMouseLeave(e)}>
                    <img className="trumpling perfect bodysnatcher matpling" src={trump} alt="trumpling" data-box2d-bodykey="1" />
                </div>
            </div>

        )
    }
}

export default MaplingPage;