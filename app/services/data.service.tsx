import firestore from '@react-native-firebase/firestore';

export function userRef() {
  return firestore().collection('users');
}
