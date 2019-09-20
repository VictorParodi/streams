import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from './../../actions/index.js';
import StreamForm from './StreamForm.js';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        console.log('FORM VALUES --->', formValues);
    }

    render() {
        return this.props.stream
        ? <StreamForm
            initialValues={this.props.stream}
            onSubmit={this.onSubmit}
          />
        : <div>Loading...</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);