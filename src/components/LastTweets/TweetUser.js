import React, { Component } from 'react'
import stl from './index.css'

function TweetUser(props) {
  let {profile_image_url, screen_name, name, description} = props.user

  return (
    <header>
      <img src={profile_image_url} alt={name} title={name} />
      <h2><a href={`https://twitter.com/${screen_name}`} target="_blank" title={name}>{name}</a></h2>
      <p>{description}</p>
    </header>
  )
}

export default TweetUser
/*  Local:            http://localhost:3000/
  On Your Network:  http://192.168.88.252:3000/*/
