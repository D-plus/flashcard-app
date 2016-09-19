import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import { connect } from 'react-redux'
import { Toolbar } from '../../components/Toolbar'
import { showAddDeck } from '../../actions/addDeckActions'
import { getFilter } from '../../actions/filterAction'


export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Toolbar deckId={this.props.deckId} showAddDeck={this.props.showAddDeck} getFilter={this.props.getFilter}/>
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (props, { params: { deckId }}) => ({
  deckId
})

export default connect(mapStateToProps, { showAddDeck, getFilter })(App)
