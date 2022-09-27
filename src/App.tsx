import * as React from 'react';
import './css/App.css';
import Header from './components/views/Header';
import Body from './components/views/Body';
import {useState} from 'react';

function App() {

    const [panelName, setPanelName] :[string, any] = useState('engine');

    return (
        <div className="App">
            <Header panelSwitch={[panelName, setPanelName]} />
            <Body panelSwitch={[panelName, setPanelName]} />
        </div>
    );
}

export default App;
