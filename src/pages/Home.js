import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
import Sidebar from '../Sidebar';
import MainArticle from '../mainArticles';
import tokenObject from '../data';


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

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    console.log(tokenObject.data);

    return (
        <>
            <MobileIcon>
                <FaBars onClick={toggle}/>
            </MobileIcon>

            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>

            <Route path="/">
                <MainArticle />
            </Route>

         
            {/*<Route path="/yourArticles">
                <YourArticle />
            </Route>

            <Route path="/settings">
                <Settings />
            </Route> 

            
    */}
              
        </>
    )
}

export default Home;
