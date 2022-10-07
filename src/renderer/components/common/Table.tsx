import * as React from "react";
import "../../css/Table.css";

type Props = {
  title: string;
  rows: [string, string][];
};

export default function Table({ title, rows }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th className="table-title" colSpan={2}>
            {title}
          </th>
        </tr>
      </thead>

      <tbody>
        {rows?.map(([title, value]) => (
          <tr key={String(title)}>
            <td>{String(title)}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
