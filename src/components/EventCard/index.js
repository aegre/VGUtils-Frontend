// Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Card from 'components/Card'
import styles from './eventcard.module.scss'

const EventCard = ({
  title,
  eventDate
}) => {
  return (
    <Card className={styles.eventcard}>
      <h3>{title}</h3>
      <p>{eventDate}</p>
    </Card>
  )
}

EventCard.propTypes = {
  title: PropTypes.string,
  eventDate: PropTypes.string
}

export default EventCard
