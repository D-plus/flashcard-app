import React from 'react'
import App from './containers/App'
import { Route } from 'react-router'
import VisibleCards from './components/VisibleCards'
import NewCardModal from './components/NewCardModal'
import EditCardModal from './components/EditCardModal'
import StudyModal from './components/StudyModal'

export const routes = (
  <Route path='/' component={App} >
    <Route path='/deck/:deckId' component={VisibleCards} >
      <Route path='/deck/:deckId/new' component={NewCardModal} />
      <Route path='/deck/:deckId/edit/:cardId' component={EditCardModal} />
      <Route path='/deck/:deckId/study' component={StudyModal} />
    </Route>
  </Route>
)
