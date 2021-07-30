import React, {useState, useEffect} from 'react'
import { ArticlesContainer, ArticlesH1, ArticlesWrapper, ArticlesCard, ArticlesH2, ArticlesIcon, ArticlesP, ReactContainer} from './mainArticlesElements'
import axios from 'axios'
import tokenObject from '../data'
import {FaBars} from 'react-icons/fa'

const MainArticle = () => {
    let token;


    useEffect(async() => {
        token = tokenObject.data;
        await axios.get('http://localhost:5000/Articles/getAllArticle',
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
    }, [])


    const [articles, setArticle] = useState();

    const renderArticles = ()=>{
        if(articles){
            return(
                <ArticlesWrapper>
                    {
                        articles.data.map((article)=>
                            <ArticlesCard key={article.id}>
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
        <ArticlesContainer>
                    <ArticlesH1>Articles</ArticlesH1>


                    {renderArticles()}
        </ArticlesContainer>
        
        
           
        </>
    )
}

export default MainArticle;
