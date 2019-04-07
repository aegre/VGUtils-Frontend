// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Components
const Card = ({ className, children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

Card.defaultProps = {
  className: ''
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Card
