import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list';

const snippet= String.raw`
        import React from 'react';
        import ReactDOM from 'react-dom';

        const App = () => <h1>Hi there</h1>;

        ReactDOM.render(
            <App />,
            document.querySelector('#root')
        )
`;
const TopMatter = () => {
    return (
        <>
            <div className="container">
                <h1 className="title">Welcome to JBook</h1>
                <p className="block">This is a sandbox example app that demonstrates in-browser bundling and code-execution.</p>
                <p className="block">
                    There are two types of cells that can be added. A <strong>Code Cell</strong> can execute any arbitrary
                    JavaScript code (use at your own risk!), including import statements which will import directly from unpkg.
                    The other kind of cell is a <strong>Text Cell</strong> which will render Markdown notes.
                </p>
                <p>Try for yourself. Try entering the following code into a code cell:</p>
                <pre>{snippet}</pre>
            </div>
        </>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <>
                <TopMatter />
                <CellList />
            </>
        </Provider>
    );
};

export default App;
