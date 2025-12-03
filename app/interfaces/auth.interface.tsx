import { FieldValue } from '@react-native-firebase/firestore';

export interface IUser {
  key: string;
  firstName: string;
  lastName: string;
  gender: any;
  dob: Date | FieldValue;
  photoURL?: string;
  email: string;
  login_at?: Date | FieldValue;
}
