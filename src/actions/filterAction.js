export const getFilter = (filterString) => {
  return (dispatch) => {
    dispatch({
      type: 'MAKE_FILTER',
      data: filterString
    })
  }
}
