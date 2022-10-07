import React from "react";
import Table from "./Table";
import { Getter, useTimeoutGet } from "../../hooks/useTimeoutGet";

type Props = {
  title: string;
  check: Getter;
  ms: number;
};

export default function LiveTable({ title, check, ms }: Props) {
  const rows = useTimeoutGet(check, ms);

  return <Table title={title} rows={rows} />;
}
