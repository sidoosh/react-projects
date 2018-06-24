import React from 'react';

function Button(props) {
    return (
        <div>
            <h1>{props.headingText}</h1>
            <button className="play-button-style" onClick={() =>
                document.getElementById("game-start").style.display = "none"
            }>
                {props.buttonText}
            </button>
        </div>
    );
}

export default Button;
