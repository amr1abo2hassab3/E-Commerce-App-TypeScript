import type { ElementType } from "react";
import type {
  ChangePassowrdFieldName,
  CreateOrderFieldName,
  LoginFieldName,
  RegisterFieldName,
  ResetPasswordFieldName,
  UpdateAccontFieldName,
} from "../types";

// authentication
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

export interface ICreateOrderInput {
  name: CreateOrderFieldName;
  placeholder: string;
  type: string;
  autoComplete?: string;
}

export interface IUpdateAccountInput {
  name: UpdateAccontFieldName;
  placeholder: string;
  type: string;
  autoComplete?: string;
}

export interface IChangePasswordInput {
  name: ChangePassowrdFieldName;
  placeholder: string;
  type: string;
  autoComplete?: string;
}

export interface ICreateOrderValues {
  details: string;
  phone: string;
  city: string;
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

export interface IUpdateAccountValues {
  name: string;
  email: string;
  phone: string;
}
export interface IChangePassowrdValues {
  currentPassword: string;
  password: string;
  rePassword: string;
}

export interface IResponse {
  message: string;
  user: User;
  token: string;
}

export interface User {
  name: string;
  email: string;
  role: string;
}

export interface IApiError {
  statusMsg: string;
  message: string;
  errors?: IErrorsPayload;
}

export interface IErrorsPayload {
  location: string;
  msg: string;
  param: string;
  value: string;
}

export interface ISettings {
  name: string;
  path?: string;
  icon?: ElementType;
  fn?: () => void;
}

// forgot password
export interface IForgotValues {
  email: string;
}

// reset password
export interface IRestPasswordValues {
  email: string;
  newPassword: string;
}

export interface IResetPasswordInput {
  name: ResetPasswordFieldName;
  placeholder: string;
  type: string;
  autoComplete?: string;
}
