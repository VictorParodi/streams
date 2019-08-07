import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from './../actions/index.js';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '674105126031-sbcjb0d2hm06dh7sbc1ksh8uam7ti11h.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon"></i>
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        console.log('PROPS --->', this.props);
        return <div>{this.renderAuthButton()}</div>
    }
};

const mapStateToProps = (state) => {
    console.log('STATE -->', state);
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps, {
    signIn: signIn,
    signOut: signOut
})(GoogleAuth);