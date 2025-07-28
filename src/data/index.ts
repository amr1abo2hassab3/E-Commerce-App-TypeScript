import type { ILoginInput, IRegisterInput, IResetPasswordInput, ISettings } from "../interfaces";
import { handleLogOut } from "../lib/utils";

// Login input data
export const LoginForm: ILoginInput[] = [
    {
        name: "email",
        placeholder: "Enter you email",
        type: "email" ,
        autoComplete: "userName" ,
    },
    {
        name: "password",
        placeholder: "Enter you Password",
        type: "password",
        autoComplete: "current-password"
        
    },
]

// Register input data
export const RegisterForm: IRegisterInput[] = [
     {
        name: "name",
        placeholder: "User Name",
        type: "text" ,
    },
    {
        name: "email",
        placeholder: "Email",
        type: "email" ,
        autoComplete: "userName" ,
    },
    {
        name: "phone",
        placeholder: "Phone number",
        type: "text",
        
    },
    {
        name: "password",
        placeholder: "Password",
        type: "password",
        autoComplete: "current-password"
        
    },
    {
        name: "rePassword",
        placeholder: "Confirm Password",
        type: "password",
        autoComplete: "current-password"
        
    },
   
]

// reset password data

export const ResetPasswordForm: IResetPasswordInput[] = [
     {
        name: "email",
        placeholder: "Email address",
        type: "email" ,
        autoComplete: "userName" ,
    },
      {
        name: "newPassword",
        placeholder: "New Password",
        type: "password",
        autoComplete: "current-password"
        
    },
]

// navbar 
export const settings: ISettings[] = [
  {
    name: "Account",
  },
  {
    name: "Logout",
    fn: handleLogOut,
  },
];


// cookies key
export const cookiesUserDataKey: string = "UserData";