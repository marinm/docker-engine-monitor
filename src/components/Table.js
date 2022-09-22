import React from 'react';

const MAX_STRING_LEN = 20;

function chopWithEllipses(string, max) {
    return (string.length <= max) ? string : string.slice(0, max) + '...';
}

function presentable(string) {
    return chopWithEllipses(string, MAX_STRING_LEN);
}

function Row(props) {
    const entry = props.entry;
    return (
        <tr>
            <td>{presentable(String(entry[0]))}</td>
            <td>{presentable(String(entry[1]))}</td>
        </tr>
    );
}

function TBody(props) {
    function rows() {
        return props.rows?.map(entry => <Row key={entry[0]} entry={entry} />);
    }

    return (
        <tbody>{ rows(props.rows) }</tbody>
    );
}

export default
function Table(props) {

    const {title, rows} = props;

    return (
        <table>
            <thead>
                <tr>
                    <th className="table-title" colSpan="2">{title}</th>
                </tr>
            </thead>
            
            <TBody rows={rows} />
        </table>
    );
}