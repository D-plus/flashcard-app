
export const addingDeck = (state, action) => {
  switch(action.type) {

    case 'SHOW_ADD_DECK':
      return true;
      
    case 'HIDE_ADD_DECK':
      return false;

    default:
      return !!state
  }
}
