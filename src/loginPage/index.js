import React, {useState} from 'react'
import { TitleText, InputContainer, ButtonContainer } from './loginPageElements'
import Input from '../Input'
import {Button} from '../ButtonElement'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import tokenObject from '../data';


const LoginPage = () => {
    const [token, setToken] = useState();
    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let errors = {};
    const history = useHistory();
    const [showData, setShowData] = useState();

    const showUIData = () =>{
        if(showData) return <h1>{showData}</h1>
    }

    const getLoginData =  () =>{
        if(!email){
            errors.email = "Email Required";
        } else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            errors.email = "Email address is invalid";
        }

        if(!password){
            errors.password = "Password Required";
        } else if(password.length < 6){
            errors.password = "Password need to be 6 characters or more";
        }

        const loginData = { email: email, password: password };


        axios.post('http://localhost:5000/Users/loginUser', loginData)
        .then(async (response) =>{
            await setToken(response.data.token);
            await setUser(response.userD);
            tokenObject.data = response.data.token;
            
            history.push({
                pathname: '/home',
            })
        } )
        .catch((err)=>{
            setShowData('Invalid Credentials');
        });
    }

    return (
        <>
            <TitleText>Login Page</TitleText>

            <InputContainer>
                <Input func={setEmail} value="Email Address" ></Input>
                <Input func={setPassword} value="Password" type="password"></Input>
                <ButtonContainer>
                    <Button onClick={getLoginData} primary="true" dark="true">
                            Login </Button>
                    <Button onClick={() => history.push('/signup')} primary="true" dark="true">
                            SignUp? </Button>
                </ButtonContainer>
                
            </InputContainer>

            {showUIData()}
        </>
    )
}

export default LoginPage;
