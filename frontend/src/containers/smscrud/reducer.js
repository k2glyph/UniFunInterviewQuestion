import { LISTSMS, DELETESMS, CREATESMS, UPDATESMS, DELETEALLSMS, RESETSMS } from './ActionTypes';
import MODE from '../../utils/Mode';

const INITIAL_STATE = { 
    sms: {  data:null, loading: false, error: null },
    delete: { data: null, loading: false, error: null },
    create: { data: null, loading: false, error: null },
    update: { data: null, loading: false, error: null } 
  };
const allOperation = (data, newItem, mode) => {
  const newData=[];
    data.map((item) => {
      if(item.id === newItem.id && mode===MODE.DELETE) {
      } else if(item.id === newItem.id && mode===MODE.EDIT){
        newData.push(newItem);
      } else {
        newData.push(item);
      }
    });
    if(mode===MODE.ADD)
      newData.push(newItem);
    return newData;
}

const Message = {
    SUCCESS: 'Successfully SMS:',
    ERROR: 'ERROR SMS:',
    CREATED:'CREATED',
    UPDATED:'UPDATED',
    DELETED:'DELETED',
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {  
    case LISTSMS.REQUEST:
      return { ...state, sms: {  data: null, loading: true, error: null } };
    case LISTSMS.SUCCESS:
      return { ...state, sms: { data: action.payload, loading: false, error: null } };
    case LISTSMS.FAILED:
      return { ...state, sms: {  loading: false, error: action.payload } };
    case DELETESMS.REQUEST:
      return { ...state, delete: {  data: null, loading: true, error: null } };
    case DELETESMS.SUCCESS: {
      const newData=allOperation(state.sms.data, action.payload, MODE.DELETE);
      return { ...state, 
        sms: {  data: newData, loading: false, error: null },
        delete: {  data: Message.SUCCESS+Message.DELETED, loading: false, error: null },
       };
    }
    case DELETESMS.FAILED:
      return { ...state, delete: {  data:null , loading: false, error: Message.ERROR+ Message.DELETED}};
    case DELETEALLSMS.REQUEST:
     return { ...state, delete: {  data: null, loading: true, error: null } };
    case DELETEALLSMS.SUCCESS: {
      return { ...state, 
        sms: {  data: null, loading: false, error: null },
        delete: {  data: Message.SUCCESS+Message.DELETED, loading: false, error: null },
        };
     }
    case DELETEALLSMS.FAILED:
      return { ...state, delete: {  data:null , loading: false, error: Message.ERROR+ Message.DELETED}};
    case CREATESMS.REQUEST:
      return { ...state, create: {  data: null, loading: true, error: null } };
    case CREATESMS.SUCCESS: {
      const newData=allOperation(state.sms.data, action.payload, MODE.ADD);
      return { ...state, 
        sms: {  data: newData, loading: false, error: null },
        create: {  data: Message.SUCCESS+Message.CREATED, loading: false, error: null },
       };
    }
    case CREATESMS.FAILED:
      return { ...state, create: {  data:null , loading: false, error: action.payload }};
      case RESETSMS.REQUEST:
      return { ...state,  
        delete: { data: null, loading: false, error: null },
        create: { data: null, loading: false, error: null },
        update: { data: null, loading: false, error: null } };
    // case UPDATESMS.REQUEST:
    //     return { ...state, update: {  data: null, loading: true, error: null } };
    // case UPDATESMS.SUCCESS: {
    //     const newData=allOperation(state.sms.data, action.payload, MODE.EDIT);
    //     return { ...state, 
    //       sms: {  data: newData, loading: false, error: null },
    //       update: {  data: Message.SUCCESS+Message.UPDATED, loading: false, error: null },
    //     };
    //    }
    // case UPDATESMS.FAILED:
    //     return { ...state, update: {  data:null , loading: false, error: action.payload }};
    default:
      return state;
  }
};