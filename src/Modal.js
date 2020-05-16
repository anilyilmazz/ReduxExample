import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { MODAL_CLOSE, MODAL_OPEN } from "./actions"



const Modal = ({ isOpen, name, text, open, close }) => {
    return (
        <div className={`modal-overlay ${isOpen ? `isModalOpen` : null}`}>
            <div className="modal-container">
                <h4>{name}</h4>
                <p>{text}</p>
                <button className="btn btn-primary" onClick={close}>close</button>
            </div>
        </div>
    )
}
Modal.propTypes = {
    isOpen:PropTypes.bool.isRequired,
    name : PropTypes.string,
    text:PropTypes.string,
    close : PropTypes.func
}
const mapStateToProps = ({ modalState: { isOpen, name, text } }) => {
    return { isOpen, name, text }
}

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => dispatch({ type: MODAL_CLOSE }),
        open: () => dispatch({ type: MODAL_OPEN })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
