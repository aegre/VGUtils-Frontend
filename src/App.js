// Libraries
import React, { Component } from 'react'

// Components
import Layout from 'components/Layout'
import EventList from 'views/EventList'

class App extends Component {
  render () {
    return (
      <Layout>
        <EventList />
      </Layout>
    )
  }
}

export default App
