import Table from './Table.js';
import useTimeoutGet from './useTimeoutGet.js';

export default
function LiveTable(props) {

    const {check, ms} = props;

    const tables = useTimeoutGet(check, ms);

    return (
        <>{tables?.map(table => <Table key={table.key} title={table.title} rows={table.rows} />)}</>
    );
}