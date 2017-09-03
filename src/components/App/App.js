import React, { Component } from 'react'
import Layout from '../Layout'
import Header from '../Header'
import Footer from '../Footer'
import Todos from '../Todos'

class App extends Component {
  render () {
    let {
      db
    } = this.props;
    return (
      <Layout>
        <Header />
        <Todos db={db} />
        {/*<Footer />*/}
      </Layout>
    )
  }
}

export default App
