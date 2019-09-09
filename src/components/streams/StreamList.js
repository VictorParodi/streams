import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from './../../actions/index.js';
import {Link} from 'react-router-dom';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <button className="ui primary button">
                        Edit
                    </button>

                    <button className="ui negative button">
                        Delete
                    </button>
                </div>
            );
        }
    }

    renderList = () => {
        return this.props.streams.map((stream) => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                    {this.renderAdmin(stream)}
                </div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <Link to="/streams/new" className="ui primary button">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="ui celled list">
                {this.renderList()}
                {this.renderCreate()}
            </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);