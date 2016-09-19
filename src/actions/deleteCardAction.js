export const onDelete = (cardId) => {
  return (dispatch) => {
    dispatch({
      type: 'DELETE_CARD',
      data: cardId
    })
  }
}
