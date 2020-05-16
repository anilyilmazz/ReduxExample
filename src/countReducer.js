import { DECREASE, INCREASE, RESET } from "./actions"

export  const defaultState = {
    count: 0,
    name: "Counter"
  }

export default function countReducer(state = defaultState, action) {
    switch (action.type) {
        case DECREASE:
            return { ...state, count: state.count - action.payload }
        case INCREASE:
            return { ...state, count: state.count + action.payload }
        case RESET:
            return { ...state, count: 0 }
        default:
            return state
    }
}