import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as addDeckActions from '../../actions/addDeckActions'
import { connect } from 'react-redux'
import { Link } from 'react-router'


export class Sidebar extends Component {
  componentDidUpdate() {
    let elem = ReactDOM.findDOMNode(this.refs.add);
    if (elem) elem.focus(); // после добавления input или если input он отображен - делаем фокус на него после любой перерисовки
  }
  onKeyPress(e) {
    if (e.which !== 13) return;
      let name = ReactDOM.findDOMNode(this.refs.add).value
      this.props.addDeck(name);
      this.props.hideAddDeck();
  }
  render() {
    return (
      <div className='sidebar'>
        <h2>All Decks</h2>
        {
          this.props.decks.map((deck, i) => {
            return (
              <ul>
                <li key={i}><Link to={`/deck/${deck.id}`}>{deck.name}</Link></li>
              </ul>
            )
          })
        }
        { this.props.addingDeck && <input ref='add' onKeyPress = { ::this.onKeyPress }/> }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  decks: state.decks,
  addingDeck: state.addingDeck,
  stt: state
});

export default connect(mapStateToProps, addDeckActions)(Sidebar)
