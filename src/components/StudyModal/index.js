import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { onFlip, onSaveEdit } from '../../actions/cardActions'
const MS_IN_DAY = 86400000


export class StudyModal extends Component {

  checkDate() {
    let now = new Date();
    now.setHours(0, 0, 0, 0)
    return +now;
  }

  render() {
    let { card, showBack, onSaveEdit, onFlip } = this.props
    let body = (
      <div className='no-cards'>
        <p>You have no more cards to study this deck right now. Good job!</p>
      </div>
    )
    if (card) {
      body = (
        <div className='study-card'>

          <div className={ showBack ? 'front hide' : 'front' }>
            <div>
              <p>
                { card.front }
              </p>
            </div>
            <button onClick={ () => onFlip(true) } >Flip</button>
          </div>

          <div className={ showBack ? 'back' : 'back hide' }>
            <div>
              <p>
                { card.back }
              </p>
            </div>
            <p>
              <button onClick={() => onSaveEdit(({ id: card.id, score: Math.max((card.score - 1), 1), lastStudyOn: this.checkDate() }))}>Poorly</button>
              <button onClick={() => onSaveEdit({ id: card.id, score: card.score, lastStudyOn: this.checkDate() })}>Okay</button>
              <button onClick={() => onSaveEdit({ id: card.id, score: Math.min((card.score + 1), 3), lastStudyOn: this.checkDate() })}>Great</button>
            </p>
          </div>

        </div>
      )
    }
    return (
      <div className='modal study-modal'>
        {body}
        <Link className='btn close' to={`/deck/${this.props.deckId}`}>x</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ card, showBack }, { params: { deckId } }) => ({
  card: card.filter(c => c.deckId === deckId && (!c.lastStudyOn || (new Date() - c.lastStudyOn)/MS_IN_DAY >= c.score))[0], // разницу в секундах между сегодняшней датой и датой последнего изучения карты переводим в дни, [0] первый элемент(карта) массива при каждом рендере
  showBack,
  deckId
})

export default connect(mapStateToProps, { onFlip, onSaveEdit })(StudyModal)
