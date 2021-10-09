import {IUser} from '../../auth_store/type';

export const INITIAL_USER: IUser = {
  isNewUser: false,
  metadata: {
    lastSignInTime: '',
    creationTime: '',
  },
  phoneNumber: null,
  displayName: null,
  isAnonymous: false,
  providerData: [],
  email: '',
  emailVerified: false,
  providerId: '',
  photoURL: null,
  uid: '',
};
