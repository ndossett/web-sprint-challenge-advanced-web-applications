import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import axios from 'axios';

const initialColor = {
    color: "",
    code: { hex: "" }
  };

const AddColor = (fetchColors) => {
    const [formValues, setFormValues] = useState(initialColor);
    // const { push } = useHistory();
    
    const changeHandler = e => {
        const { name, value } = e.target
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = ev => {
        ev.preventDefault();
        axios
        .post(`http://localhost5000/api/colors`, formValues)
        .then(res => {
            console.log(formValues)
            setFormValues(initialColor);
            fetchColors();
        })
        .catch(err => {
            console.log(err)
        })
    };

    return (
        <div>
            <h2>Add Color</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='color'>Color</label>
                <input
                type='text'
                name='color'
                onChange={changeHandler}
                value={formValues.color}
                />
                <label htmlFor='code'>Code</label>
                <input
                type='string'
                name='code'
                onChange={changeHandler}
                value={formValues.code}
                />
            <button className= 'add-button' type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddColor
