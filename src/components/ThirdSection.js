import React from 'react'
import { Header, Container, Grid, Segment, Icon, Image } from "semantic-ui-react"
import styled from "styled-components";
import Fade from "react-reveal/Fade"

import { images } from "./datas"

const SecondSection = () => {

    let mainIdx = -1
    const IMAGE_PER_ROW = 4

    const result = texts.partners.reduce((accumulateur, valeurCourante, index) => {
        const accLength = accumulateur.length
        const nestedIndex =  index % IMAGE_PER_ROW
        if(nestedIndex === 0){
            mainIdx++
        }
            if(!accumulateur[mainIdx]){
                accumulateur[mainIdx] = []
            }
            accumulateur[mainIdx].push(valeurCourante)
        
        return accumulateur;
      }, []);

      console.log(result)


    return (
        <SectionWrapper>
            <Container>
              <Grid centered stackable >
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
                  { result.map((array, i) => (
                        <Fade delay={(i+1) * 500}>
                      <Image.Group key={i}>
                        { array.map((partner, i2) => (
                          <Image 
                            src={partner.logo} 
                            key={i2} 
                            alt={partner.name} 
                            href={partner.url} 
                            target="_blank"
                        />
                        ))}
                      </Image.Group>
                        </Fade>
                  )) }
                  </Grid.Column>
              </Grid>
            </Container>
        </SectionWrapper>
      )
}

export default SecondSection


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
    .image {
        height: 124px !important;
        width: 124px !important;
        filter: grayscale(100%);
        opacity: .6;
        transition: 1s all;
    }
    .image:hover {
        filter: none;
        opacity: 1;
    }
`

const texts = {
    title: "Nos heureux collaborateurs",
    subtitle: `
    TPE, PME, association ou startup, nous 
    accompagnons des organisations de tous 
    types et de secteurs d’acvitiés variés 
    tels que le numérique, l’innovation, 
    l’entreprenariat, l’énergie, l’environnement, 
    l’emploi…`,
    partners: [
        { logo: "http://f5communication.com/wp-content/uploads/2018/04/cropped-7.jpg", name: "La Mêlée", url: "https://mexar.fr" },
        { logo: "http://f5communication.com/wp-content/uploads/2018/04/cropped-7.jpg", name: "La Mêlée", url: "https://mexar.fr" },
        { logo: "http://f5communication.com/wp-content/uploads/2018/04/cropped-7.jpg", name: "La Mêlée", url: "https://mexar.fr" },
        { logo: "http://f5communication.com/wp-content/uploads/2018/04/cropped-7.jpg", name: "La Mêlée", url: "https://mexar.fr" },
        { logo: "http://f5communication.com/wp-content/uploads/2018/04/cropped-7.jpg", name: "La Mêlée", url: "https://mexar.fr" },
        { logo: "http://f5communication.com/wp-content/uploads/2018/04/cropped-7.jpg", name: "La Mêlée", url: "https://mexar.fr" },
        { logo: "http://f5communication.com/wp-content/uploads/2018/04/cropped-7.jpg", name: "La Mêlée", url: "https://mexar.fr" },
        { logo: "http://f5communication.com/wp-content/uploads/2018/04/cropped-7.jpg", name: "La Mêlée", url: "https://mexar.fr" },
        { logo: "http://f5communication.com/wp-content/uploads/2018/04/cropped-7.jpg", name: "La Mêlée", url: "https://mexar.fr" },
        { logo: "http://f5communication.com/wp-content/uploads/2018/04/cropped-7.jpg", name: "La Mêlée", url: "https://mexar.fr" },
        { logo: "http://f5communication.com/wp-content/uploads/2018/04/cropped-7.jpg", name: "La Mêlée", url: "https://mexar.fr" },
        { logo: "http://f5communication.com/wp-content/uploads/2018/04/cropped-7.jpg", name: "La Mêlée", url: "https://mexar.fr" },
    ]

}