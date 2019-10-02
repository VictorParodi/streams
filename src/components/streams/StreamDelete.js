import React from 'react';
import Modal from './../Modal.js';
import history from './../../history.js';
import {connect} from 'react-redux';
import {fetchStream, deleteStream} from './../../actions';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => {
        const streamId = this.props.match.params.id;
        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteStream(streamId)}
                    className="ui negative button">
                        Delete
                </button>

                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent = () => {
        let stream = this.props.stream;
        return stream ? `Are you sure delete this stream? ---> ${stream.title}` : 'Are you sure?';
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {
    fetchStream,
    deleteStream
})(StreamDelete);