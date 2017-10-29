import React, { Component } from 'react'
import stl from './index.css'

function Tweet(props) {
  let {full_text, created_at, id_str} = props.tweet


  return (
    <section className="Tweet">
      <p className={stl.text}>{full_text}</p>
      <i className={stl.created_at}><a href={`https://twitter.com/statuses/${id_str}`} target="_blank">{created_at}</a></i>
    </section>
  )
}

export default Tweet
