import React, { Component } from 'react'
import { Header, Container, Grid, Segment, Icon, Card, Image } from "semantic-ui-react"
import styled from "styled-components";
import ReactRevealText from 'react-reveal-text'
import Waypoint from 'react-waypoint';
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"

import { colors } from "./datas"

class Contact extends Component {
    state = {
        revealed: false
    }

    toggleVisibility = () => this.setState({ revealed: true })
    // toggleVisibility = () => console.log('yo')

    render(){
        const { revealed } = this.state;
        const { texts } = this.props;
        return (
            <SectionWrapper id="Contact">
                <Waypoint
                    onEnter={this.toggleVisibility}
                />  
                <div className="title-band">
                  <Container>
                        <Slide left>
                            <h2>{texts.title}</h2>
                        </Slide>
                  </Container>
                </div>
          
                <div className="message-band">
                  <Container>
                      <Fade>
                      <p>{texts.subtitle}</p>
                      </Fade>
                  </Container>
                </div>
                <div className="email-band">
                  <Container>
                      <Grid centered stackable>
                        <Grid.Column width={8}>
                            <h2><ReactRevealText show={revealed}>{texts.email}</ReactRevealText></h2>
                                <div className="social">
                                { texts.socials && texts.socials.map((social, i) => (
                                    <a href={social.url} key={i} target="_blank">
                                        <Icon name={social.icon} size="large" />
                                    </a>
                                ))}
                                </div>
                        </Grid.Column>
                        </Grid>
                  </Container>
                </div>
            </SectionWrapper>
          )
    }
}
export default Contact

const SectionWrapper = styled.div`
background-image: url("/assets/backgroundcontact.jpg");
.title-band{
    background-color: ${colors.main} !important; 
    h2 {
        padding-top: 40px !important;
        padding-bottom: 40px !important;
        color: #fff !important;
        font-size: 2.7rem !important;
        line-height: 3rem !important;
        font-family: Muli,sans-serif !important;
        font-weight: 600 !important;
        text-rendering: optimizeLegibility !important;
    }
}

.message-band {
    padding-top: 75px;
    padding-bottom: 75px;
    background-color: rgba(255,255,255,0.85) !important; 
    color:rgb(60, 66, 79);
    font-family:"Open Sans", sans-serif;
    font-size:1.6rem !important;
    font-weight:500;
    line-height:32px;   
    outline-style:none;
    text-align:center;
    word-wrap:break-word;
    -webkit-box-direction:normal;
}
.email-band {
    padding-bottom: 75px;
    margin-top:14px;
    background-color: rgba(255,255,255,0.85) !important; 
    color:rgb(60, 66, 79);
    font-family:Muli, sans-serif;
    font-weight:600;
    line-height:32px;   
    text-align:center;
    word-wrap:break-word;
    text-transform: uppercase;
    h2 {
        border: 5px solid ${colors.main} !important; 
        padding: 20px;
        width: fit-content;
        text-align: center;
        margin: auto;
        font-size:1.2rem !important;
    }
    .social {
        margin-top: 25px;
        display: flex;
        font-size:1.6rem !important;
        justify-content: space-around;
    }
}
`
