import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background-color: #222;
        height: 55px;
    }
    
    .navbar-brand, .navbar-nav .nav-link{
        color: #bbb;

        &:hover {
            color:white;
        }
 
    }

`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" fixed="top" bg="transparent">
            <Navbar.Brand href="/">Code Life </Navbar.Brand>
            <Navbar.Toggle area-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className = "ml-auto">
                    <Nav.Item><Nav.Link href ="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)