// Libraries
import React from 'react'
import styles from './header.module.scss'
import Container from 'components/Container'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <h2>
        VagabundosMX
        </h2>
      </Container>
    </header>
  )
}

export default Header
