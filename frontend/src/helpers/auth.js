import { firebaseAuth } from '../config/constants';


export function login(token) {
  return firebaseAuth().signInWithCustomToken(token);
}
export function logout() {
  return firebaseAuth().signOut();
}
