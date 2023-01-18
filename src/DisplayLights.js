import React, { Component } from 'react';
import Light from './Light';
import './DisplayLights.css'

class DisplayLights extends Component {
    static defaultProps = {
        maxLights: Array.from({ length: 25 }),
        chanceLigtsOn: 0.25
    }
    constructor(props) {
        super(props);
        this.state = {
            lights: this.randomEntity()
        }
        this.litOn = this.litOn.bind(this);
    }

    randomEntity() {
        const lights = this.props.maxLights;
        let lightsArr = [];
        for (let i = 0; i < lights.length; i++) {
            lightsArr.push(Math.random() < this.props.chanceLigtsOn)
        }
        return lightsArr;

    }

    litOn(index) {
        const { lights } = this.state;
        const { maxLights } = this.props;

        function flipLight(x) {
            if (x >= 0 && x < maxLights.length) {
                lights[x] = !lights[x]
            }
        }
        flipLight(index)
        flipLight(index + 1)
        flipLight(index - 1)
        this.setState({ lights })

    }

    render() {
        return (
            <div className="DisplayLights-container">
                {this.props.maxLights.map((el, i) => <Light key={i} index={i} isLit={this.state.lights[i]} litOn={this.litOn} />)}
            </div>
        )
    }
}

export default DisplayLights;