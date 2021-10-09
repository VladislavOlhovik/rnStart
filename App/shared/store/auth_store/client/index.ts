import {makeAutoObservable} from 'mobx';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {IDataType} from '../type';

export class Client {
  constructor() {
    makeAutoObservable(this);
  }
  createUser = async ({
    email,
    password,
  }: IDataType): Promise<FirebaseAuthTypes.UserCredential> => {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    return response;
  };
  signIn = async ({
    email,
    password,
  }: IDataType): Promise<FirebaseAuthTypes.UserCredential> => {
    const response = await auth().signInWithEmailAndPassword(email, password);
    return response;
  };
}
