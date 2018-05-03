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
    secondSection,
    thirdSection,
    teamSection,
    contactSection
  } = data

  console.log(thirdSection)

  return(
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i|Open+Sans:300,300i,400,400i,600,600i" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Social media & événementiel - Communication à Toulouse, Paris & ailleurs</title>
        <meta name="description" content="L'agence f5 communication est un collectif de passionnés indépendant proposant des services de communication digitale, community management et événementiel à Toulouse et Paris." />
        <link rel="icon" href="/images/favicon.png"/>
      </Helmet>
      <Landing background={data.background.sizes} />
      <FirstSection texts={firstSection}/>
      <SecondSection texts={secondSection}/>
      <ThirdSection texts={thirdSection} />
      <TeamSection texts={teamSection} />
      <Contact texts={contactSection} />
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
          title
          subtitle
          cards {
              icon
              title
              content
          }
        }
        secondSection: contentYaml(id: { regex: "/second/" }) {
          title
          subtitle
          image
        }
        thirdSection: contentYaml(id: { regex: "/third/" }) {
          title
          subtitle
          partners {
            logo
            name
            url
          }
        }

        teamSection: contentYaml(id: { regex: "/team/" }) {
          title
          subtitle
          members {
            image
            name
            title
            twitter
            linkedin
          }
        }
        contactSection: contentYaml(id: { regex: "/contact/" }) {
          title
          subtitle
          email
          socials {
            name
            icon
            url
          }
        }
      }
`
