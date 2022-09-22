import Table from './Table.js';
import useCheckTicker from './useCheckTicker.js';

export default
function LiveTable(props) {

    const {title, check, ms} = props;

    const rows = useCheckTicker(check, ms);

    return (
        <Table title={title} rows={rows} />
    );
}