import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type {
  IApiError,
  IResetPasswordInput,
  IRestPasswordValues,
} from "../interfaces";
import axiosInstance from "../config/axios.config";
import type { AxiosError } from "axios";
import { resetPasswordSchema } from "../validation";
import Div from "../components/ui/Div";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import InputErroMessage from "../components/ui/InputErroMessage";
import Button from "../components/ui/Button";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { ResetPasswordForm } from "../data";

export const ResetPassword = () => {
  // States
  const [isLoading, setIsLoading] = useState<boolean>(false); // loading state
  const [messageError, setMessageError] = useState<string | undefined>(""); // error message
  const navigate = useNavigate(); // navigation hook

  // Function to send reset password request
  const handleSendEmail = async (values: IRestPasswordValues) => {
    setIsLoading(true); // Start loading

    const request = axiosInstance.put(`/api/v1/auth/resetPassword`, values);

    try {
      // Show toast while waiting
      await toast.promise(
        request,
        {
          pending: "Reseting password 🔑",
          success: "Password reseted successfuly 🔑 🎉",
          error: "Error ❌",
        },
        { autoClose: 1500 }
      );
      setMessageError(""); // Clear previous error
      navigate("/login"); // Redirect to login page
    } catch (error) {
      // Catch and show error
      const err = error as AxiosError<IApiError>;
      setMessageError(err?.response?.data?.message);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Formik form management
  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: { email: "", newPassword: "" }, // Initial form values
      validationSchema: resetPasswordSchema, // Validation schema
      onSubmit: handleSendEmail, // On submit callback
    });

  // Render dynamic inputs based on config array
  const renderInput = ResetPasswordForm.map((input: IResetPasswordInput) => (
    <label key={input.name} htmlFor={input.name}>
      <Paragraph className="text-slate-700 dark:text-gray-200 pb-2 font-semibold">
        {input.placeholder}
      </Paragraph>
      <Input
        value={values[input.name]} // Input value from Formik
        onBlur={handleBlur} // Formik blur handler
        onChange={handleChange} // Formik change handler
        id={input.name}
        name={input.name}
        type={input.type}
        className="w-full py-3 border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-3 focus:outline-none focus:border-slate-500 dark:focus:border-gray-400 hover:shadow"
        placeholder={input.placeholder}
      />
      {/* Show validation error */}
      {touched[input.name] && errors[input.name] && (
        <InputErroMessage msg={errors[input.name]} />
      )}
    </label>
  ));

  // JSX UI
  return (
    <Div className="max-w-lg mx-auto my-10 bg-white dark:bg-gray-900 p-8 rounded-xl shadow shadow-slate-300 dark:shadow-gray-700">
      <Heading
        as="h1"
        className="text-4xl text-dark dark:text-blue font-extrabold"
      >
        Reset password
      </Heading>
      <Paragraph className="text-slate-500 dark:text-gray-300 font-bold mt-3">
        Fill up the form to reset the password
      </Paragraph>
      {messageError && (
        <Paragraph className="font-bold mt-3 capitalize text-red-600 dark:text-red-400 text-xl pt-4 text-center">
          {messageError}
        </Paragraph>
      )}

      <Form className="my-10" onSubmit={handleSubmit}>
        <Div className="flex flex-col space-y-5">
          {renderInput}
          <Button
            type="submit"
            className="w-full cursor-pointer py-3 font-bold  text-white bg-blue-400 duration-300 hover:bg-blue rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
                <span>Reset password</span>
              </>
            )}
          </Button>
        </Div>
      </Form>
    </Div>
  );
};
