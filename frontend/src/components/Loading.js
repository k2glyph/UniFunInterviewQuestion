import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = () => { //eslint-disable-line
  return (
    <div>
      <center><CircularProgress size={50} thickness={5} /></center>
    </div>
  );
};

export { Loading };
