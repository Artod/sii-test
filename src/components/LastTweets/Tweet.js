import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'
import twitterText from 'twitter-text'

import {Card, CardTitle, CardText} from 'material-ui/Card'

import stl from './index.css'

function Tweet(props) {
  const {full_text, created_at, id_str} = props.tweet

  return (

    <Card className={stl.card}>
      <CardTitle  subtitle={
        <a className={stl.createdAt} href={`https://twitter.com/statuses/${id_str}`} target="_blank" title={created_at}>{ moment(created_at).fromNow() }</a>
      } />
      <CardText dangerouslySetInnerHTML={ {__html:twitterText.autoLink( full_text )} }></CardText>
    </Card>
/*
    <section>

      <i className={stl.created_at}>
        <a href={`https://twitter.com/statuses/${id_str}`} target="_blank" title={created_at}>{ moment(created_at).fromNow() }</a>
      </i>
    </section>*/
  )
}

Tweet.propTypes = {
  tweet: PropTypes.any.isRequired,
}

export default Tweet
