import React from 'react'
import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom'
import PixIcon from '@mui/icons-material/Pix';
import LaptopIcon from '@mui/icons-material/Laptop';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';

const LinkIconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledIconButton = styledMUI(IconButton)`
    color: #fff;
    border-radius: 0;
    align-items: center;

    :hover {
        background-color: #3f3f3f;
    }
`;

function NavbarMainNavMobile() {
  return (
    <LinkIconsWrapper>
        <NavLink to='/skills' >
            <StyledIconButton sx={{color: 'white'}}>
                <PixIcon />
            </StyledIconButton>
        </NavLink>

        <NavLink to='/projects' >
            <StyledIconButton sx={{color: 'white'}}>
                <CenterFocusStrongIcon />
            </StyledIconButton>
        </NavLink> 

        <NavLink to='/experiences' >
            <StyledIconButton sx={{color: 'white'}}>
                <LaptopIcon />
            </StyledIconButton>
        </NavLink> 

        <NavLink to='/resume' >
            <StyledIconButton sx={{color: 'white'}}>
                <ContentPasteIcon />
            </StyledIconButton>
        </NavLink> 
    </LinkIconsWrapper>  
  )
}

export default NavbarMainNavMobile;

