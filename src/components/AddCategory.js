import React, { useState } from 'react';
import PropTypes from 'prop-types'; 

export default function AddCategory({ setCategorias }) {

    
    const [inputValue, setinputValue] = useState('');//no dejarlo sin comillas porque es undefined

    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();        
        if(inputValue.trim().length >2){
            setCategorias(cats => [inputValue,...cats])
            setinputValue ('');
        }
    }
    return (

        <form onSubmit={ handleSubmit }>

            <input 
                type="text"
                value = {inputValue}
                onChange = { handleInputChange}
            />
        </form>
    )
}

//Obliga a que le manden esa funcion o que indique que se requiere
AddCategory.propTypes ={
    setCategorias: PropTypes.func.isRequired
}