export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  address: string;
}
