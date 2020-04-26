import React, { useState, useEffect } from "react";
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

export const useScroll = callback => {
  const [scrollDirection, setScrollDirection] = useState(true);

  const handleScroll = () => {
    const direction = (() => {
      // if scroll is at top or at bottom return null,
      // so that it would be possible to catch and enforce a special behaviour in such a case.
      if (
        window.pageYOffset === 0 ||
        window.innerHeight + Math.ceil(window.pageYOffset) >=
          document.body.offsetHeight
      )
        return null;
      // otherwise return the direction of the scroll
      return scrollDirection < window.pageYOffset ? "down" : "up";
    })();

    callback(direction);
    setScrollDirection(window.pageYOffset);
  };

  // adding and cleanning up de event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
};

export default props => {
  const [elementVisible, setElementVisible] = useState(true);
  const { scrollDirection } = props;
  

  // when scroll direction changes element visibility adapts, but can do anything we want it to do
  // U can use ScrollDirection and implement some page shake effect while scrolling
  useEffect(() => {
    setElementVisible(
      scrollDirection === "down"
        ? false
        : scrollDirection === "up"
        ? true
        : true
    );
  }, [scrollDirection]);

  return (
    <Styles>
        <Navbar expand="lg" fixed="top"
        style = {{
            background: `${elementVisible ? "transparent" : "black"}`
          }}>
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
  );
};

/*
    <div
      style={{
        background: "#ff0",
        padding: "20px",
        position: "fixed",
        width: "100%",
        display: `${elementVisible ? "inherit" : "none"}`
      }}
    >
      element
    </div>
    */