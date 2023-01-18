import React, { Component } from 'react';
import './Light.css'

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.flipAroundMe(this.props.coords);
    }

    render() {
        const isLit = this.props.isLit ? 'lit Light' : 'Light';
        return (
            <td className={isLit} onClick={this.handleClick}></td>
        )
    }
}

export default Cell;