import { MODAL_OPEN, MODAL_CLOSE } from './actions'

const defaultState = {
    isOpen: false,
    name: 'modal Name',
    text: 'modal Text'
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case MODAL_OPEN:
            return { ...state, isOpen: true }
        case MODAL_CLOSE:
            return { ...state, isOpen: false }
        default:
            return state
    }
}