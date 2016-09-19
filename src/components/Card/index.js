import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Card extends Component {
  render() {
    let { card } = this.props
    return (
      <div className='card'>
        <div>
          <p>{card.front}</p>
          <Link className='btn' to={`/deck/${card.deckId}/edit/${card.id}`}>Edit</Link>
        </div>
      </div>
    )
  }
}
