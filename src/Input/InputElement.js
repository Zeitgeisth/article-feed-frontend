import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    margin-left: 35%;
    background-color: white;
    border: 1px solid grey;
    width: 30%;

    @media screen and (max-width: 768px){
        width: 50%;
        margin-left: 28%;
}

`;

export const InputField = styled.input`
    height: 36px;
    font-size: 18px;
    color: black;
    justify-content: center;
    text-decoration: underline;
    
    &::placeholder {
        color: grey;
        opacity: 0.4;
    }
`
