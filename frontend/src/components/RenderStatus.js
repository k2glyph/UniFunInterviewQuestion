import React, { PropTypes } from 'react';
import {
  black600, red600, green600, grey600,
  cyan600, orange600, blue600 } from 'material-ui/styles/colors';

const renderStatusStyle = (status, color) => (
  <div
    style={{
      backgroundColor: color,
      display: 'inline-block',

      color: 'white',
      padding: 4 }}
  >
    {status}
  </div>
);
const RenderStatus = ({ status }) => {
  switch (status) {
    case 'Customer-Reply':
      return <div>{renderStatusStyle(status, orange600)}</div>;
    case 'Closed':
      return <div>{renderStatusStyle(status, grey600)}</div>;
    case 'Open':
      return <div>{renderStatusStyle(status, green600)}</div>;
    case 'Answered':
      return <div>{renderStatusStyle(status, cyan600)}</div>;
    case 'In Progress':
      return <div>{renderStatusStyle(status, red600)}</div>;
    case 'On Hold':
      return <div>{renderStatusStyle(status, blue600)}</div>;
    case 'Active':
      return <div>{renderStatusStyle(status, green600)}</div>;
    case 'Enabled':
      return <div>{renderStatusStyle(status, green600)}</div>;
    case 'Disabled':
      return <div>{renderStatusStyle(status, red600)}</div>;
    case 'Unpaid':
      return <div>{renderStatusStyle(status, orange600)}</div>;
    case 'Paid':
      return <div>{renderStatusStyle(status, green600)}</div>;
    case 'Cancelled':
      return <div>{renderStatusStyle(status, red600)}</div>;
    case 'Pending':
      return <div>{renderStatusStyle(status, orange600)}</div>;
    case 'available':
      return <div>{renderStatusStyle(status, green600)}</div>;
    case 'Not Available Already Register':
      return <div>{renderStatusStyle(status, red600)}</div>;
    default:
      return <div>{renderStatusStyle(status, black600)}</div>;
  }
};
RenderStatus.propTypes = {
  status: PropTypes.string.isRequired,
};
export { RenderStatus }; //eslint-disable-line
