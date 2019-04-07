// Libraries
import React, { Component } from 'react'

// Componentsç
import API from 'API'

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
      <section>
        <h1 className='text-center'>Lista de eventos</h1>
        { isLoading && <h3>Espera un momento...</h3> }
        <ul>
          {
            events.map(({
              _id,
              title,
              eventDate
            }) => (
              <li key={_id}>
                {
                  `${title} - ${eventDate}`
                }
              </li>
            ))
          }
        </ul>

      </section>
    )
  }
}

export default EventListView
