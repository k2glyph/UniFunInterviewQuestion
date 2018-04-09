import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TableRow, TableRowColumn, TableHeaderColumn } from 'material-ui/Table';
import { PaginationTable } from '../../components';
import Item from './Item';
import { Header } from '../../components';

import IconButton from 'material-ui/IconButton';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import { getSms, deleteSms, createSms, reset } from './action';
import FullScreenLoading from '../../components/FullScreenLoading';
import Form from './Form';
import MODE from '../../utils/Mode';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          id: 0,
          mode: MODE.LIST
        };
        this.reload = this.reload.bind(this);
        this.deleteSms = this.deleteSms.bind(this);
        this.onRequest = this.onRequest.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    getColumn() {
      const commonStyle = { textAlign: 'center' };
      const columnNames = ["Date","From", "To", "Status","Actions"];
      return (
          <TableRow>
            {
              columnNames.map((column)=> (<TableHeaderColumn key={column} style={{...commonStyle}}>{column}</TableHeaderColumn>))
            }
          </TableRow>
        );
      }
      renderNotFound() {
        return (
          <TableRow>
            <TableRowColumn style={{ textAlign: 'center' }} rowSpan={10}>
                No Data Found
            </TableRowColumn>
          </TableRow>
        );
      }
      getRow() {
        const { loading, error, data } = this.props.sms;
        console.log(data);
        if (error && data === null) {
          return (
            <TableRow>=
              <TableRowColumn style={{ textAlign: 'center' }} rowSpan={10}>
                {error}
              </TableRowColumn>
            </TableRow>
          );
        } else if (loading) {
          return (
            <TableRow>
              <TableRowColumn style={{ textAlign: 'center' }} rowSpan={10}>
                Loading Data...
              </TableRowColumn>
            </TableRow>
          );
        } else if (data === null || data === undefined) {
          return this.renderNotFound();
        } else if(data.length===0) {
          return this.renderNotFound();
        }
        return data.map(item=> {
          return <Item key={item.id} item={item} onDelete={this.deleteSms} onEditRequest={this.onRequest}/>;
        });          
      
    }
    componentDidMount() {
      this.reload();
    }
    reload() {
      this.props.getSms();
    }
    deleteSms(domain) {
      this.props.deleteSms(domain);
    }
    onRequest(mode, data) {
      this.setState({ mode, selected: data });
    }
    onSubmit(edit, data) {
      if(edit) {
        // this.props.updateSms(data.name, data);
      } else {
        this.props.createSms(data);
      }
      
    }
    renderMode() {
      switch(this.state.mode) {
        case MODE.LIST:
        return (
          <div>
              <FullScreenLoading loading={this.props.delete.loading} />
              <Header title={'List'} reload={this.reload}>
                <IconButton default label="Send SMS" onTouchTap={()=> this.onRequest(MODE.ADD)}>
                  <ActionNoteAdd  color={'#fff'}/> 
                </IconButton>
              </Header>
              <PaginationTable
                  handlePageChange={this.handlePageChange}
                  activePage={10}
                  limit={0}
                  total={Number(100)}
                  column={this.getColumn()}
                  row={this.getRow()}
              />
          </div>
        );
        case MODE.EDIT:
            return (
              <Form 
                onCancel={this.onRequest} 
                title={'Edit'} 
                onSubmit={this.onSubmit} 
                edit 
                reset={this.props.reset}
                data={this.state.selected}
                server={this.props.update}/>
            )
        case MODE.ADD:
          return (
            <Form 
              onCancel={this.onRequest} 
              title={'Send'} 
              onSubmit={this.onSubmit}
              reset={this.props.reset}
              edit={false} 
              server={this.props.create}
              />
          )
       default:
          return <div>hello</div>;
      }
    }
    render() {
          return (
            <div>
              {this.renderMode()}
            </div>
          )
    }
}
const mapStateToProps = (state) => {//eslint-disable-line
  return {
    sms: state.sms.sms,
    delete: state.sms.delete,
    create: state.sms.create,
    update: state.sms.update,
  }
}
const mapDispatchToProps = (dispatch) => {//eslint-disable-line
  return {
    getSms:() => dispatch(getSms()),
    deleteSms:(name) => dispatch(deleteSms(name)),
    createSms:(data) => dispatch(createSms(data)),
    reset:(data) => dispatch(reset()),
  }
} 
export default connect(mapStateToProps, mapDispatchToProps) (List);