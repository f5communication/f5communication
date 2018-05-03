import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import 'semantic-ui-css/semantic.min.css';

const Layout = ({ children, data }) => (
    <div>
      <Header/>
      <div>
        {children()}
      </div>
    </div>
  )

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
