import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { declareWinner } from '../utils/helper';
import '../index.css';
import Position from '../utils/helper';
import GameStart from './GameStart';

const gameStart = document.getElementById('game-start');

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleHistory = this.handleHistory.bind(this);

        this.state = {
          history:[{
              squareValues: Array(9).fill(null)
          }],
          stepNumber: 0,
          playerXNext: true
       }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const stepNumber = this.state.stepNumber;
        const currentBoard = history[stepNumber];
        const squareValues = currentBoard.squareValues.slice();
        const player = this.state.playerXNext ? 'X' : 'O';
        const previousPlayer = (!this.state.playerXNext ? 'X' : 'O');

        if (declareWinner(player, squareValues) || declareWinner(previousPlayer, squareValues) || squareValues[i]) {
            return;
        }

        squareValues[i] = player;
        this.setState({
            history: history.concat([{
                squareValues: squareValues,
                position: new Position(i)
            }]),
            stepNumber: stepNumber + 1,
            playerXNext: !this.state.playerXNext,
            aiPlayerNext: this.state.aiPlayerNext + 1
        });
    }

    handleHistory(index) {
        this.setState({
            stepNumber: index,
            playerXNext: index%2 === 0
        });
    }

    render() {
        const previousPlayer = (!this.state.playerXNext ? 'X' : 'O');
        const history = this.state.history;
        const currentBoard = history[this.state.stepNumber];
        const result = declareWinner(previousPlayer, currentBoard.squareValues);

        const moves = history.map(function(value, index) {
            const buttonText = index ? 'Go to step #' + index : 'Go to game start';
            const movePosition = index ? 'Move position is ' + value.position.toString() : ''
            return (
                <li index={index}>
                    <button className="move-button" onClick={() => this.handleHistory(index)}>
                            {buttonText}
                    </button>
                    <span>{movePosition}</span>
                </li>
            );
        }.bind(this));
        let status;
        if(result) {
            status = 'Winner:' + result;
        } else if(history.length === 10) {
            status = 'Match Draw';
        } else {
            status = 'Next player:' + (this.state.playerXNext ? 'X' : 'O');
        }

    return (
        <div className="game">
            {ReactDOM.createPortal(<GameStart />, gameStart)}
            <div className="game-board">
                <Board squareValues={currentBoard.squareValues}
                  playerXNext={this.state.playerXNext}
                  onClick={(i) => {
                      this.handleClick(i)
                  }}
                />
            </div>
            <div className="game-info">
                <div className="status">{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
        );
    }
}

export default Game;
