import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';

import Header from '../components/header'

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

  return(
    <div>
      <Helmet>
        {/* <link href="https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i|Open+Sans:300,300i,400,400i,600,600i" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="UTF-8"/>
        <title>{}</title>
        <meta name="description" content={} />
        <link rel="icon" href="/images/favicon.png"/>
        <html lang="fr-FR" prefix="og: http://ogp.me/ns#" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />

        <meta name="description" content={}/>
        <link rel="canonical" href="http://f5communication.com/" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={} />
        <meta property="og:description" content={} />
        <meta property="og:url" content="http://f5communication.com/" />
        <meta property="og:site_name" content={} />

        <meta property="og:image" content={} />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={} />
        <meta name="twitter:title" content={} />
        <meta name="twitter:image" content={} />

        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//s.w.org' />


        <link rel='shortlink' href='http://f5communication.com/' /> */}

      </Helmet>

      <Header/>
      
      <Landing background={background.sizes} />
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
        background: imageSharp(id: {regex: "/background.jpg/"}) {
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
