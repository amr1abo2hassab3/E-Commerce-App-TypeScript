import * as Yup from "yup";

const email = Yup.string().required("Email is required!").email("Invalid email");
const password = Yup.string()
  .required("Password is required!")
  .min(6, "Password must be at least 6 characters.")
  .max(15, "Password must be no more than 15 characters.");

export const registerSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[A-Z][a-zA-Z\s]{3,15}$/,
        "The name must start with an uppercase letter and be followed by 3 to 15 lowercase letters."
      )
      .required("name is required !"),
    email: Yup.string().required("email is required !").email("invalid email "),
    phone: Yup.string()
      .matches(/^(\+02)?01[0125][0-9]{8}$/, "Enter number vaild ")
      .required("phone number is required !"),
    password: password ,
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "The password does not match !")
      .required("Password confirmation is required. !"),
  });

export const loginSchema =  Yup.object().shape({
    email: Yup.string().required("Email is required!").email("Invalid email"),
    password:password ,
});
  
export const sentSchema =  Yup.object().shape({
    email,
  });

export const resetPasswordSchema = Yup.object().shape({
    email,
    newPassword: password ,
});
  
export const createOrderSchema = Yup.object().shape({
    details: Yup.string()
      .min(5, "details must be at last 5 characters")
      .required("Details is required"),
    phone: Yup.string()
      .matches(/^(\+02)?01[0125][0-9]{8}$/, "Enter number vaild ")
      .required("phone is required"),
    city: Yup.string().required("City is required"),
});
  
export const updateAccountSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[A-Z][a-zA-Z\s]{3,15}$/,
        "The name must start with an uppercase letter and be followed by 3 to 15 lowercase letters."
      )
      .required("name is required !"),
    email: Yup.string().required("email is required !").email("invalid email "),
    phone: Yup.string()
      .matches(/^(\+02)?01[0125][0-9]{8}$/, "Enter number vaild ")
      .required("phone number is required !"),
  });
export const changePassowrdSchema =  Yup.object().shape({
    currentPassword: Yup.string()
      .required("Password is required !")
      .min(6, "The password must contain at least 6 characters.")
      .max(15, "The password must contain no more than 15 characters."),
    password: Yup.string()
      .required("Password is required !")
      .min(6, "The password must contain at least 6 characters.")
      .max(15, "The password must contain no more than 15 characters."),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "The password does not match !")
      .required("Password confirmation is required. !"),
});
  
export const addressSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Z\s]{3,16}$/,
      "Name must be between 3 and 16 letters."
    )
    .required("Name is required!"),

  details: Yup.string()
    .min(5, "Details must be at least 5 characters long.")
    .max(100, "Details cannot exceed 100 characters.")
    .required("Details are required!"),

  phone: Yup.string()
    .matches(/^(\+02)?01[0125][0-9]{8}$/, "Enter a valid Egyptian phone number.")
    .required("Phone number is required!"),

  city: Yup.string()
    .matches(
      /^[a-zA-Z\s]{3,21}$/,
      "City name must be between 3 and 21 letters."
    )
    .required("City is required!"),
});
