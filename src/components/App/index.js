import React, { Component } from 'react'
import LastTweets from '../LastTweets'

import logo from './logo.svg'
import stl from './index.css'

class App extends Component {
  render() {

    return (
      <section className="App">
        <header className={stl.header}>
          <img src={logo} className={stl.logo} alt="logo" />
          <h1 className={stl.title}>Test Sii</h1>
        </header>
        <section className={stl.flexContainer}>
          <LastTweets screenName="SIIcanada" count="5" />
          <LastTweets screenName="CanadiensMTL" count="5" />
          <LastTweets screenName="jechanceux" count="5" />
        </section>
      </section>
    );
  }
}

export default App
/*  Local:            http://localhost:3000/
  On Your Network:  http://192.168.88.252:3000/*/
