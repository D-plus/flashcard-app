import React, { Component } from 'react'
import { Link } from 'react-router'

export class Toolbar extends Component {
  render() {
    let deckId = this.props.deckId;
    let deckTools = deckId? (
      <div>
        <Link className='btn' to={`/deck/${deckId}/new`}>✚ New Card</Link>
        <Link className='btn' to={`/deck/${deckId}/study`}>Study Deck</Link>
        <input className='search' type='search' placeholder='...Search' onChange={(e) => this.props.getFilter(e.target.value)}/>
      </div>
    ) : null;
    return (
      <div className='toolbar'>
        <div>
          <button onClick={this.props.showAddDeck}>✚ New Deck</button>
        </div>
        {deckTools}
      </div>
    )
  }
}
