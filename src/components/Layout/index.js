// Libraries
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Components
import Header from 'components/Header'
import Container from 'components/Container'
import styles from './layout.module.scss'

const Layout = ({
  children
}) => {
  return (
    <Fragment>
      <Header />
      <Container className={styles.main_content}>
        {children}
      </Container>
      <p className='text-light text-center margin-bottom-small'>VagabundosMx 2019.</p>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
