import type { LoginFieldName , RegisterFieldName } from "../types";


export interface ILoginInput {
    name: LoginFieldName;
    placeholder: string;
    type: string;
    autoComplete?: string;
}
export interface IRegisterInput {
    name: RegisterFieldName;
    placeholder: string;
    type: string;
    autoComplete?: string;
}

export interface ILoginValues {
    email: string;
  password: string;
}

export interface IRegisterValues {
    name: string;
    password: string;
    rePassword: string;
    email: string;
    phone: string;
}


export interface IResponse {
  message: string
  user: User
  token: string
}

export interface User {
  name: string
  email: string
  role: string
}

export interface IApiError {
  statusMsg: string
  message: string
}



export interface ISettings {
  name: string;
  fn?: () => void;
}


// forgot password

export interface IForgotValues {
  email: string;
}

