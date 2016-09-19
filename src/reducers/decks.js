
export const decks = (state, action) => {
  switch(action.type) {

    case 'ADD_DECK': {
      let newDeck = { name: action.data, id: +new Date() }
      return state.concat([newDeck])
    }
    default: return state || []
  }
}
