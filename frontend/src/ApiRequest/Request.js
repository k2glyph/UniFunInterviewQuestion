
import * as util from '../utils/Utility';

export const Method= {
  GET:'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT'
};
export const fetchSuccess = (type, data) => {
  return {
    type,
    payload: data
  };
};

export const fetchFailed = (type, data) => {
  return {
    type,
    payload: data,
  };
};

export const fetchRequest = (type) => {
  return {
    type
  };
};

export const genericRequest = async (url, data, method) => {
    const options= {
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${util.getToken()}`,
        },
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // *manual, follow, error
        referrer: 'no-referrer', // *client, no-referrer
      };
      if(data !== undefined || data !== null) {
          options['body']=JSON.stringify(data);
      }
      try {
        const response= await fetch(url, options);
        const responseData= await response.json();   
          if(response.ok)
            return responseData;
          else {
            throw responseData;
          }
      }catch(err) {
        throw err;
      }
      
}
