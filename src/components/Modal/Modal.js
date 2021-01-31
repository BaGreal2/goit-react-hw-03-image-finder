import PropTypes from 'prop-types'


function Modal({children, onClose}){
    return(
        <div className="Overlay" onClick={onClose}>
            <div className="Modal">
                {children}
            </div>
        </div>
    )
}

Modal.propTypes={
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Modal;