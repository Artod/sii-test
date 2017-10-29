import React, { Component } from 'react'
import Tweet from './Tweet'
import TweetUser from './TweetUser'

import stl from './index.css'

class LastTweets extends Component {
  constructor(props) {
    super()

    this.state = {
      tweets: null,
      maxId: null,
    }
  }

  componentDidMount() {
    this.getTweets()
  }

  getTweets() {
    let maxIdStr = (this.state.maxId ? `/${this.state.maxId}` : '')

    this.setState({loading: true})

    fetch(`http://localhost:3001/tweets/${this.props.screenName}${maxIdStr}`, {
    	method: 'get'
    }).then(res => res.json()).then(data => {

      this.setState((prevState, props) => {
        let prevTweets = prevState.tweets || []
        return {tweets: [...prevTweets, ...data]}
      })

      if (data && data.length) {
        this.setState({maxId: data[data.length-1].id})
      }

      this.setState({loading: false})

    }).catch(err => {
      this.setState({loading: false})
    	// grief :(
    })
  }

  loadMore() {
    this.getTweets()
  }

  render() {
    let {tweets, maxId, loading} = this.state
    let user = (this.state.tweets && this.state.tweets.length && this.state.tweets[0].user) || []

    if (tweets) {
      if (tweets.length) {
        return (
          <section className="LastTweets">
            <TweetUser user={user} />

            {tweets.map(tweet => (
              <Tweet key={tweet.id} user={user} tweet={tweet}  />
            ))}

            {maxId ? (
              loading ? <div>Loading...</div> : <button onClick={this.loadMore.bind(this)}>Load more</button>
            ) : ''}

          </section>
        )
      } else {
        return <div>Tweets no found</div>
      }
    }

    return <div>Loading...</div>
  }
}

export default LastTweets
