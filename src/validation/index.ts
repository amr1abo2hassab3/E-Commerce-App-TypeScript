import * as Yup from "yup";


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
    password: Yup.string()
      .required("Password is required !")
      .min(6, "The password must contain at least 6 characters.")
      .max(15, "The password must contain no more than 15 characters."),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "The password does not match !")
      .required("Password confirmation is required. !"),
  });

export const loginSchema =  Yup.object().shape({
    email: Yup.string().required("Email is required!").email("Invalid email"),
    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password must be at least 6 characters.")
      .max(15, "Password must be no more than 15 characters."),
});
  
export const sentSchema =  Yup.object().shape({
    email: Yup.string().required("Email is required!").email("Invalid email"),
  });
