
export const addDeck = (name) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_DECK',
      data: name
    })
  }
}

// export const showAddDeck = () => {
//   return (dispatch) => {
//     dispatch({
//       type: 'SHOW_ADD_DECK'
//     })
//   }
// }

export const showAddDeck = () => {
  return {
    type: 'SHOW_ADD_DECK'
  }
}

export const hideAddDeck = () => {
  return (dispatch) => {
    dispatch({
      type: 'HIDE_ADD_DECK'
    })
  }
}
