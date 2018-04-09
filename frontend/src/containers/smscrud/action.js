
import { genericRequest, Method, fetchSuccess, fetchFailed, fetchRequest } from '../../ApiRequest/Request';
import { LISTSMS, DELETESMS, CREATESMS, DELETEALLSMS, RESETSMS } from './ActionTypes';
import createUrl, { EndPoint } from '../../ApiRequest/EndPoint';

export const getSms = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchRequest(LISTSMS.REQUEST));
            const response = await genericRequest(createUrl(EndPoint.SMS.LIST), undefined, Method.GET);
            dispatch(fetchSuccess(LISTSMS.SUCCESS, response));
        } catch(err) {
            dispatch(fetchFailed(LISTSMS.FAILED, err));
        }
    }    
}

export const deleteSms = (id) => {
    return async (dispatch) => {
        try {
                dispatch(fetchRequest(DELETESMS.REQUEST));
                const response = await genericRequest(createUrl(EndPoint.SMS.DELETE+id), undefined, Method.DELETE);
                dispatch(fetchSuccess(DELETESMS.SUCCESS,response));
        }catch(err) {
            dispatch(fetchFailed(DELETESMS.FAILED, err));
        }
    }
}
export const deleteAll = () => {
    return async (dispatch) => {
        try {
                dispatch(fetchRequest(DELETEALLSMS.REQUEST));
                const response = await genericRequest(createUrl(EndPoint.SMS.DELETEALL), undefined, Method.DELETE);
                dispatch(fetchSuccess(DELETEALLSMS.SUCCESS,response));
        }catch(err) {
            dispatch(fetchFailed(DELETEALLSMS.FAILED, err));
        }
    }
}
export const reset = () => {
    return  (dispatch) => {
            dispatch(fetchRequest(RESETSMS.REQUEST));
    }
}

export const createSms = (data) => {
    return async (dispatch) => {
        dispatch(fetchRequest(CREATESMS.REQUEST));
        try {
            const response = await genericRequest(createUrl(EndPoint.SMS.CREATE), data, Method.POST)
            dispatch(fetchSuccess(CREATESMS.SUCCESS, response));
        }catch(err) {
            dispatch(fetchFailed(CREATESMS.FAILED, err))
        }
    }    
}
// export const updateSms = (domain, data) => {
//     return async (dispatch) => {
//         dispatch(fetchRequest(UPDATESMS.REQUEST));
//         try {
//             const response = await genericRequest(createUrl(EndPoint.Domain.UPDATE+domain), data, Method.PUT)
//             dispatch(fetchSuccess(UPDATESMS.SUCCESS, response));
//         }catch(err) {
//             dispatch(fetchFailed(UPDATESMS.FAILED, err))
//         }
//     }    
// }