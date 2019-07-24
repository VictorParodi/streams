import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamList from './streams/StreamList.js';
import StreamCreate from './streams/StreamCreate.js';
import StreamEdit from './streams/StreamEdit.js';
import StreamShow from './streams/StreamShow.js';
import StreamDelete from './streams/StreamDelete.js';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" component={StreamCreate}/>
                    <Route path="/streams/edit" component={StreamEdit}/>
                    <Route path="/streams/show" component={StreamShow}/>
                    <Route path="/streams/delete" component={StreamDelete}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;