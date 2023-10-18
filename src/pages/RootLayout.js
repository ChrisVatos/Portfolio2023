import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from 'styled-components'

const MainBody = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;      
    height: 100vh;  
`

function RootLayout() {
    return (
    <>
        <Navbar />
        <MainBody>
            <Outlet />
        </MainBody>
    </>
    );
}

export default RootLayout;