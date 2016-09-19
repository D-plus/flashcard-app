import { combineReducers } from 'redux'
import { card } from './card'
import { decks } from './decks'
import { addingDeck } from './addingDeck'
import { routerReducer as routing } from 'react-router-redux'
import { filter } from './filter'
import { showBack } from './showBack'

export const rootReducer = combineReducers({
  routing,
  filter,
  card,
  decks,
  showBack,
  addingDeck
})
