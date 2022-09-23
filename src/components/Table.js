import React, {useState, useEffect} from 'react';
import '../css/Table.css';

function Row(props) {
    const {entry} = props;
    return (
        <tr>
            <td>{String(entry[0])}</td>
            <td>{entry[1]}</td>
        </tr>
    );
}

function rowsArray(props) {
    const {rows} = props;
    return rows?.map(entry => entry ? <Row key={entry[0]} entry={entry} /> : null);
}

function TBody(props) {
    return (
        <tbody>{ rowsArray(props) }</tbody>
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