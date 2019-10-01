import React from 'react';
import ReactDOM from 'react-dom';
import history from './../history.js';

class Modal extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <div
                onClick={() => history.push('/')}
                className="ui dimmer modals visible active"
            >
                <div
                    onClick={(event) => event.stopPropagation()}
                    className="ui standard modal visible active"
                >
                    <div className="header">Delete Stream</div>
                    <div className="content">
                        Are you sure you want delete the stream?
                    </div>
                    <div className="actions">
                        <button className="ui primary button">Delete</button>
                        <button className="ui button">Cancel</button>
                    </div>
                </div>
            </div>,
            document.querySelector('#modal')
        );
    }
}

export default Modal;