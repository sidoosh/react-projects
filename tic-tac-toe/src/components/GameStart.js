import React from "react";
import Button from "./Button";

export default class GameStart extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.renderButton = this.renderButton.bind(this);

        this.state = {
            isButtonClicked: false
        }
    }
    renderButton(buttonText, yesValueHeading) {
        return (
            <Button buttonText={buttonText}
                headingText={yesValueHeading}
            />
        );
    }

    handleClick(e) {
        const isYesClicked = e.target.value === "yes" ? true : false;

        this.setState({
            isButtonClicked: true,
            isYesClicked: isYesClicked
        });
    }

    render() {
        const isButtonClicked = this.state.isButtonClicked;
        const isYesClicked = this.state.isYesClicked;
        let playGame = null;
        let gameStarts = () => {
            return (
                <div>
                    <h1> Do you have a friend to play with ? </h1>
                    <button className="button-style" value="yes" onClick={(e) =>this.handleClick(e)}> Yes </button>
                    <button className="button-style" value="no" onClick={(e) => this.handleClick(e)}> No </button>
                </div>
            )};
        const buttonText = "Let's Play";
        const yesValueHeading = "1st player is X and Second Player is O";
        const noValueHeading = "Please find someone to play with ";
        if(isButtonClicked) {
            if(isYesClicked) {
                playGame = this.renderButton(buttonText, yesValueHeading);
            } else {
                playGame  = this.renderButton(buttonText, noValueHeading);
            }
        }

        return (
            <div id="modal">
                <div>{isButtonClicked ? playGame : gameStarts() }</div>
            </div>
        );
    }
}
