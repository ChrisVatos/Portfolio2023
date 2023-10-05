import React from 'react'
import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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

function NavbarLinkToSocials() {
  return (
    <LinkIconsWrapper>
        <StyledIconButton sx={{color: 'white'}}>
            <LinkedInIcon />
        </StyledIconButton>

        <StyledIconButton sx={{color: 'white'}}>
            <GitHubIcon />
        </StyledIconButton>
    </LinkIconsWrapper>   
  )
}

export default NavbarLinkToSocials;
