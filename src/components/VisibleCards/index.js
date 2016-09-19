import React, { Component } from 'react'
import Card from '../Card'
import { connect } from 'react-redux'
import fuzzysearch from 'fuzzysearch'

export class VisibleCards extends Component {
  render() {
    let { cards } = this.props
    return (
      <div className='main'>
        {
          cards.map(card =>
            <Card card={card} key={card.id} />
          )
        }
        {this.props.children}
      </div>)
  }
}

const matches = (filter, card) =>
  fuzzysearch(filter, card.front) || fuzzysearch(filter, card.back) // Сравнивает строку из filter(состояния) со строкой в card.front если false , то с card.back, если функция вернет true, то совпадение есть в одном из условий, следовательно текущая карточка подходит под искомую в search

const mapStateToProps = ({ card, filter }, { params: { deckId } }) => ({ // первый параметр state (card, filter состояния из соответствующих Редюсеров), второй routes
  cards: card.filter(c => c.deckId === deckId && matches(filter, c)) // передаем в контейнер VisibleCards Только карточки которые равны текущему deckId
})

export default connect(mapStateToProps)(VisibleCards)
