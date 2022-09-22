import '../css/Header.css';

export default
function Header() {
    return (
        <div className="Header">
            <div className="layout-box">
                <h1>Docker Engine Monitor</h1>

                <ul className="tab-bar">
                    <li>Engine</li>
                    <li>Containers</li>
                    <li>Images</li>
                </ul>
            </div>
        </div>
    )
}