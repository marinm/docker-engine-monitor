import React from 'react';
import Docker from './Docker.js';
import Table from './Table.js';
import './App.css';

const HOST = 'localhost';
const PORT = 9996;
const API_VERSION = '1.41';

const monitorConfig = {
    host       : HOST,
    port       : PORT,
    apiVersion : API_VERSION,
};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                '_monitor' : monitorConfig,
            }
        };
    }

    getData(path) {
        // Do nothing if something is already there
        if (this.state.data[path]) return;

        const component = this;
        const docker = Docker(HOST, PORT, API_VERSION);

        docker(path,
            function(response) {              
                component.setState(
                    function(state, props) {
                        const newData = state.data || {};
                        newData[path] = response;
                        return newData;
                    }
                );
            }
        );
    }

    componentDidMount() {
        this.getData('/_ping');
        this.getData('/version');
        this.getData('/info');
        this.getData('/containers/json');
        this.getData('/images/json');
        this.getData('/networks');
        this.getData('/volumes');
        this.getData('/swarm');
        this.getData('/nodes');
        this.getData('/services');
        this.getData('/tasks');
        this.getData('/secrets');
        this.getData('/configs');
        this.getData('/plugins');
        this.getData('/events');
    }

    toRows(path) {
        const data = this.state.data[path];
        // Convert from dict to array of [key,value] tuples
        return data ? Object.keys(data).map(key => [key, data[key]]) : [];
    }

    

    PathTable(path) {
        return (
            <Table title={path} rows={this.toRows(path)} />
        );
    }

    render() {
        return (
            <div className="App">
                <h1>Docker Engine info</h1>
                { this.PathTable('_monitor') }
                { this.PathTable('/_ping') }
                { this.PathTable('/version') }
                { this.PathTable('/info') }
                { this.PathTable('/containers/json') }
                { this.PathTable('/images/json') }
                { this.PathTable('/networks') }
                { this.PathTable('/swarm') }
                { this.PathTable('/services') }
                { this.PathTable('/tasks') }
                { this.PathTable('/secrets') }
                { this.PathTable('/configs') }
                { this.PathTable('/plugins') }
                { this.PathTable('/events') }
            </div>
        );
    }
}

export default App;
