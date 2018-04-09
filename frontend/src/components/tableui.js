import React from 'react';
import { Table, TableHeader } from 'material-ui/Table';

const TableUI = ({ col, row }) => { //eslint-disable-line
  return (
    <Table
    multiSelectable={false} selectable={false}
    displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}
    >
    <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
        {col}
    </TableHeader>
      {row}
  </Table>);
};

export { TableUI };
