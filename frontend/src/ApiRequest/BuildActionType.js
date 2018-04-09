export const NETWORK = {
    REQUEST: 'REQUEST',
    FAILED: 'FAILED',
    SUCCESS: 'SUCCESS',
  };
  
  export const buildActionType = (prefix) => {
    return {
      REQUEST: prefix + '_' + NETWORK.REQUEST,
      FAILED : prefix + '_' + NETWORK.FAILED,
      SUCCESS: prefix + '_' + NETWORK.SUCCESS
    };
  };