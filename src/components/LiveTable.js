import Table from './Table.js';
import useTimeoutGet from './useTimeoutGet.js';

export default
function LiveTable(props) {

    const {title, check, ms} = props;

    const rows = useTimeoutGet(check, ms);
    
    return (
        <Table title={title} rows={rows} />
    );
}