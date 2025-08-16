import type {
  IChangePasswordInput,
  ICreateOrderInput,
  ILoginInput,
  IRegisterInput,
  IResetPasswordInput,
  ISettings,
  IUpdateAccountInput,
} from "../interfaces";
import img1 from "../assets/images/slider-image-1.jpeg";
import img2 from "../assets/images/slider-image-2.jpeg";
import img3 from "../assets/images/slider-image-3.jpeg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockResetIcon from "@mui/icons-material/LockReset";
import type { IAddingAddresInput } from "../interfaces/orderInterfaces";
// Login input data
export const LoginForm: ILoginInput[] = [
  {
    name: "email",
    placeholder: "Enter you email",
    type: "email",
    autoComplete: "userName",
  },
  {
    name: "password",
    placeholder: "Enter you Password",
    type: "password",
    autoComplete: "current-password",
  },
];

export const UpdateAccountForm: IUpdateAccountInput[] = [
  {
    name: "name",
    placeholder: "User Name",
    type: "text",
  },
  {
    name: "email",
    placeholder: "Enter you email",
    type: "email",
    autoComplete: "userName",
  },
  {
    name: "phone",
    placeholder: "Phone number",
    type: "text",
  },
];

export const AddingAddressForm: IAddingAddresInput[] = [
  {
    name: "name",
    placeholder: "name address",
    type: "text",
  },
  {
    name: "details",
    placeholder: "Details Address",
    type: "text",
    autoComplete: "userName",
  },
  {
    name: "phone",
    placeholder: "Phone number",
    type: "text",
  },
  {
    name: "city",
    placeholder: "Phone number",
    type: "text",
  },
];

export const ChangePasswordForm: IChangePasswordInput[] = [
  {
    name: "currentPassword",
    placeholder: "Current Password",
    type: "password",
    autoComplete: "current-password",
  },
  {
    name: "password",
    placeholder: "New Password",
    type: "password",
    autoComplete: "new-password",
  },
  {
    name: "rePassword",
    placeholder: " Confirm Password",
    type: "password",
    autoComplete: "new-password",
  },
];

// Register input data
export const RegisterForm: IRegisterInput[] = [
  {
    name: "name",
    placeholder: "User Name",
    type: "text",
  },
  {
    name: "email",
    placeholder: "Email",
    type: "email",
    autoComplete: "userName",
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
    autoComplete: "current-password",
  },
  {
    name: "rePassword",
    placeholder: "Confirm Password",
    type: "password",
    autoComplete: "current-password",
  },
];

// reset password data
export const ResetPasswordForm: IResetPasswordInput[] = [
  {
    name: "email",
    placeholder: "Email address",
    type: "email",
    autoComplete: "userName",
  },
  {
    name: "newPassword",
    placeholder: "New Password",
    type: "password",
    autoComplete: "current-password",
  },
];

// navbar
export const settings: ISettings[] = [
  {
    name: "cart",
    path: "/cart",
    icon: ShoppingCartIcon,
  },
  {
    name: "wish List",
    path: "/wishList",
    icon: FavoriteBorderIcon,
  },
  {
    name: "Orders",
    path: "/allorders",
    icon: ListAltIcon,
  },
  {
    name: "Update Account",
    path: "/update_account",
    icon: AccountCircleIcon,
  },
  {
    name: "Change Password",
    path: "/change_my_password",
    icon: LockResetIcon,
  },
];

// home
// images slider
export const images: string[] = [img1, img2, img3];

// cookies key
export const cookiesUserDataKey: string = "UserData";

// cart data
// table head

export const tableHeading: string[] = [
  "Image",
  "Product",
  "Qty",
  "Price",
  "Action",
];

// data input create order
export const createOrderForm: ICreateOrderInput[] = [
  {
    name: "details",
    placeholder: "Enter Your Details Address",
    type: "text",
  },
  {
    name: "phone",
    placeholder: "Enter Your Phone",
    type: "text",
  },
  {
    name: "city",
    placeholder: "Enter Your City",
    type: "text",
  },
];

// url navigate in payment

export const urlNavigate: string = "https://e-commerce-app-type-script.vercel.app/";
