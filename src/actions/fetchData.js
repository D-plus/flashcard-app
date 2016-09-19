export const fetchData = () => {
  return (dispatch) => {
    fetch('/api/data')
    .then(res => res.json())
    .then(json => dispatch({
      type: 'RECEIVE_DATA',
      data: json
    }))
  }
}
