import React, { Component } from 'react';
import './Light.css'

class Light extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleLitOn = this.handleLitOn.bind(this);
    }

    handleLitOn() {
        this.props.litOn(this.props.index)

    }

    render() {
        const isLit = this.props.isLit ? 'Light lit' : 'Light'
        return (
            <div className={isLit} onClick={this.handleLitOn}></div>
        )
    }
}

export default Light;