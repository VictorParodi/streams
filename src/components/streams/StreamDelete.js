import React from 'react';
import Modal from './../Modal.js';
import history from './../../history.js';

const StreamDelete = () => {
    const actions = (
        <React.Fragment>
            <button className="ui negative button">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );

    return (
        <div>
            StreamDelete
            <Modal
                title="Delete Streams"
                content="Are you sure you want delete the stream?"
                actions={actions}
                onDismiss={() => history.push('/')}
            />
        </div>
    );
};

export default StreamDelete;