// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Components

import styles from './container.module.scss'

const Container = ({
  fluid,
  children,
  className
}) => {
  return (
    <div className={classNames(styles.container, {
      [styles.fluid]: fluid,
      [className]: !!className
    })}>
      {children}
    </div>
  )
}

Container.defaultProps = {
  children: null,
  className: ''
}

Container.propTypes = {
  fluid: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Container
