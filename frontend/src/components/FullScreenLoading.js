import React  from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const FullScreenLoading = ({ loading }) => {
    if(loading) {
        return (<div style={styles.container}>
            <CircularProgress size={100} thickness={1} />
        </div>)
    } 
    return null;
}
const styles = {
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: '0px',
        left: '0px',
        backgroundColor: 'black',
        zIndex: 10000,
        opacity: .4,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}
export default FullScreenLoading;