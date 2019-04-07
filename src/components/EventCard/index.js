// Libraries
import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Components
import logo from 'assets/logo.png'
import Card from 'components/Card'
import styles from './eventcard.module.scss'
import { dateToViewDate } from 'utils'

const EventCard = React.memo(({
  title,
  eventDate,
  imageURL
}) => {
  const [error, setError] = useState(false)
  const onImageError = useCallback(() => setError(true))
  return (
    <Card paddingless level={0} className={styles.eventcard}>
      <div className={styles.image_container}>
        <Link to='/'>
          <img src={error ? logo : imageURL} alt='event flyer' onError={onImageError} />
        </Link>
      </div>
      <div className={styles.content}>
        <Link className={styles.link} to='/'><h3>{title}</h3></Link>
        <p>{dateToViewDate(new Date(eventDate))}</p>
      </div>
    </Card>
  )
})

EventCard.propTypes = {
  title: PropTypes.string,
  eventDate: PropTypes.string,
  imageURL: PropTypes.string
}

export default EventCard
