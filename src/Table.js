import React from 'react';

const MAX_STRING_LEN = 20;

function chopWithEllipses(string, max) {
    return (string.length <= max) ? string : string.slice(0, max) + '...';
}

function presentable(string) {
    return chopWithEllipses(string, MAX_STRING_LEN);
}

class Row extends React.Component {
    render() {
        const entry = this.props.entry;
        return (
            <tr>
                <td>{presentable(String(entry[0]))}</td>
                <td>{presentable(String(entry[1]))}</td>
            </tr>
        );
    }
}

class TBody extends React.Component {
    rows() {
        return this.props.rows?.map(entry => <Row key={entry[0]} entry={entry} />);
    }
    render() {
        return (
            <tbody>{ this.rows() }</tbody>
        );
    }
}

export default
class Table extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th className="table-title" colSpan="2">{this.props.title}</th>
                    </tr>
                </thead>
                
                <TBody rows={this.props.rows} />
            </table>
        );
    }
}