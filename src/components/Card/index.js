// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// Components
import styles from './card.module.scss'

const Card = ({ className, children, paddingless, level }) => {
  return (
    <div className={
      classnames(
        styles.card, {
          [styles.paddingless]: paddingless,
          [styles.level_1]: level === 1,
          [styles.level_2]: level === 2,
          [styles.level_3]: level === 3,
          [className]: !!className
        }
      )
    }>
      { children }
    </div>
  )
}

Card.defaultProps = {
  className: '',
  paddingless: false,
  level: 1
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  paddingless: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3])
}

export default Card
