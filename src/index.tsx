import 'bulmaswatch/superhero/bulmaswatch.min.css';
import React, { useState } from 'react';
import {Provider} from "react-redux";
import { store } from "./state";
import TextEditor from "./components/text-editor";

const App = () => {

    return (
        <Provider store={store}>
            <>
                <TextEditor />
                {/*<CodeCell />*/}
            </>
        </Provider>
    );
};

export default App;