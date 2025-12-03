import {
  getAuth,
  createUserWithEmailAndPassword,
} from '@react-native-firebase/auth';
import { IUser } from '../interfaces/auth.interface';
import { userRef } from '../services/data.service';
import { serverTimestamp } from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { useUserStore } from './useUserStore';

export async function signUpWithEmailPassword(
  profile: IUser,
  password: string,
) {
  try {
    // create auth
    const cridential = await createUserWithEmailAndPassword(
      getAuth(),
      profile.email,
      password,
    );
    // profile in firestore
    const { uid } = cridential?.user;
    await userRef()
      .doc(uid)
      .set({
        ...profile,
        key: uid,
        login_at: serverTimestamp(),
      });
    // set global state zustand
    const { setUser } = useUserStore();
    setUser({
      ...profile,
      key: uid,
      login_at: new Date(),
    });
    return cridential;
  } catch (error: any) {
    if (error?.code === 'auth/email-already-in-use') {
      Alert.alert('Error', 'That email address is already in use!');
    }

    if (error?.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.log('error', error);
  }
}
