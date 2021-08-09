import React, { useState } from 'react';
import './Box.css'



function Box({ backgroundColor, width, height, onClickX }) {

    function clickXHandler(evt) {
        evt.preventDefault();
        const target = evt.target.parentElement;
        onClickX(target);
    }

    const style = { backgroundColor, width, height };
    return (
        <div>
            <div
                className="Box"
                style={style}
            >
            </div>
            <button
                className="Box-button"
                onClick={clickXHandler} >X</button>
        </div>
    )

}

export default Box;