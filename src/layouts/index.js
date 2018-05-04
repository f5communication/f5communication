import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from "styled-components"

import 'semantic-ui-css/semantic.min.css';

const Layout = ({ children, data }) => (
    <div>
        {children()}
    </div>
  )

Layout.propTypes = {
  children: PropTypes.func,
}

const Wrapper = styled.div`
body, html {
  overflow-x: hidden !important;
}

*:not(i){
  font-family: 'Open Sans', sans-serif !important;
}

.header, h1,h2,h3,h4,h5,h6 {
  font-family: 'Muli', sans-serif !important;
}
`

export default Layout