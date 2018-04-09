import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MDialog from 'material-ui/Dialog';
import './dialog.css';

class OpenModal extends Component {
  constructor(props) {
    super(props);
    this.checkButtonType = this.checkButtonType.bind(this);
  }
  checkButtonType() {
    const { title, showModal, buttonType } = this.props;
    const { openTicketStyle } = styles;
    if (buttonType === 'FlatButton') {
      return (<FlatButton primary label={title} onClick={showModal} style={openTicketStyle} />);
    } else if (buttonType === 'MenuItem') {
      return (<div />);
    }
    return (<RaisedButton primary label={title} onClick={showModal} style={this.props.modalStyle} />);
  }
  render() {
    const { show, title } = this.props;
    return (
      <div>
        {this.checkButtonType()}
        <MDialog
          title={title}
          open={show}
          repositionOnUpdate={false}
          autoDetectWindowHeight={false}
          autoScrollBodyContent={false}
          className="dialog-root"
          contentClassName="dialog-content"
          bodyClassName="dialog-body"
        >
          <div className="dialog-scroll" >
            {this.props.children}
          </div>
        </MDialog>
      </div>
    );
  }
}
OpenModal.defaultProps = {
  buttonType: 'non'
};
const styles = {
  openTicketStyle: {
    color: 'white',
    backgroundColor: 'rgb(30, 136, 229)',
  },
};
OpenModal.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  buttonType: PropTypes.string.isRequired,
};
export { OpenModal };
