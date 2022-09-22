import '../css/Footer.css';
import canReachDocker from '../data/can-reach-docker.js';
import StatusDot from './StatusDot.js';

export default
function Footer(props) {
    
    return (
        <div className="Footer">
            <div className="layout-box">
                <StatusDot check={canReachDocker} ms={1000} />
            </div>
        </div>
    )
}