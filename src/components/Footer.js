import React, { Component } from 'react'
import { Header, Container, Grid, Segment, Icon, Card, Image } from "semantic-ui-react"
import styled from "styled-components";
import ReactRevealText from 'react-reveal-text'
import Waypoint from 'react-waypoint';

import { colors } from "./datas"

class Footer extends Component {
    state = {
        revealed: false
    }

    toggleVisibility = () => this.setState({ revealed: true })
    // toggleVisibility = () => console.log('yo')

    render(){
        const { revealed } = this.state;
        return (
            <SectionWrapper>
                <div className="title-band">
                  <Container>
                      <p>{texts.title} Developped by <a href="https://mexar.fr" target="_blank" >MeXaR</a></p>
                  </Container>
                </div>
            </SectionWrapper>
          )
    }
}

const texts = {
    title: "©  2018 Communication à Toulouse, Paris & ailleurs.",
}

export default Footer

const SectionWrapper = styled.div`
.title-band{
    background-color: ${colors.main} !important; 
    p {
        padding-top: 20px !important;
        padding-bottom: 20px !important;
        color: rgb(60, 66, 79) !important;
        font-size: 1.2rem !important;
        line-height: 3rem !important;
        font-family: Muli,sans-serif !important;
        font-weight: 400 !important;
        text-rendering: optimizeLegibility !important;
    }
}

`
