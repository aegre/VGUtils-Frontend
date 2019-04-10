// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Components
import styles from './button.module.scss'

const kindStyles = {
  primary: styles.primary
}

const Button = ({
  onClick,
  disabled,
  children,
  className,
  kind
}) => {
  return (
    <button className={classNames(styles.button, kindStyles[kind], {
      [className]: !!className
    })}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  children: undefined,
  kind: 'primary',
  className: '',
  onClick: () => {}
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  kind: PropTypes.string
}

export default Button
