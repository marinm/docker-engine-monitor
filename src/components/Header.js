import '../css/Header.css';

export default
function Header(props) {

    const {panelSwitch} = props;

    const [, setPanelName] = panelSwitch;

    return (
        <div className="Header">
            <div className="layout-box">
                <h1>Docker Engine Monitor</h1>
                <ul className="tab-bar">
                    <li onClick={() => setPanelName('engine')} >Engine</li>
                    <li onClick={() => setPanelName('containers')} >Containers</li>
                    <li onClick={() => setPanelName('networks')} >Networks</li>
                    <li onClick={() => setPanelName('volumes')} >Volumes</li>
                    <li onClick={() => setPanelName('images')} >Images</li>
                </ul>
            </div>
        </div>
    )
};