import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    const maxIdStr = (this.state.maxId ? `/${this.state.maxId}` : '')
    const {count, screenName} = this.props

    this.setState({loading: true})

    fetch(`${process.env.REACT_APP_API_URL}/tweets/${screenName}${maxIdStr}?count=${count}`, {
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
    const removeButton = (
      <IconButton className={stl.removeButton} tooltip="Remove account" onClick={this.props.onRemove}>
        <ActionDelete />
      </IconButton>
    )

    if (tweets) {
      return (
        <article className="LastTweets">
          {removeButton}

          { !tweets.length
            ? <p>Tweets not found.</p>
            : <section>
                <TweetUser user={user} />

                { tweets.map(tweet => (
                  <Tweet key={tweet.id} user={user} tweet={tweet}  />
                )) }

                <footer className={stl.loadMore}>
                  { loading
                    ? <CircularProgress />
                    : null
                  }
                  { maxId && !loading
                    ? <FlatButton onClick={this.loadMore.bind(this)} label="Load more..." />
                    : null
                  }
                </footer>
              </section>
          }
      </article>)
    }

    return <CircularProgress />
  }
}

LastTweets.propTypes = {
  screenName: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  count: PropTypes.number,
}

LastTweets.defaultProps = {
  count: 5,
}

export default LastTweets
