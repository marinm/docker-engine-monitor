import '../css/Header.css';

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
                <h1>Docker Engine Monitor</h1>
                <ul className="tab-bar">
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