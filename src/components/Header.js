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
                <ul className="tab-bar">
                    {
                        [
                            ['monitor'    , 'Monitor'],
                            ['engine'     , 'Engine'],
                            ['containers' , 'Containers'],
                            ['networks'   , 'Networks'],
                            ['volumes'    , 'Volumes'],
                            ['images'     , 'Images']
                        ].map(
                            ([name, label]) =>
                                <li
                                    key={name}
                                    className={selected(name)}
                                    onClick={() => setPanelName(name)}
                                >{label}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
};