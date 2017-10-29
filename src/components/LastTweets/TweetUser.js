import React from 'react'

import {CardHeader} from 'material-ui/Card'

import stl from './index.css'

function TweetUser(props) {
  const {profile_image_url, screen_name, name, description} = props.user

  return (
    <CardHeader
      title={<a href={`https://twitter.com/${screen_name}`} target="_blank" title={name}>{name}</a>}
      subtitle={description}
      avatar={profile_image_url}
    />
  )
}

export default TweetUser
