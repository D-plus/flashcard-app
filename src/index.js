import React from 'react'
import { render } from 'react-dom'
import { configureStore } from './store/configureStore'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { routes } from './routes'
import * as localStorage from './actions/setLocalStorage'



const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

function run() {
  let state = store.getState();
  localStorage.set(state, ['decks', 'card']) // сохраняем текщее состояние в localStorage
  render (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
  )
}

run()
store.subscribe(run)
