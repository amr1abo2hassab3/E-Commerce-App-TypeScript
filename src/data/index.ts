import type { ILoginInput, IRegisterInput, IResetPasswordInput, ISettings } from "../interfaces";
import { handleLogOut } from "../lib/utils";
import img1 from "../assets/images/slider-image-1.jpeg";
import img2 from "../assets/images/slider-image-2.jpeg";
import img3 from "../assets/images/slider-image-3.jpeg";
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

// home
// images slider

export const images: string[] = [img1 , img2 , img3]


// cookies key
export const cookiesUserDataKey: string = "UserData";