import '../css/Body.css';
import MonitorPanel from './panels/MonitorPanel.js';
import EnginePanel from './panels/EnginePanel.js';
import ContainersPanel from './panels/ContainersPanel.js';
import NetworksPanel from './panels/NetworksPanel.js';
import VolumesPanel from './panels/VolumesPanel.js';
import ImagesPanel from './panels/ImagesPanel.js';

export default
function Body(props) {

    const {panelSwitch} = props;

    const [panelName] = panelSwitch;

    const components = {
        'monitor'    : <MonitorPanel />,
        'engine'     : <EnginePanel />,
        'containers' : <ContainersPanel />,
        'networks'   : <NetworksPanel />,
        'volumes'    : <VolumesPanel />,
        'images'     : <ImagesPanel />,
    };

    return (
        <div className="Body">
            {components[panelName]}
        </div>
    )
};