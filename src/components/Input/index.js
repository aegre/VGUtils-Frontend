// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// Components
import styles from './input.module.scss'

class Input extends Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    }, this.notifyChange)
  }

  notifyChange = () => {
    const { onChange } = this.props
    const { value } = this.state
    onChange(value)
  }

  render () {
    const { id, label, className, placeholder } = this.props
    const { value } = this.state
    return (
      <div className={
        classnames(
          styles.input, {
            [className]: !!className
          }
        )}>
        <label
          htmlFor={id}>
          {label}
          <input
            value={value}
            onChange={this.handleChange}
            placeholder={placeholder}
            id={id} />
        </label>
      </div>
    )
  }
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

Input.defaultProps = {
  className: '',
  label: '',
  placeholder: '',
  onChange: () => {}
}

export default Input
