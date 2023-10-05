import React from 'react'
import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import useViewport from './../hooks/useViewport'
import NavbarMainNavMobile from './NavbarMainNavMobile';
import NavbarLinkToSocials from './NavbarLinkToSocials';
import Button  from '@mui/material/Button'
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom'
import PixIcon from '@mui/icons-material/Pix';
import LaptopIcon from '@mui/icons-material/Laptop';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import CodeIcon from '@mui/icons-material/Code';

const MainNav = styled.nav`
    border: 1px solid grey;
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

const ButtonGroupWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

  const StyledButton = styledMUI(Button)`
    color: #fff;
    border-radius: 0;
    align-items: center;
    margin: 0rem 1rem;

    :hover {
        background-color: #3f3f3f;
    }
`;

const StyledIconButton = styledMUI(IconButton)`
    color: #fff;
    border-radius: 0;
    align-items: center;

    :hover {
        background-color: #3f3f3f;
    }
`;

function Navbar() {

    const { width }  = useViewport()

    return (
            <MainNav>
                
                {width > 520 ? 
                <NavLink to='/' > 
                    <StyledButton variant="text" sx={{color: 'white', fontWeight: 700, float: 'left'}} startIcon={<CodeIcon />}>Chris Vatos</StyledButton>
                </NavLink>
                 : 
                 <NavLink to="/">
                    <StyledIconButton sx={{color: 'white'}}>
                        <CodeIcon />
                    </StyledIconButton>
                 </NavLink>
                }

                {width > 950 ? 
                    <ButtonGroupWrapper>
                        <NavLink to='/skills' >
                            <StyledButton variant="text" startIcon={<PixIcon />}>Skills</StyledButton>
                        </NavLink>

                        <NavLink to='/projects' >
                            <StyledButton variant="text" startIcon={<CenterFocusStrongIcon />}>Projects</StyledButton>
                        </NavLink>

                        <NavLink to='/experiences' >
                            <StyledButton variant="text" startIcon={<LaptopIcon />}>Expriences</StyledButton>    
                        </NavLink> 

                        <NavLink to='/resume' >
                            <StyledButton variant="text" startIcon={<ContentPasteIcon />}>Resume</StyledButton>   
                        </NavLink> 
                    </ButtonGroupWrapper> 
                    :
                   <NavbarMainNavMobile />
                }    
                
                <NavbarLinkToSocials/>  

            </MainNav> 
    )
}
export default Navbar;
