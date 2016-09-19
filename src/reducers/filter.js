export const filter = (state, action) => {
  switch(action.type) {
    case 'MAKE_FILTER':{ console.log(action.data);
      return action.data}

    default:
      return state || ''
  }
}
