import { buildActionType } from '../../ApiRequest/BuildActionType';
import Prefix from '../../ApiRequest/Prefix';
import Oper from '../../ApiRequest/Operation';

export const LISTSMS = buildActionType(Prefix.SMS+Oper.LIST);
export const GETSMS = buildActionType(Prefix.SMS+Oper.READ);
export const RESETSMS = buildActionType(Prefix.SMS+Oper.RESET);
export const CREATESMS = buildActionType(Prefix.SMS+Oper.CREATE);
// export const UPDATESMS = buildActionType(Prefix.SMS+Oper.UPDATE);
export const DELETESMS = buildActionType(Prefix.SMS+Oper.DELETE);
export const DELETEALLSMS = buildActionType(Prefix.SMS+Oper.DELETEALL);

