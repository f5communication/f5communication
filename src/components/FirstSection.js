import React from 'react'
import { Header, Container, Grid, Segment, Icon } from "semantic-ui-react"
import styled from "styled-components";
import Fade from "react-reveal/Fade"

const FirstSection = ({ texts = {} }) => {
    return (
        <SectionWrapper id="First" >
            <Container>
              <Grid centered stackable stretched>
                  <Grid.Column width={16}>
                  <Fade up>
                  <Header as='h1' textAlign='center' >
                      {texts.title}
                      <Header.Content dangerouslySetInnerHTML={{__html: texts.subtitle}} />
                  </Header>
                  </Fade>
                  </Grid.Column>
                  { texts.cards.map((card, i) => (
                      <Grid.Column width={5} key={i} >
                      <Fade 
                          left={i === 0 || i === 3 }
                          up={i === 1 || i === 4 }
                          right={i === 2 || i === 5 }
                      >
                          <div className="single-card">
                              <Header as='h3' icon textAlign='center'>
                                  <Icon name={card.icon} circular />
                                  <Header.Content>
                                  {card.title}
                                      <Header.Subheader>
                                          {card.content}
                                      </Header.Subheader>
                                  </Header.Content>
                              </Header>
                          </div>
                      </Fade>
                      </Grid.Column>
                  ))}
              </Grid>
            </Container>
        </SectionWrapper>
      )
      
}
export default FirstSection

const SectionWrapper = styled.div`
padding-top: 75px;
padding-bottom: 75px;
background-color: #fff;
    h1.header{
    font-family: Muli,sans-serif !important;
    font-weight: 550 !important;
    color: #3C424F !important;
    text-rendering: optimizeLegibility !important;
    margin-bottom: 16px !important;
    display: block !important;
    font-size:3em !important;
    -webkit-margin-before: 0.83em !important;
    -webkit-margin-after: 0.83em !important;
    .content {
        color:rgb(60, 66, 79);
        font-family:"Open Sans", sans-serif;
        font-size:1.6rem !important;
        font-weight:300;
        line-height:32px;
        margin-bottom:32px;
        outline-color:rgb(60, 66, 79);
        text-align:center;
        word-wrap:break-word;
    }
 }
 .single-card {
    border: 1px solid #e0e1e1;
    padding: 20px 35px;
    transition: all 100ms ease-in;
    .ui.icon.header .circular.icon { 
        background-color: #343a40;
        color: white;
        margin-bottom: 15px !important;
        padding:28px !important;
        height: 120px !important;
        width: 120px !important;
        font-size: 56px;
    }
    .header {
        font-family: "Open Sans",sans-serif;
        font-size: 1.3rem;
        line-height: 1.75rem;
        letter-spacing: .0625rem;
        margin-top: 15px !important;
        color: #3C424F !important;
        .sub.header {
            margin-top: 15px !important;
        font-size: 1.1rem !important;
            font-family: "Open Sans",sans-serif;
            color: #8E9DAE !important;
        }
    }
 }
 .single-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(189,189,189,.19), 0 6px 6px rgba(189,189,189,.23);
    }
`