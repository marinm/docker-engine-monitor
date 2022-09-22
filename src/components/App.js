import '../css/App.css';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';
import {useState} from 'react';

function App() {

    const [panelName, setPanelName] = useState('engine');

    return (
        <div className="App">
            <Header panelSwitch={[panelName, setPanelName]} />
            <Body panelSwitch={[panelName, setPanelName]} />
            <Footer panelSwitch={[panelName, setPanelName]} />
        </div>
    );
}

export default App;
