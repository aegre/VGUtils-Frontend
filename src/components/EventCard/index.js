// Libraries
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import logo from 'assets/logo.png'

// Components
import Card from 'components/Card'
import styles from './eventcard.module.scss'

const EventCard = ({
  title,
  eventDate,
  imageURL
}) => {
  const [error, setError] = useState(false)
  return (
    <Card paddingless level={0} className={styles.eventcard}>
      <div className={styles.image_container}>
        <img src={error ? logo : imageURL} alt='event image' onError={() => setError(true)} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{eventDate}</p>
      </div>
    </Card>
  )
}

EventCard.propTypes = {
  title: PropTypes.string,
  eventDate: PropTypes.string,
  imageURL: PropTypes.string
}

export default EventCard
