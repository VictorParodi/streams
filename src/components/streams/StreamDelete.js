import React from 'react';
import Modal from './../Modal.js';
import history from './../../history.js';
import {connect} from 'react-redux';
import {fetchStream} from './../../actions';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => {
        return (
            <React.Fragment>
                <button className="ui negative button">Delete</button>
                <button className="ui button">Cancel</button>
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

export default connect(mapStateToProps, {fetchStream})(StreamDelete);