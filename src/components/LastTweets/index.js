import React, { Component } from 'react'
import './index.css'

class LastTweets extends Component {
  render() {
  /*  fetch('https://davidwalsh.name/some/url', {
    	method: 'get'
    }).then(function(response) {

    }).catch(function(err) {
    	// Error :(
    });*/

    return (
      <section className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test Sii</h1>
        </header>
        <section>
          <LastTweets screenName="SIIcanada" count="5" />
        </section>
      </section>
    );
  }
}

export default App
/*  Local:            http://localhost:3000/
  On Your Network:  http://192.168.88.252:3000/*/
