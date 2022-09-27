import * as React from 'react';
import Table from './Table';
import {Getter, useTimeoutGet} from './useTimeoutGet';

type Props = {
    check :Getter,
    ms    :number,
};

type RowGroup = {
    key   :string,
    title :string,
    rows  :[string,string][]
}

export default
function LiveTable({check, ms} :Props) {

    const rowGroups :RowGroup[] = useTimeoutGet(check, ms);

    return (
        <>
        {
            rowGroups?.map((rowGroup :RowGroup) =>
                <Table
                    key={rowGroup.key}
                    title={rowGroup.title}
                    rows={rowGroup.rows}
                />
            )
        }
        </>
    );
}