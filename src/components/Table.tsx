import * as React from 'react';
import '../css/Table.css';

type Props = {
    title :string;
    rows  :[string,string][];
};

export default
function Table({title, rows} :Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th className="table-title" colSpan={2}>{title}</th>
                </tr>
            </thead>

            <tbody>
                {
                    rows?.map(entry =>
                        <tr key={String(entry[0])}>
                            <td>{String(entry[0])}</td>
                            <td>{entry[1]}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}