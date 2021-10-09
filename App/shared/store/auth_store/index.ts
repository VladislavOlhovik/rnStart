import {makeAutoObservable} from 'mobx';
import {IDataType} from './type';
import {Data} from './data';
import {Client} from './client';

export class _AuthStore {
  data: Data;
  client: Client;

  constructor() {
    this.data = new Data();
    this.client = new Client();
    makeAutoObservable(this);
  }
  createNewUser = async (user: IDataType) => {
    try {
      this.data.onFetchLoading();
      const response = await this.client.createUser(user);
      this.data.setUser(response);
      this.data.setLogin(true);
      this.data.onFetchSuccess();
    } catch (e) {
      console.log(e);
      this.data.setError(e);
      this.data.onFetchError();
    }
  };
  singInUser = async (user: IDataType) => {
    try {
      this.data.onFetchLoading();
      const response = await this.client.signIn(user);
      this.data.setUser(response);
      this.data.setLogin(true);
      this.data.onFetchSuccess();
    } catch (e) {
      console.log(e);
      this.data.setError(e);
      this.data.onFetchError();
    }
  };
  signOutUser = () => {
    this.data.onFetchLoading();
    this.data.setLogin(false);
    this.data.onFetchSuccess();
  };
}

export const AuthStore = new _AuthStore();
