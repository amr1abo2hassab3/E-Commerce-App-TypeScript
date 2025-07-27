import { Link } from "react-router-dom";
import { cookiesUserDataKey, LoginForm } from "../data";
import type { ILoginInput, ILoginValues } from "../interfaces";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import { loginSchema } from "../validation";
import InputErrorMessage from "../components/ui/InputErroMessage";
import { userLogin } from "../app/features/LoginSlice";
import Button from "../components/ui/Button";
import { Alert } from "@mui/material";
import Input from "../components/ui/Input";
import { useState } from "react";
import CookiesService from "../Services/CookieServices";
import { toast } from "react-toastify";
import Form from "../components/ui/Form";
import Div from "../components/ui/Div";
import Heading from "../components/ui/Heading";
import LoadingSpinner from "../components/ui/LoadingSpinner";

// import { toast } from "react-toastify";

const LoginPage = () => {
  // state or hooks
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.login);

  const initialValues: ILoginValues = {
    email: "",
    password: "",
  };

  // handler
  // Function to handle the login process
  const handleLogin = async (values: ILoginValues) => {
    // Dispatch the login action with user credentials and wait for the result
    const resultAction = await dispatch(userLogin(values));

    // Check if the login request was fulfilled successfully
    if (userLogin.fulfilled.match(resultAction)) {
      // Create a new Date instance to set the cookie expiration time
      const date = new Date();

      // Define cookie options, setting the path to root
      const options: { path: string; expires?: Date } = { path: "/" };

      // If the user selected "Remember Me"
      if (isChecked) {
        const IN_DAYS = 3; // Number of days to keep the cookie
        const EXPIRES_IN_MS = 1000 * 60 * 60 * 24 * IN_DAYS; // Convert days to milliseconds
        date.setTime(date.getTime() + EXPIRES_IN_MS); // Set the expiration date
        options.expires = date; // Add expiration date to cookie options
      }

      // Save user data in cookies with the specified options
      CookiesService.set(cookiesUserDataKey, resultAction.payload, options);

      // Show a success toast message to the user
      toast.success("Login successful! Redirecting in 3 seconds...", {
        autoClose: 3000,
      });

      // Reload the page after 3 seconds to reflect login state
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      onSubmit: handleLogin,
      validationSchema: loginSchema,
    });

  // render
  const renderInput = LoginForm.map((input: ILoginInput) => (
    <Div className="!mb-10" key={input.name}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {input.name}
      </label>
      <Input
        id={input.name}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values[input.name]}
        type={input.type}
        name={input.name}
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue focus:border-blue outline-none dark:bg-gray-800 dark:text-white"
        placeholder={input.placeholder}
        autoComplete={input.autoComplete}
      />
      {touched[input.name] && errors[input.name] && (
        <InputErrorMessage msg={errors[input.name]} />
      )}
    </Div>
  ));

  return (
    <Div className="flex items-start  justify-center p-4">
      <Div className="max-w-[600px] w-full bg-white dark:bg-dark rounded-xl shadow-2xl p-8">
        <Heading className="text-2xl font-bold text-dark dark:text-light mb-6 text-center">
          Sign In
        </Heading>
        {error?.message && (
          <Alert sx={{ fontWeight: "bold" }} severity="error">
            {error?.message}
          </Alert>
        )}
        <Form className="space-y-4" onSubmit={handleSubmit}>
          {renderInput}
          <Div className="flex items-center justify-between">
            <label className="flex items-center">
              <Input
                type="checkbox"
                name="isChecked"
                checked={isChecked}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIsChecked(e.target.checked)
                }
                className="rounded border-gray-300 dark:border-gray-600 cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                Remember me
              </span>
            </label>
            <Link
              to={"/sendemail"}
              className="text-sm text-red-600 dark:text-red-400 duration-300 hover:text-blue font-semibold"
            >
              Forgot password?
            </Link>
          </Div>
          <Button
            type="submit"
            className="w-full min-h-11 flex items-center justify-center bg-blue duration-300 hover:bg-blue-700 cursor-pointer text-white font-medium py-2.5 rounded-lg transition-colors dark:bg-blue dark:hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : "Sign In"}
          </Button>
        </Form>

        <Div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 font-bold">
          Don't have an account?
          <Link
            to={"/register"}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-medium"
          >
            {" "}
            Sign up
          </Link>
        </Div>
      </Div>
    </Div>
  );
};

export default LoginPage;
