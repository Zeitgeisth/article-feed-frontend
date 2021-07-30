import React from 'react'
import Login from '../loginPage';
import SignUp from '../SignUp'
import Home from './Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import ArticleCreation from '../articleCreation';
import EditUser from '../EditUser';
import UserArticle from '../userArticle';
import EditArticle from '../editArticle';


const page = () => {
    return (
        
        <>
        <Route exact path="/">
        <Login/>
        </Route>
        <Route path="/signup">
        <SignUp />
        </Route>
        <Route path="/home">
        <Home />
        </Route>
        <Route path="/createArticle">
                <ArticleCreation />
        </Route> 
        <Route path="/editYourself">
                <EditUser />
        </Route> 
        <Route path="/yourArticles">
                <UserArticle />
        </Route> 
        <Route path="/editArticle">
                <EditArticle />
        </Route> 

            
        </>
    )
}

export default page;
