  
import React, {useState} from 'react'
import {Container, InputField} from './InputElement'

const Input = ({value, func, defaultV, type}) => {

    return (
        <Container>
            <InputField onChange={(e) => func(e.target.value)} placeholder={value} defaultValue={defaultV} type={type} ></InputField>
        </Container>
    )
}

export default Input;