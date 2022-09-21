import React from 'react';
import Table from './Table.js';
import './App.css';

const TICK_INTERVAL = 1000;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : {},
            timerID : null
        }
    }

    tick() {
        const docker = this.props.docker;



        // engine.read('ping');
        // engine.read('version');
        // engine.read('info');
        // engine.read('containers');
        // engine.read('images');
        // engine.read('networks');
        // engine.read('volumes');
        // engine.read('swarm');
        // engine.read('nodes');
        // engine.read('services');
        // engine.read('tasks');
        // engine.read('secrets');
        // engine.read('configs');
        // engine.read('plugins');
        // engine.read('events');
    }

    copy(key, value) {
        this.setState((state, props) => {
            const newData = state.data;
            newData[key] = value;
            return {...state, data: newData};
        });
    }

    componentDidMount() {
        this.props.docker.subscribe((key, value) => this.copy(key, value));
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
                { this.PathTable('monitor') }
                { this.PathTable('ping') }
                { this.PathTable('version') }
                { this.PathTable('info') }
                { this.PathTable('containers') }
                { this.PathTable('images') }
                { this.PathTable('networks') }
                { this.PathTable('swarm') }
                { this.PathTable('services') }
                { this.PathTable('tasks') }
                { this.PathTable('secrets') }
                { this.PathTable('configs') }
                { this.PathTable('plugins') }
                { 
                    // '/events' uses HTTP streaming
                    this.PathTable('events')
                }
            </div>
        );
    }
}

export default App;
