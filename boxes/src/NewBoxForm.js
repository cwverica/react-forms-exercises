import React from 'react';

function NewBoxForm({ addBox, handleChange, formData }) {
    const { bgcolor, height, width } = formData;

    return (
        <form>
            <h3>Add new Box:</h3>
            <label htmlFor="bgcolor">Color: </label>
            <input
                type="color"
                name="bgcolor"
                id="bgcolor"
                value={bgcolor}
                onChange={handleChange}
            ></input>
            <br />
            <label htmlFor="width">Width (in pixels): </label>
            <input
                type="text"
                name="width"
                id="width"
                size='3'
                value={width}
                onChange={handleChange}
            ></input>px
            <br />
            <label htmlFor="height">Height (in pixels): </label>
            <input
                type="text"
                name="height"
                id="height"
                size='3'
                value={height}
                onChange={handleChange}
            ></input>px
            <br />
            <button type="submit" onClick={addBox}>Add Box to page!</button>
        </form>
    )
}

export default NewBoxForm;