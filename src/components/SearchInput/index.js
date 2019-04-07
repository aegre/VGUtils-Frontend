// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Input from 'components/Input'
import styles from './searchinput.module.scss'

const SearchInput = ({ id, onChange }) => {
  return (
    <Input
      onChange={onChange}
      id={id}
      placeholder='Buscar por nombre...'
      className={styles.searchinput} />
  )
}

SearchInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SearchInput
