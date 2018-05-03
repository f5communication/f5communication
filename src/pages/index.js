import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';

import Landing from "../components/Landing"
import FirstSection from "../components/FirstSection"
import SecondSection from "../components/SecondSection"
import ThirdSection from "../components/ThirdSection"
import TeamSection from "../components/TeamSection"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


const IndexPage = ({ data }) => {
  const { 
    background,
    firstSection,
    secondSection
  } = data
  console.log(data)
  return(
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i|Open+Sans:300,300i,400,400i,600,600i" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/images/favicon.png"/>
      </Helmet>
      <Landing background={data.background.sizes} />
      <FirstSection texts={firstSection}/>
      <SecondSection texts={secondSection}/>
      <ThirdSection />
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query LandingPage{
        background: imageSharp(id: {regex: "/background/"}) {
          sizes(maxWidth: 1920) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
          } 
        }
        firstSection: contentYaml(id: { regex: "/first/" }) {
          id
          title
          subtitle
          cards {
              icon
              title
              content
          }
        }
        secondSection: contentYaml(id: { regex: "/second/" }) {
          id
          title
          subtitle
          image
        }
      }
`
