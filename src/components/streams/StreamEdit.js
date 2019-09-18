import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from './../../actions/index.js';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        console.log('MY_PROPS --->', this.props);
        return <h1>StreamEdit Component yeah!</h1>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchStream})(StreamEdit);