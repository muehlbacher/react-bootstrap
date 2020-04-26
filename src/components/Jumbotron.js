import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import rainyCity from '../assets/rainy-city.jpg';
import {Home} from '../Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const Styles = styled.div`
    .jumbo {
        background: url(${rainyCity}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: ${window.screen.height}px;
        position: static;
        z-index: -2;
        margin-top:-55px;
    }

    .overlay {
        background-coloer: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    .button {
        z-index: 2; 
    }
    .container {
        z-index: 1;
        margin-top: ${window.screen.height/2}px;
    }


`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p> Hello</p>
                <Button className="button" href="/" variant="outline-light" size="lg">Go to Content</Button>

            </Container>
           
        </Jumbo>

    </Styles>

);