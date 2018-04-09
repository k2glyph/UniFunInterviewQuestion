/**
 * The base_url is the url that comes before the endpoint.
 */
export const BASE_URL = 'http://localhost:8080';

/**
 * The exposed api sub url that are used to embedded into base_url and send request.
 */
export const EndPoint = {
    SMS: {
        LIST: '/api/getlogs',
        GET: '/domain',
        CREATE: '/api/sendsms',
        UPDATE: '/domain/', 
        DELETE: '/api/delete/',
        DELETEALL: '/api/deleteall' 
    }
}

const createUrl = (endPoint) => {
    return BASE_URL +endPoint;
}
export default createUrl;