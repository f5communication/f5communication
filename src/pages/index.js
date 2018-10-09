import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import Measure from 'react-measure';
import Waypoint from 'react-waypoint';
import favicon from "../images/favicon.png"

import Header from '../components/header'

import Landing from "../components/Landing"
import FirstSection from "../components/FirstSection"
import SecondSection from "../components/SecondSection"
import ThirdSection from "../components/ThirdSection"
import TeamSection from "../components/TeamSection"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

class IndexPage extends Component {
  state = {
    isTop: false,
    element: "Home",
    dimensions: {
      width: -1,
      height: -1
    }
  }

  toggleTop = () => {
    if(!this.state.isTop){
      this.activeElement('Home')
    }
    this.setState({ isTop: !this.state.isTop })
  }

  activeElement = (element) => this.setState({ element })

  render(){
    const { data } = this.props
    const { dimensions = {}, isTop, element } = this.state;
    const { width, height } = dimensions
    const isMobile = width < 785
    console.log(width, isMobile)

    const { 
      background,
      firstSection,
      secondSection,
      thirdSection,
      teamSection,
      contactSection,
      seo = {}
    } = data

    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          this.setState({ dimensions: contentRect.bounds })
        }}
      >
      {({ measureRef }) => (
          <div ref={measureRef} >
            <Helmet>
              <link href="https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i|Open+Sans:300,300i,400,400i,600,600i" rel="stylesheet"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta charset="UTF-8"/>
              <title>{seo.title}</title>
              <meta name="description" content={seo.description} />
              <link rel="icon" href={favicon}/>
              <html lang="fr-FR" prefix="og: http://ogp.me/ns#" />
              <link rel="profile" href="http://gmpg.org/xfn/11" />

              <meta name="description" content={seo.description}/>
              <link rel="canonical" href="http://f5communication.com/" />
              <meta property="og:locale" content="fr_FR" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content={seo.title} />
              <meta property="og:description" content={seo.description} />
              <meta property="og:url" content="http://f5communication.com/" />
              <meta property="og:site_name" content={seo.title} />
              <meta property="og:image" content={seo.image} />

              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:description" content={seo.description} />
              <meta name="twitter:title" content={seo.title} />
              <meta name="twitter:image" content={seo.image} />

              <link rel='dns-prefetch' href='//fonts.googleapis.com' />
              <link rel='dns-prefetch' href='//s.w.org' />

              <link rel='shortlink' href='http://f5communication.com/' />

            </Helmet>

           { width !== -1 && <Header isMobile={isMobile} isTop={isTop} element={element} />}
            
            <Waypoint onEnter={this.toggleTop} onLeave={this.toggleTop} />
            <Landing background={seo.image} />
            <Waypoint onEnter={() => this.activeElement('First')} />

            <FirstSection texts={firstSection}/>
            <Waypoint onEnter={() => this.activeElement('Second')}/>

            <SecondSection texts={secondSection}/>
            <Waypoint onEnter={() => this.activeElement('Third')} />

            <ThirdSection texts={thirdSection} />
            <Waypoint onEnter={() => this.activeElement('Team')} />

            <TeamSection texts={teamSection} />
            <Waypoint onEnter={() => this.activeElement('Contact')} />

            <Contact texts={contactSection} />
            <Footer />
          </div>
        )}
      </Measure>
    )
  }

  
}

export default IndexPage

export const query = graphql`
  query LandingPage{
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
        seo: contentYaml(id: { regex: "/seo/" }) {
          title
          description
          image
        }
      }
`
