import React, { Component } from 'react';
import { Table, TableBody, TableHeader } from 'material-ui/Table';
import Pagination from 'react-js-pagination';
import './table.css';
import './app.scss';

class PaginationTable extends Component {

  render() {
    const { column, row, activePage, handlePageChange, total, limit } = this.props;
    const { tdStyle } = styles;
    return (
      <div id="tableWrapper">
      <Table style={tdStyle}>
        <TableHeader displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false} fixHeader={false}>
          {column}
        </TableHeader>
        <TableBody
          style={{ cursor: 'pointer', textAlign: 'center' }}
          showRowHover
          displayRowCheckbox={false}
        >
          {row}
        </TableBody>
      </Table>
      {/* <Pagination
          activePage={activePage}
          itemsCountPerPage={limit}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
      /> */}
    </div>
    );
  }
}
PaginationTable.defaultProps= {
  handlePageChange: ()=> { console.log('Todo: HandlePageChange is not implemented yet.')}
}
const styles = {
  tdStyle: {
    textAlign: 'center',
    overflowX: 'auto !important'
  }
};
export { PaginationTable };
