import { connect } from 'react-redux'
import * as cardActions from '../../actions/cardActions'
import CardModal from '../CardModal'

const mapStateToProps = (state, { params: { deckId } }) => ({
  stt: state,
  card: {deckId}
})

export default connect(mapStateToProps, cardActions)(CardModal)
