// export const onSave = (card) => {
//   return (dispatch) => {
//     dispatch({
//       type: 'ADD_CARD',
//       data: card
//     })
//   }
// }
export const onSave = (card) => ({
  type: 'ADD_CARD',
  data: card
})

export const onSaveEdit = (card) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_CARD',
      data: card
    })
  }
}

export const onFlip = (flag) => {
  return (dispatch) => {
    dispatch({
      type: 'SHOW_BACK',
      data: flag
    })
  }
}
