import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface IDataType {
  email: string;
  password: string;
}
export interface IUser {
  metadata: {
    lastSignInTime?: string;
    creationTime?: string;
  };
  phoneNumber: string | null;
  displayName: string | null;
  isAnonymous: boolean;
  providerData?: Array<FirebaseAuthTypes.UserInfo>;
  email: string | null;
  emailVerified: boolean;
  providerId: string;
  photoURL: string | null;
  uid: string;
  isNewUser?: boolean;
}

export interface IFormData {
  email: string;
  password: string;
  type: ETypeButton;
}

export enum ETypeButton {
  'SignUp',
  'SignIn',
  undefined,
}
