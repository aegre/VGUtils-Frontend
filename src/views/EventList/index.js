// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'

// Componentsç
import API from 'API'
import EventCard from 'components/EventCard'
import styles from './eventlist.module.scss'
import SearchInput from 'components/SearchInput'
import Button from 'components/Button'

class EventListView extends Component {
  state = {
    events: [],
    isLoading: false,
    search: ''
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

  handleSearch = (search) => {
    this.setState({ search })
  }

  render () {
    const { isLoading, events, search } = this.state
    return (
      <section className={styles.eventlist}>
        <h1 className='text-center'>Eventos</h1>
        <SearchInput onChange={this.handleSearch} id='event-list-search' />
        <div className={classNames(styles.new_event, 'margin-bottom-small')}>
          <Button>Nuevo evento</Button>
        </div>
        { isLoading && <h3>Espera un momento...</h3> }
        <ul className={styles.list}>
          {

            events.filter(event => (
              search
                ? event.title.toLowerCase().includes(search.toLowerCase()) && event
                : event
            )

            ).map((event) => (
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
