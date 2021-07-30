import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { ArticlesContainer, ArticlesH1, ArticlesWrapper, ArticlesCard, ArticlesH2, ArticlesIcon, ArticlesP, ReactContainer, CloseIcon, EditIcon, IconContainer} from './mainArticlesElements'
import axios from 'axios'
import tokenObject from '../data'
import {FaBars} from 'react-icons/fa'
import Sidebar from '../Sidebar'
import { useHistory } from 'react-router-dom';


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

const UserArticle = () => {
    let token;
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    const fetchAPI = async() =>{
        token = tokenObject.data;
        await axios.get('http://localhost:5000/Articles/getUserArticle',
        {
            headers: {
                'x-auth-token': token
            }
        })
            .then( (response) =>{
                console.log(response);
                setArticle(response);
                response.data.map((article)=>{
                    console.log(article.images);
                })
    
              
            })
            .catch(err =>{
                console.log(err);
                
            } ); 
    }


    useEffect(async() => {
        fetchAPI();
    }, [])


    const [articles, setArticle] = useState();

    const renderArticles = ()=>{
        if(articles){
            return(
                <ArticlesWrapper>
                    {
                        articles.data.map((article)=>
                            <ArticlesCard key={article.id}>
                                {/*history.push('/home')*/}
                               
                                <CloseIcon onClick={async()=>{
                                    await axios.delete('http://localhost:5000/Articles/deleteArticle',
                                    {
                                        data:{
                                            bid: article.id
                                    }
                                        ,
                                        headers: {
                                            'x-auth-token': token
                                        }
                                    })
                                        .then( (response) =>{
                                            console.log(response);
                                            fetchAPI();
                                            
                                          
                                        })
                                        .catch(err =>{
                                            console.log(err);
                                            
                                        } ); 
                                }}></CloseIcon>
                               
                               <EditIcon onClick={()=>{
                                   history.push({pathname: '/editArticle', state: { detail: article } })
                               }}></EditIcon>
                                <ArticlesH2>{article.headlines}</ArticlesH2> 
                                
                                    <ArticlesIcon src={'http://localhost:5000/'+article.images}></ArticlesIcon>
                                
                                <ArticlesP>{article.text}</ArticlesP>
                            </ArticlesCard>
                        )
    
                    }
                </ArticlesWrapper>
            )
        }
    

       
    }

    return (
        <>
        <MobileIcon>
                <FaBars onClick={toggle}/>
            </MobileIcon>

        <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
                    
        <ArticlesContainer>
                    <ArticlesH1>Articles</ArticlesH1>


                    {renderArticles()}
        </ArticlesContainer>
        
        
           
        </>
    )
}

export default UserArticle;
