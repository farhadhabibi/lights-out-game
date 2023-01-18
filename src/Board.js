import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css'
import { func } from 'prop-types';

class Board extends Component {
    static defaultProps = {
        nRows: 5,
        nCols: 5,
        chanceLightStartsOn: 0.25,
    }
    constructor(props) {
        super(props);
        this.state = {
            hasWon: false,
            board: this.createBoard()
        }

        this.flipAroundMe = this.flipAroundMe.bind(this)
    }

    flipAroundMe(coords) {
        const [y, x] = coords.split('-').map(Number)
        const board = this.state.board;
        const { nRows, nCols } = this.props;

        function flip(y, x) {
            if (y >= 0 && y < nRows && x >= 0 && x < nCols) {
                board[y][x] = !board[y][x];
            }
        }
        flip(y, x);
        flip(y, x + 1);
        flip(y, x - 1);
        flip(y + 1, x);
        flip(y - 1, x);

        const hasWon = board.every(row => row.every(cell => !cell));
        this.setState({ board, hasWon });

    }

    createBoard() {
        let board = []
        for (let y = 0; y < this.props.nRows; y++) {
            let row = [];
            for (let x = 0; x < this.props.nCols; x++) {
                row.push(Math.random() < this.props.chanceLightStartsOn)
            }
            board.push(row)
        }
        return board;
    }

    makeTable() {
        let tblBoard = [];
        for (let y = 0; y < this.props.nRows; y++) {
            let row = [];
            for (let x = 0; x < this.props.nCols; x++) {
                let coords = `${y}-${x}`
                row.push(<Cell key={coords} coords={coords} isLit={this.state.board[y][x]} flipAroundMe={this.flipAroundMe} />)
            }
            tblBoard.push(
                <table key={y}>
                    <tbody>
                        <tr>{row}</tr>
                    </tbody>
                </table>
            )
        }
        return tblBoard;
    }

    render() {
        return (
            this.state.hasWon ? <h1>You Win!</h1>
                :
                <div className="Board">
                    <h1>Lights Out Game!</h1>
                    {this.makeTable()}
                </div>
        )
    }
}

export default Board;