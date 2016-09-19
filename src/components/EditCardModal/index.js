import { connect } from 'react-redux'
import { onDelete } from '../../actions/deleteCardAction'
import { onSaveEdit } from '../../actions/cardActions'
import CardModal from '../CardModal'

const mapStateToProps = (state, { params: { cardId } }) => ({
   card: state.card.filter(card => card.id === +cardId)[0] // [0] так как вернется нужный объект Карты в массиве, передаем в компоненты сам объект, т.к. логика в компоненте под объект
})

export default connect(mapStateToProps, { onDelete, onSaveEdit })(CardModal)
