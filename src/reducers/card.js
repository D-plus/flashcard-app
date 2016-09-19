import { ADD_CARD } from '../constants'

export const card = (state, action) => {
  switch(action.type) {

    case ADD_CARD: {
      let newCard = Object.assign({}, action.data, { id: +new Date(), score: 1 });
      return state.concat([newCard])
    }

    case 'UPDATE_CARD': {
      let updateCard = action.data
      return state.map(card => {
        if (card.id !== updateCard.id) return card
        return {...card, ...updateCard}
      })
    }

    case 'DELETE_CARD': {

      return state.filter(card => {
      return card.id !== action.data
      })
    }

    default:
      return state || []
  }
}
