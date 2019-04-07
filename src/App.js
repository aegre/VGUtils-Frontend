// Libraries
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Layout from 'components/Layout'
import EventList from 'views/EventList'

import './css/index.scss'
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Layout>
          <EventList />
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
