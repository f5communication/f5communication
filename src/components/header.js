import React, { Component } from 'react'
import { Menu, Image, Container, Button } from 'semantic-ui-react'
import Link from 'gatsby-link'
import { colors } from "./datas"
import styled, { keyframes } from 'styled-components';
import Img from "gatsby-image";
import logo from "../images/logovert.png"
import { fadeIn } from 'react-animations';
const fadeInAnimation = keyframes`${fadeIn}`;

class Header extends Component {
  state = {
    opened: false
  }

  toggleOpen = () => this.setState({ opened: !this.state.opened })

  goThere = (e, { name }) => {
    e.preventDefault()
    const element = document.getElementById(name);
    const top = element.offsetTop
    window.scrollTo({ top, behavior: "smooth" })
    this.setState({ opened: false })
  }

  render(){
    const { opened } = this.state;
    const { isMobile, isTop, element } = this.props;

    return (
      <HeaderWrapper isTop={isTop} className="wrapper">
         { !isMobile ?
          <Menu borderless fixed="top" widths={isTop ? 6 : null} className={ isTop ? "submenu" : null }>
            <Container fluid={!isTop}>
                <Menu.Item className="logo">
                  <Image src={logo} size={isTop ? null : "small"} />
                </Menu.Item>
                { items.map((item, i) =>(
                  <Menu.Item 
                    active={element === item.name} 
                    name={item.name} 
                    onClick={this.goThere}
                    key={i} 
                    position={i === 0 && !isTop ? "right" : null} 
                  >
                    <span>{item.text}</span>
                  </Menu.Item> ))}
            </Container> 
          </Menu>
          :
          <React.Fragment>
                <Button 
                  className="mobileButton"
                  icon={opened ? "remove" : "content"}
                  onClick={this.toggleOpen}
                />
                { opened &&
                    <Menu className="mobile-menu" size="huge" fluid vertical>
                    <Container fluid={!isTop}>
                          <Menu.Item className="logo-mobile">
                            <Image src={logo} size="small" centered />
                          </Menu.Item>
                          { items.map((item, i) =>(
                            <Menu.Item 
                              active={element === item.name} 
                              name={item.name} 
                              onClick={this.goThere}
                              key={i} 
                              position={i === 0 && !isTop ? "right" : null} 
                            >
                            <span>{item.text}</span>
                            </Menu.Item> ))}
                      </Container> 
                    </Menu>}
          </React.Fragment> }
      </HeaderWrapper>
    )
  }
}

export default Header

const HeaderWrapper = styled.div`
.active.item {
  background: none !important;
  span {
    border-bottom: 3px solid ${colors.main};
    color: ${colors.main};
  }
}
.mobileButton, .mobileButton.active, .mobileButton:focus {
  position: fixed;
  top: 10px;
  z-index:20;
  left: 10px;
  color: ${colors.main};
  border: 2px solid ${colors.main};
  background-color: ${colors.secondary};
    transition: all 500ms ease-in !important;
  * {
    transition: all 500ms ease-in !important;
}
}
.ui.vertical.mobile-menu.menu {
    position: fixed;
    margin-top:0 !important;
  z-index:10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    animation: 300ms ${fadeInAnimation};
    .item {
      text-align: center;

    }    
    .item:not(.logo) {
      text-transform: uppercase !important;
      font-weight: 600;
      font-style: normal;
      font-size: 14px;
      line-height: 160%;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 500ms ease-in;
    }

    .item:hover {
      color: ${({ isTop }) => isTop ? colors.secondary : colors.main}
    }
}
.submenu {
  padding-top: 100px !important;
}
* {
    transition: all 500ms ease-in;
}
  .ui.borderless.top.fixed.menu {
    height: 100px !important;
    ${({ isTop }) => isTop ? `
      background-color: rgba(255,255,255, 0.8);
      box-shadow: none !important;
      border-bottom: none;
    height: 200px !important;
    ` : ''}
    .item:not(.logo) {
      text-transform: uppercase !important;
      font-weight: 600;
      font-style: normal;
      font-size: 14px;
      line-height: 160%;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 500ms ease-in;
    }

    .item:hover {
      color: ${({ isTop }) => isTop ? colors.secondary : colors.main}
    }

    .logo {
      display: flex;
      align-items: center;
    ${({ isTop }) => isTop ? `
      position: absolute;
      top: -50px;
      left: 50%;
      transform: translateX(-50%);
      ` : ""}

    }
      img {
        margin-bottom: 0 !important;
      }
    }
  }
`


const items = [
  { text: "Home", name: "Home" },
  { text: "Les services", name: "First" },
  { text: "Le collectif", name: "Second" },
  { text: "Les complices", name: "Third" },
  { text: "La team", name: "Team" },
  { text: "Contact", name: "Contact" }
]