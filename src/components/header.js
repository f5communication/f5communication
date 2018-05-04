import React, { Component } from 'react'
import { Menu, Image, Container } from 'semantic-ui-react'
import Link from 'gatsby-link'
import Waypoint from 'react-waypoint';
import { colors } from "./datas"
import styled from "styled-components";
import Img from "gatsby-image";
import logo from "./logovert.png"


class Header extends Component {
  state = {
    isTop: false
  }

  toggleTop = () => this.setState({ isTop: !this.state.isTop })

  render(){
    const { isTop } = this.state;

    return (
      <HeaderWrapper isTop={isTop} className="wrapper">
        <Waypoint
          onEnter={this.toggleTop}
          onLeave={this.toggleTop}
        />
        <Menu borderless fixed="top" widths={isTop ? 6 : null} className={ isTop ? "submenu" : null }>
        <Container fluid={!isTop}>
              <Menu.Item className="logo">
                <Image src={logo} size={isTop ? null : "small"} />
              </Menu.Item>
              { items.map((item, i) =>(
                <Menu.Item key={i} position={i === 0 && !isTop ? "right" : null} >
                  {item}
                </Menu.Item>
              ))}      
              </Container> 
        </Menu>
      </HeaderWrapper>
    )
  }
}

export default Header



const HeaderWrapper = styled.div`
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
      top: -70px;
      left: 50%;
      transform: translateX(-50%);
      ` : ''}

    }
      img {
        margin-bottom: 0 !important;
      }
    }
  }
`


const items = [
  "Home",
  "Les services",
  "Le collectif",
  "Les complices",
  "La team",
  "Contact"
]