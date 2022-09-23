import '../css/Header.css';
import canReachDocker from '../data/can-reach-docker.js';
import StatusDot from './StatusDot.js';

export default
function Header(props) {

    const {panelSwitch} = props;

    const [panelName, setPanelName] = panelSwitch;

    function selected(name) {
        return (name === panelName) ? 'selected' : '';
    }

    return (
        <div className="Header">
            <div className="layout-box">
                <div>
                    <h1>Docker Engine Monitor</h1>
                    <StatusDot check={canReachDocker} ms={1000} />
                </div>
                <ul className="tab-bar">
                    <li className={selected('monitor')}     onClick={() => setPanelName('monitor')} >Monitor</li>
                    <li className={selected('engine')}      onClick={() => setPanelName('engine')} >Engine</li>
                    <li className={selected('containers')}  onClick={() => setPanelName('containers')} >Containers</li>
                    <li className={selected('networks')}    onClick={() => setPanelName('networks')} >Networks</li>
                    <li className={selected('volumes')}     onClick={() => setPanelName('volumes')} >Volumes</li>
                    <li className={selected('images')}      onClick={() => setPanelName('images')} >Images</li>
                </ul>
            </div>
        </div>
    )
};