// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Components
import logo from 'assets/logo.png'
import classnames from 'classnames'

const Logo = ({
  className
}) => {
  return (
    <img src={logo}
      className={
        classnames({
          [className]: !!className
        })
      }
      alt='logo'
    />
  )
}

Logo.defaultProps = {
  className: ''
}

Logo.propTypes = {
  className: PropTypes.string
}

export default Logo
