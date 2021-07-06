import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './context/context';
import {SpeechProvider} from '@speechly/react-client';
import App from './App';
import './index.css';

ReactDOM.render(
        <SpeechProvider appId="5cc3a135-1c87-4c5c-a6b7-8c8d76b21cb8" language="en-US">
            <Provider>
                <App/>
            </Provider>
        </SpeechProvider>,
        document.getElementById("root"));
