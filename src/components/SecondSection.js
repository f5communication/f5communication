import React from 'react'
import { Header, Container, Grid, Segment, Icon, Image } from "semantic-ui-react"
import styled from "styled-components";
import Fade from "react-reveal/Fade"

import { images } from "./datas"

const SecondSection = ({ texts }) => (
  <SectionWrapper>
      <Container>
        <Grid centered stackable stretched>
            <Grid.Column width={8}>
            <Fade left>
                <Header as='h1' >
                    {texts.title}
                </Header>
                <p className="content">
                    {texts.subtitle}
                </p>
            </Fade>
            </Grid.Column>
            <Grid.Column width={8}>
                <Fade right>
                    <div className="image-wrapper">
                        <Image src="/assets/collectif.jpg" className="collectif" alt={images.collectif} />
                    </div>
                </Fade>
            </Grid.Column>
        </Grid>
      </Container>
  </SectionWrapper>
)

export default SecondSection


const SectionWrapper = styled.div`
padding-top: 75px;
padding-bottom: 75px;
background-color: #fff;

.image-wrapper {
    display: flex;
    align-items: center;
}

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

 }
 .content {
        color:rgb(60, 66, 79);
        font-family:"Open Sans", sans-serif;
        font-size:1.6rem !important;
        font-weight:300;
        line-height:32px;
        margin-bottom:32px;
        margin-left:0px;
        margin-right:0px;
        margin-top:0px;
        outline-color:rgb(60, 66, 79);
        outline-style:none;
        outline-width:0px;
        padding-bottom:0px;
        padding-left:0px;
        padding-right:0px;
        padding-top:0px;
        text-align: justify;
        word-wrap:break-word;
        -webkit-box-direction:normal;
        -webkit-margin-after:32px;
        -webkit-margin-before:0px;
        -webkit-margin-end:0px;
        -webkit-margin-start:0px;
    }

`

const texts = {
    title: "Le collectif / f5 / communication",
    subtitle: `
    Depuis plusieurs années, notre parcours et nos rencontres 
    nous ont permis d’intégrer des équipes projets, éveillant 
    notre curiosité, développant nos compétences professionnelles 
    et relationnelles et nous permettant de nous spécialiser en 
    communication digitale et en gestion événementielle. 
    Pleines de vie, toujours le sourire aux lèvres, sans cesse 
    en recherche de nouveauté, nous mettons nos compétences au 
    service de vos entreprises, organisations, associations ou 
    startups pour vous conseiller au mieux et co-crééer votre 
    communication.`
}