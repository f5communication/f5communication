import React from 'react'
import { Header, Container, Grid, Segment, Icon, Card, Image } from "semantic-ui-react"
import styled from "styled-components";
import Fade from "react-reveal/Fade"

const TeamSection = ({ texts = {} }) => {

    const { members = [] } = texts

    return (
        <SectionWrapper id="Team">
            <Container>
                  <Fade up>
              <Grid centered stackable stretched>
                  <Grid.Column width={16}>
                  <Header as='h1' textAlign='center' >
                      {texts.title}
                      <Header.Content>
                      {texts.subtitle}
                      </Header.Content>
                  </Header>
                  </Grid.Column>
                  { members && members.map((member, i) => (
                      <Grid.Column width={5} key={i} >
                            <Card>
                              <Image src={member.image} />
                              <Card.Content>
                              <Card.Header style={{marginBottom: 15 }} >
                                  {member.name}
                              </Card.Header>
                              <Card.Meta>
                                  <span className='date'>
                                  {member.title}
                                  </span>
                              </Card.Meta>
                              </Card.Content>
                              <Card.Content extra>
                                  <a href={member.twitter} target="_blank">
                                      <Icon name='twitter square' size="large" />
                                  </a>
                                  <a href={member.linkedin} target="_blank">
                                      <Icon name='linkedin square' size="large" />
                                  </a>
                              </Card.Content>
                          </Card>
                      </Grid.Column>
                  ))}
              </Grid>
                  </Fade>
            </Container>
        </SectionWrapper>
      )
}

export default TeamSection

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
    -webkit-margin-start: 0px !important;
    -webkit-margin-end: 0px !important;
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
 .card {
     margin: auto;
    transition: all 100ms ease-in;
    text-align:center;
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
 .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(189,189,189,.19), 0 6px 6px rgba(189,189,189,.23);
    }
`
