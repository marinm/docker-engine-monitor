import '../css/Table.css';

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