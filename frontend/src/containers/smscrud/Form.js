import React,{ Component } from 'react';
import MenuItem from 'material-ui/MenuItem';

import SelectField from 'material-ui/SelectField';
import {grey400} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

import { PageBase } from '../../components';
import MODE from '../../utils/Mode';
import TextView from '../../components/TextView';
import FullScreenLoading from '../../components/FullScreenLoading';

import { validator, FIELDS } from '../../utils/Validator';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            senderMsisdn: '',
            receiverMsisdn: '',
            message: '',
            errors:{}
        }; 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        console.log('NextProps is called');
        if(nextProps.server.data !== null) {
            setTimeout(()=> {
                this.props.reset();
                console.log('reset is called');
            }, 3000);
        }
    }
    onChange(e) {
        console.log(e.target.name);
        this.setState({[e.target.name]: e.target.value})
    }
    onStatusChange=(e, index, value) => this.setState({ zimbraDomainStatus: value})

    onSubmit(e) {
        const isValid = this.onValidation();
        const data ={
            senderMsisdn: this.state.senderMsisdn,
            receiverMsisdn: this.state.receiverMsisdn,
            message: this.state.message
        };
        if(isValid) {
            this.props.onSubmit(this.props.edit, data);
        } else {
            console.log('OnSubmit could not working with invalid data:', data);
        }
        
    }
   
    onValidation() {
        
        const fieldValues= [
            { key: 'sender', type: FIELDS.PHONENUMBER, value:this.state.senderMsisdn },
            { key: 'receiver', type: FIELDS.PHONENUMBER, value:this.state.receiverMsisdn },
            { key: 'message', type: FIELDS.TEXT, value:this.state.message }
        ]
       const response = validator(fieldValues, this.state.errors);
        this.setState({ errors: response.errors });
        return response.isValid;
    }
    render() {
        const { loading, error, data } = this.props.server;
        return (
            <PageBase title={this.props.title||'Edit'}>
                <div>
                    <FullScreenLoading loading={loading} />
                    <TextView
                        name={'senderMsisdn'}
                        onChange={this.onChange}
                        hintText="Sender Number"
                        floatingLabelText="Sender Number"
                        value={this.state.senderMsisdn}
                        disabled={this.props.edit}
                        fullWidth={true}
                        errorMessage={this.state.errors.sender||''}
                    />
                    <TextView
                        name={'receiverMsisdn'}
                        onChange={this.onChange}
                        hintText="Receiver Number"
                        floatingLabelText="Receiver Number"
                        value={this.state.receiverMsisdn}
                        disabled={this.props.edit}
                        fullWidth={true}
                        errorMessage={this.state.errors.receiver||''}
                    />
                    <TextView
                        name={'message'}
                        onChange={this.onChange}
                        hintText="Message"
                        floatingLabelText="Message"
                        value={this.state.message}
                        disabled={this.props.edit}
                        fullWidth={true}
                        errorMessage={this.state.errors.message||''}
                    />
                    <div style={{ fontSize: 16, color: 'red', textAlign: 'center' }}>{error? error.message: null}</div>
                    <div style={{ fontSize: 16, color: 'green', textAlign: 'center' }}>{data}</div>
                    <div style={styles.buttons}>
                    <RaisedButton label="Cancel" onTouchTap={()=> this.props.onCancel(MODE.LIST)}/>
                    <RaisedButton label="Send"
                                    style={styles.saveButton}
                                    onTouchTap={(event)=> this.onSubmit(event)}
                                    primary={true} />
                    
                    </div>
                </div>
        </PageBase>
        )
    }
}
const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  }; 
export default Form;
