import React, {useState} from 'react'
import { TitleText, InputContainer } from './SignUpElements'
import Input from '../Input'
import {Button} from '../ButtonElement'
import axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useHistory } from 'react-router-dom';


const LoginPage = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [dob, setDOB] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [preferences, setPreferences] = useState();
    const history = useHistory();

    const [showData, setShowData] = useState();

    const [sports, setSports] = useState(false);
    const [politics, setPolitics] = useState(false);
    const [music, setMusic] = useState(false);
    const [art, setArt] = useState(false);


    let errors = {};
    let preferencesData = [];

    const showUIData = () =>{
        if(showData) return <h1>{showData}</h1>
    }

    const getSignUp =  () =>{
        if(!firstName){
            errors.firstName = "FirstName Required";
        }

        if(!lastName){
            errors.lastName = "LastName Required";
        }

        if(!phone){
            errors.phone = "Phone Required";
        }

        else if(phone.length !== 6){
            errors.phone = "Phone number should be 10 digits";
        }

        if(!email){
            errors.email = "Email Required";
        } else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            errors.email = "Email address is invalid";
        }

        if(!dob){
            errors.dob = "DOB Required";
        }

        if(!password){
            errors.password = "Password Required";
        } else if(password.length < 6){
            errors.password = "Password need to be 6 characters or more";
        }

        if(!confirmPassword){
            errors.confirmPassword = "Password Required";
        } else if(confirmPassword.length < 6){
            errors.confirmPassword = "Password need to be 6 characters or more";
        }


        if(sports) preferencesData.push("sports");
        if(politics) preferencesData.push("politics");
        if(music) preferencesData.push("music");
        if(art) preferencesData.push("art");

        console.log(preferencesData);

        const loginData = {firstName: firstName, lastName:lastName, phone:phone, dob:dob, email: email, password: password, confirmPassword: confirmPassword, preferences: preferencesData };
        

        axios.post('http://localhost:5000/Users/createUser', loginData)
        .then( (response) =>{
            console.log(response);
            setShowData(response.data);
        })
        .catch((err) =>{
            console.log(err);
            setShowData(err.data);
        } ); 
    }

   

    return (
        <>
            <TitleText>SignUp Page</TitleText>

            <InputContainer>
                <Input func={setFirstName} value="FirstName" ></Input>
                <Input func={setLastName} value="LastName"></Input>
                <Input func={setPhone} value="Phone"></Input>
                <Input func={setEmail} value="Email"></Input>
                <Input func={setDOB} value="DOB"></Input>
                <Input func={setPassword} value="Password" type="password"></Input>
                <Input func={setConfirmPassword} value="Confirm Password" type="password"></Input>

                </InputContainer>
            
                <label>
                    <input type="checkbox" onChange={()=>setSports(!sports)}/>
                    Sports
                </label>

                <label>
                    <input type="checkbox" onChange={()=>setPolitics(!politics)}/>
                    Politics
                </label>

                <label>
                    <input type="checkbox" onChange={()=>setMusic(!music)}/>
                    Music
                </label>

                <label>
                    <input type="checkbox" onChange={()=>setArt(!art)}/>
                    Art
                </label>


                <InputContainer>
                <Button onClick={getSignUp} primary="true" dark="true">
                        Sign Up </Button>
                <Button onClick={() => history.push('/')} primary="true" dark="true">
                        Back </Button>
                </InputContainer>
               

            

            

            {showUIData()}

            
        </>
    )
}

export default LoginPage
