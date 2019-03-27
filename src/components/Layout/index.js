// Libraries
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Components
import Header from 'components/Header'

const Layout = ({
  children
}) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
