import '../../utils/String';
import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

import { RenderStatus } from '../../components';
import MODE from '../../utils/Mode';

const DomainItem = (props) => {
    const commonStyle={ textAlign: 'center' };
    const { id, sendDate, senderMsisdn, receiverMsisdn, message, deliveryDate, deliveryStatusNumber, deliveryStatusMessage} = props.item;
    return (
        <TableRow>
            <TableRowColumn style={{...commonStyle}}>{new Date(sendDate).toISOString()}</TableRowColumn>
            <TableRowColumn style={{...commonStyle}}>{senderMsisdn}</TableRowColumn>
            <TableRowColumn style={{...commonStyle}}>{receiverMsisdn}</TableRowColumn>
            <TableRowColumn style={{...commonStyle}}>{deliveryStatusNumber}</TableRowColumn>
            <TableRowColumn style={{...commonStyle}}>
                 {/* <RaisedButton label="Edit" primary={true} onTouchTap={()=> props.onEditRequest(MODE.EDIT, props.item)} /> */}
                 <RaisedButton label="Delete" secondary onTouchTap={()=> props.onDelete(id)} />
            </TableRowColumn>
      </TableRow>
    )
}

export default DomainItem;