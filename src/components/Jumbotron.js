import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import rainyCity from '../assets/rainy-city.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${rainyCity}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height:500px;
        position: relative;
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


`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p> Hello</p>
            </Container>
        </Jumbo>
    </Styles>

);