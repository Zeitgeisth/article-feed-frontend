import styled from 'styled-components'

export const ArticlesContainer = styled.div `
    //height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606; 
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
    margin-left: 80px;
}
`

    export const ArticlesCard = styled.li`
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border-radius: 10px;
        max-height: 340px;
        padding: 30px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        transition: all 0.2s ease-in-out;
        margin-bottom: 30px; 
        &:hover {
            transform: Scale(1.02);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
        }
    `

    export const ArticlesIcon = styled.img`
        height: 80%;
        width: 50%;
        margin-bottom: 10px;
    `

    export const StyledTextAreaTitle = styled.textarea`
        resize: none;
        margin-top: 40px;
        width: 60%;
        overflow: hidden;
        outline: none;
        &::placeholder {
            color: grey;
            opacity: 0.9;
        }
    `; 


  export const StyledTextAreaDescription = styled.textarea`
    resize: none;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 60%;
    overflow: hidden;
    outline: none;
    height: 300px;
    &::placeholder {
        color: grey;
        opacity: 0.9;
    }
`; 

export const DropdownContainer = styled.div `
    display: flex;
    margin-left: 35%;
    flex-direction: column;
    width: 30%;
    justify-content: center;
    align-items: center;
    background: ##fff;  
`

export const ArticlesUL = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    text-align: center;
    border-tp[]: 1px solid grey;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 2px 4px 1px rgba(0,0,0,0.18);
    background: #fff;
    box-sizing: border-box;
`;

export const ArticlesLI = styled.li`
    padding: 10px 5px;
    width: 100%;
    height: 20px;
    background: #fff;
    align-items: left;
    text-align: left;
    justify-content: center;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        background-color: rgba(128, 128, 128, 0.20);
    }
`;