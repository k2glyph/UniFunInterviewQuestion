import React from 'react';
import TextField from 'material-ui/TextField/TextField';

const TextView = ({ name, hintText, floatingLabelText, value, errorMessage, fullWidth, onChange, disabled}) => {
    return (
        <div>
            <TextField
                name={name}
                onChange={(event) => onChange(event)}
                hintText={hintText}
                floatingLabelText={floatingLabelText}
                value={value}
                disabled={disabled}
                fullWidth={fullWidth}
            />
            {
                errorMessage ? <div style={styles.error}>{errorMessage}</div>: null
            }
        </div>
    )
}
const styles= {
    error: {
        color: 'red',
        margin: 0,
        padding: 0,
        fontSize: 14,
    }
}
export default TextView;