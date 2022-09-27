import Table from './Table.tsx';
import useTimeoutGet from './useTimeoutGet.ts';

export default
function LiveTable(props) {

    const {title, check, ms} = props;

    const rows = useTimeoutGet(check, ms);
    
    return (
        <Table title={title} rows={rows} />
    );
}