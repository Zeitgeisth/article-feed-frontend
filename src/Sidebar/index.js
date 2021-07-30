import React from 'react'
import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute} from './SidebarElements'
import { useHistory } from 'react-router-dom';

const Sidebar = ({isOpen, toggle}) => {
    const history = useHistory();
    const yourArticlesCallback = () => {
        toggle();
        
        history.push({
            pathname: '/createArticle',
        })
    }

    const yourArticles = () => {
        toggle();
        
        history.push({
            pathname: '/yourArticles',
        })
    }

    const editYourself = () => {
        toggle();
        
        history.push({
            pathname: '/editYourself',
        })
    }

    const homeCallback = () => {
        toggle();
        
        history.push({
            pathname: '/home',
        })
    }
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon oncLick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink onClick={homeCallback}>
                        Home
                    </SideBarLink>
                    
                    <SideBarLink onClick={editYourself}>
                        Change Information
                    </SideBarLink>
                    
                    <SideBarLink onClick={yourArticlesCallback}>
                        CreateArticle
                    </SideBarLink>

                    <SideBarLink onClick={yourArticles}>
                        YourArticles
                    </SideBarLink>

                </SideBarMenu>

                <SideBtnWrap>
                    <SideBarRoute to="/"> Log Out</SideBarRoute>
                </SideBtnWrap>

            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar;