// Libraries
import React, { Component } from 'react'

// Componentsç
import API from 'API'
import EventCard from 'components/EventCard'
import styles from './eventlist.module.scss'

class EventListView extends Component {
  state = {
    events: [],
    isLoading: false
  }

  componentDidMount () {
    this.fetchEvents()
  }

  fetchEvents = async () => {
    try {
      this.setState({ isLoading: true })
      const { data: events } = await API.Events.Fetch()
      this.setState({ events, isLoading: false })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { isLoading, events } = this.state
    return (
      <section className={styles.eventlist}>
        <h1 className='text-center'>Lista de eventos</h1>

        { isLoading && <h3>Espera un momento...</h3> }
        <ul className={styles.list}>
          {
            events.map((event) => (
              <li key={event._id}>
                <EventCard {...event} />
              </li>
            ))
          }
        </ul>

      </section>
    )
  }
}

export default EventListView
