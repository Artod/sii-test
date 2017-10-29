import React, { Component } from 'react'

import FlatButton from 'material-ui/FlatButton'
import CircularProgress from 'material-ui/CircularProgress'
import IconButton from 'material-ui/IconButton'

import ActionDelete from 'material-ui/svg-icons/action/delete';

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

    fetch(`${process.env.REACT_APP_API_URL}/tweets/${this.props.screenName}${maxIdStr}`, {
    	method: 'get'
    }).then(res => res.json()).then(data => {

      this.setState((prevState, props) => {
        let prevTweets = prevState.tweets || []

        if (prevTweets[prevTweets.length - 1] && data[0] && prevTweets[prevTweets.length - 1].id === data[0].id) {
          data.splice(0, 1)
        }

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
    const {tweets, maxId, loading} = this.state
    const user = (this.state.tweets && this.state.tweets.length && this.state.tweets[0].user) || []

    if (tweets) {
      if (tweets.length) {
        return (
          <article className="LastTweets">

            <IconButton className={stl.removeButton} tooltip="Remove account" onClick={this.props.onRemove}>
              <ActionDelete />
            </IconButton>

            <TweetUser user={user} />

            { tweets.map(tweet => (
              <Tweet key={tweet.id} user={user} tweet={tweet}  />
            )) }

            <footer>
              { loading
                ? <CircularProgress />
                : null
              }
              { maxId && !loading
                ? <FlatButton onClick={this.loadMore.bind(this)} label="Load more..." />
                : null
              }
            </footer>

          </article>
        )
      } else {
        return <div>Tweets no found.</div>
      }
    }

    return <CircularProgress />
  }
}

export default LastTweets
