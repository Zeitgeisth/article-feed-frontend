import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 30%;
    height: 100%;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    opacity: ${({isOpen})=>(isOpen ? '100%':'0')};
    top: ${({isOpen})=>(isOpen ? '0' : '-100%')};

    @media screen and (max-width: 768px){
        width: 50%;
}
`;

export const CloseIcon = styled(FaTimes)`
        color: #000;
`;

export const Icon = styled.div`
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

export const SideBarWrapper = styled.div`
    color: #fff;
`

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SideBarLink = styled(LinkR)`
    display: flex;
    align-itens: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SideBarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

    `