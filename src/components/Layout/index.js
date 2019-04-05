// Libraries
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Components
import Header from 'components/Header'
import Container from 'components/Container'

const Layout = ({
  children
}) => {
  return (
    <Fragment>
      <Header />
      <Container>
        {children}
      </Container>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
