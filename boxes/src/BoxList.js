import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box.js';
import NewBoxForm from './NewBoxForm.js';

function BoxList() {

    const INITIAL_STATE = {
        'bgcolor': '',
        'width': '',
        'height': ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const [boxes, setBoxes] = useState([
        // {
        //     'bgcolor': '#00FF00',
        //     'width': '100px',
        //     'height': '150px',
        //     'key': 1
        // },
        // {
        //     'bgcolor': '#A300FF',
        //     'width': '50px',
        //     'height': '75px',
        //     'key': 2
        // }
    ]);

    function OnClickX(el) {
        el.remove();
    };

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    function addBox(evt) {
        evt.preventDefault();
        const { bgcolor, width, height } = formData;
        if (!parseInt(width) || !parseInt(height)) {
            //validation?
            console.log("Width and heights must both be numbers.")
            return;
        }
        setBoxes(bx => ([
            ...bx,
            {
                'bgcolor': bgcolor,
                'width': `${width}px`,
                'height': `${height}px`,
                'key': uuid()
            }
        ]));

        setFormData(INITIAL_STATE);

    };


    return (
        <div>
            {boxes.map(({ bgcolor, width, height, key }) => {
                return (
                    <Box
                        backgroundColor={bgcolor}
                        width={width}
                        height={height}
                        key={key}
                        onClickX={OnClickX}
                    />
                )
            })}
            <br />
            <NewBoxForm
                addBox={addBox}
                handleChange={handleChange}
                formData={formData}
            />
        </div>
    )

}

export default BoxList;