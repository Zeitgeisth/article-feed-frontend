import styled from 'styled-components'

export const ArticlesContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ##fff; 

`

export const ArticlesH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }   
    @media screen and (max-width: 768px){
        margin-top: 50px;
        margin-right: 0px;
        margin-bottom: 40px;
        margin-left: 40px;
        font-size: 2rem;
}
@media screen and (min-width: 1000px){

}
`

export const ReactContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ##fff; 
    grid-gap: 80px;

`

export const ArticlesWrapper = styled.ul`
    width: 500px;
    height: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 10%;
    padding: 0 50px;
    margin-left: 0%;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }
    
    @media screen and (max-width: 760px){
        grid-template-columns: 1fr;
        padding 0 20px;
    }
`

    export const ArticlesCard = styled.li`
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border-radius: 10px;
        width: 250%;
        max-height: 1500px;
        padding: 30px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
        transition: all 0.2s ease-in-out;
        margin-bottom: 30px; 
        
        @media screen and (max-width: 1000px){
           width: 130%
        }

        @media screen and (max-width: 760px){
            width: 70%
        }
    `

    export const ArticlesIcon = styled.img`
        height: 300px;
        width: 500px;
        margin-bottom: 10px;
        margin-left: 0;
    `

    export const ArticlesH2 = styled.h2`
        font-size: 1rem;
        margin-bottom: 10px;
        color:#000;
    `

    export const ArticlesP = styled.p`
        font-size: 1rem;
        text-align: center;
    `
