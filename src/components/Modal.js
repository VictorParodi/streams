import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <div className="ui dimmer modals visible active">
                <div className="ui standard modal visible active">
                    Modal content
                </div>
            </div>,
            document.querySelector('#modal')
        );
    }
}

export default Modal;