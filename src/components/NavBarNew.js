import React from 'react';
import classnames from 'classnames';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
//import './style.scss';

const Styles = styled.div`
    .navbar{
        background-color: #222;
        height: 55px;
        background: transparent;
    }
    
    .navbar-brand, .navbar-nav .nav-link{
        color: #bbb;

        &:hover {
            color:white;
        }
 
    }
        $break-small: 700px;
    $navbar-background: rgb(33, 37, 40);
    $link-color: rgb(130, 137, 145);

    .navbar {
    width: 100%;
    padding: 10px;
    position: fixed;
    top: 0;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.4);
    background: $navbar-background;
    transition: top 0.6s;

    .nav-content {
        max-width: 1200px;
        margin: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    @media screen and (max-width: $break-small) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-link {
        text-decoration: none;
        margin-left: 20px;
        color: $link-color;
        transition: color 0.3s;

        &:hover {
        color: white;
        transition: color 0.3s;
        }
    }

        img {
            width: 2rem;
            margin: 0;
        }
    }

    .navbar--hidden {
        background-color: #222;
        opacity: 0.7
    }

`;

export default class NavBarNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    //const visible = prevScrollpos > currentScrollPos;
    const visible = currentScrollPos < window.screen.height - window.screen.height/8;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
         <Styles>
        <Navbar className={classnames('navbar', {
          // eslint-disable-next-line react/destructuring-assignment
          'navbar--hidden': !this.state.visible
        })} expand="lg" fixed="top">
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
  }
}

   /*
    <nav
        className={classnames('navbar', {
          // eslint-disable-next-line react/destructuring-assignment
          'navbar--hidden': !this.state.visible
        })}
      >
        <div className="nav-content">
          <Link className="nav-link" to="#">
            Link 1
          </Link>
          <Link className="nav-link" to="#">
            Link 2
          </Link>
          <Link className="nav-link" to="#">
            Link 3
          </Link>
        </div>
      </nav>
      */