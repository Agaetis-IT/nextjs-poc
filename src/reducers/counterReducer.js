import { COUNTER_INCREMENT } from '../actions/counterActions'

const INITIAL_STATE = {
  value: 0,
}

export default (state = INITIAL_STATE, { type, ...props }) => {
  switch (type) {
    case COUNTER_INCREMENT:
      return { ...state, value: state.value + 1 }
    default:
      return state
  }
}
