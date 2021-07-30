import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar  from '../Sidebar';
import {FaBars} from 'react-icons/fa'
import styled from 'styled-components'
import {Button} from '../ButtonElement'
import Input  from '../Input';
import { ArticlesCard, ArticlesContainer, ArticlesH1, ArticlesIcon,StyledTextAreaTitle, StyledTextAreaDescription, DropdownContainer, ArticlesLI, ArticlesUL } from './articleCreationElements';
import axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import tokenObject from '../data'
import { useHistory } from 'react-router-dom';

const options = [
    'sports', 'politics', 'art', 'music'
  ];

  const defaultOption = options[0];


const MobileIcon = styled.div`
        display: block;
        position: absolute;
        margin: 20px 20px;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
`;

const ArticleCreation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState('');
    const [headlines, setHeadlines] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [imageFile, setImageFile] = useState();
    const [showData, setShowData] = useState();
   
    const history = useHistory();

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    const showUIData = () =>{
        if(showData) return <h1>{showData}</h1>
    }
    


    const setImageData = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){

                setImage(reader.result);
            }
        }

        reader.readAsDataURL(event.target.files[0]);
        setImageFile(event.target.files[0]);
        
    }

    const getData = async () =>{
        let formData = new FormData();
        formData.append('headlines', headlines);
        formData.append('text', description);
        formData.append('category', category);
        formData.append('file', imageFile);
        console.log(formData);
        for (var p of formData) {
            console.log(p);
          }

        try {
            console.log(tokenObject.data);
           const response =  await axios.post('http://localhost:5000/Articles/createArticle', formData, {
                headers: {
                    'Content-Type':'multipart/form-data',
                    'x-auth-token': tokenObject.data
                }
            });

            await setShowData(response.data);
        } catch (error) {
            
        }
    
    }

    return (
        <>
        <MobileIcon>
                <FaBars onClick={toggle}/>
            </MobileIcon>

        <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
                    <ArticlesH1>
                        Create Article
                    </ArticlesH1>

        <ArticlesIcon src={image} alt="">
            
        </ArticlesIcon>

     <div>
         <input type="file" id="file-input" name="ImageStyle" accept="image/*" onChange={setImageData}/>
     </div>
        
                
   
            <StyledTextAreaTitle placeholder={'Headlines'} onChange={(e)=>setHeadlines(e.target.value)}></StyledTextAreaTitle>
            <StyledTextAreaDescription placeholder={'Description'} onChange={(e)=>setDescription(e.target.value)}></StyledTextAreaDescription>

            <DropdownContainer>
            <Dropdown options={options} onChange={(e)=>setCategory(e.value)} placeholder="Select an option" />;       
            </DropdownContainer>
            

            <Button onClick={getData} primary="true" dark="true">
                            Create </Button>

                            <br></br>

                            <Button onClick={() => history.push('/home')} primary="true" dark="true">
                        Back </Button>

            {showUIData()}
        
        </>
    )
}

export default ArticleCreation;
