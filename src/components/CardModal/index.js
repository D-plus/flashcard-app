import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Link } from 'react-router'

export default class CardModal extends Component {
  componentDidUpdate() {
    ReactDOM.findDOMNode(this.refs.front).focus()
  }
  onSave() {
    let front = ReactDOM.findDOMNode(this.refs.front)
    let back = ReactDOM.findDOMNode(this.refs.back)
    this.props.onSave(Object.assign({}, this.props.card, { // this.props.card лежит объект со свойством deckId передаём deckId новой карточке
      front: front.value,
      back: back.value
    }))
    browserHistory.push(`/deck/${this.props.card.deckId}`)
  }
  onEdit() {
    let front = ReactDOM.findDOMNode(this.refs.front)
    let back = ReactDOM.findDOMNode(this.refs.back)
    this.props.onSaveEdit(Object.assign({}, this.props.card, { // this.props.card лежит объект со свойством deckId передаём deckId новой карточке
      front: front.value,
      back: back.value
    }))
    browserHistory.push(`/deck/${this.props.card.deckId}`)
  }
  onDlt() {
    this.props.onDelete(this.props.card.id);
    browserHistory.push(`/deck/${this.props.card.deckId}`)
  }
  render() {

    let { card, onDelete } = this.props
    console.log(card);
    return (
      <div className='modal'>
        <h1>{ onDelete? 'Edit' : 'New' } Card</h1>
        <label>Card Front:</label>
        <textarea ref='front' defaultValue={card.front}></textarea>
        <label>Card Back:</label>
        <textarea ref='back' defaultValue={card.back}></textarea>
        <p>
          {onDelete? <button onClick={::this.onEdit}>Save Card</button> : <button onClick={::this.onSave}>Save Card</button> }
          <Link to={`/deck/${card.deckId}`} className='btn'>Cancel</Link>
          { onDelete? <button className='delete' onClick={::this.onDlt}>Delete Card</button> : null }
        </p>
      </div>
    )
  }
}
