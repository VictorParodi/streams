import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const pageOne = () => {
    return (
        <div>
            <h1>Page One</h1>
            <Link to="/pagetwo">To page two</Link>
        </div>
    );
};

const pageTwo = () => {
    return (
        <div>
            <h1>Page Two</h1>
            <Link to="/">To page one</Link>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={pageOne} />
                    <Route path="/pagetwo" component={pageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;