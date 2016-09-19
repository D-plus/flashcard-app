export const set = (state, props) => { // props - ['decks', 'card']
  let toSave = {};
  props.forEach(p => toSave[p] = state[p]);
  localStorage.setItem('state', JSON.stringify(toSave))
}
export const get = () => JSON.parse(localStorage.getItem('state')) || undefined;
