// Libraries
import React from 'react'
import { Link } from 'react-router-dom'

// Components
import styles from './header.module.scss'
import Container from 'components/Container'
import Logo from 'components/Logo'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link to='/'>
          <Logo className={styles.logo} />
        </Link>
      </Container>
    </header>
  )
}

export default Header
