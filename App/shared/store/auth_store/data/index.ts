import {makeAutoObservable} from 'mobx';
import {INITIAL_USER} from '../../data/constants';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {IUser} from '../type';

export class Data {
  user: IUser;
  isFetchLoading: boolean;
  isFetchSuccess: boolean;
  isFetchError: boolean;
  isLogin: boolean;
  messageError: string;
  constructor() {
    this.user = INITIAL_USER;
    this.isFetchLoading = false;
    this.isFetchSuccess = false;
    this.isFetchError = false;
    this.isLogin = false;
    this.messageError = '';
    makeAutoObservable(this);
  }
  setLogin = (isLogin: boolean) => {
    this.isLogin = isLogin;
    console.log(this.isLogin);
  };
  onFetchLoading = () => {
    this.isFetchLoading = true;
    this.isFetchSuccess = false;
    this.isFetchError = false;
  };
  onFetchSuccess = () => {
    this.isFetchSuccess = true;
    this.isFetchLoading = false;
    this.isFetchError = false;
  };
  onFetchError = () => {
    this.isFetchError = true;
    this.isFetchSuccess = false;
    this.isFetchLoading = false;
  };
  onFetchReset = () => {
    this.isFetchLoading = false;
    this.isFetchSuccess = false;
    this.isFetchError = false;
  };
  setError = (error: any) => {
    this.messageError = error;
  };
  setUser = ({
    additionalUserInfo,
    user: {
      metadata,
      phoneNumber,
      displayName,
      uid,
      photoURL,
      providerData,
      providerId,
      email,
      emailVerified,
      isAnonymous,
    },
  }: FirebaseAuthTypes.UserCredential) => {
    this.user = {
      metadata,
      phoneNumber,
      displayName,
      isAnonymous,
      providerData,
      email,
      emailVerified,
      providerId,
      photoURL,
      uid,
      isNewUser: additionalUserInfo?.isNewUser,
    };
  };
}
