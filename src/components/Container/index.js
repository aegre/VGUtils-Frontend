// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Components

import styles from './container.module.scss'

const Container = ({
  fluid,
  children
}) => {
  return (
    <div className={classNames(styles.container, {
      [styles.fluid]: fluid
    })}>
      {children}
    </div>
  )
}

Container.defaultProps = {
  children: null
}

Container.propTypes = {
  fluid: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Container
