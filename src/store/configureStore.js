import { compose, applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import { rootReducer } from '../reducers'
import thunk from 'redux-thunk'
import * as localStorage from '../actions/setLocalStorage'

export const configureStore = (() => {
  const store = createStore(rootReducer,
      localStorage.get(), // используем состояние localStorage при перезагрузке страницы, чтоб передать данные которые были до перезагрузки - в новое начальное состояние
      compose(
      applyMiddleware(createLogger()),
      applyMiddleware(thunk),
    )
  )

  // Enable Webpack hot module replacement for reducers

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').rootReducer
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
})
