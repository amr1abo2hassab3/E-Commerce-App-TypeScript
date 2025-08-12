import { AxiosError } from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { changePassowrdSchema, updateAccountSchema } from "../validation";
import type {
  IApiError,
  IChangePassowrdValues,
  IResponse,
} from "../interfaces";
import Div from "../components/ui/Div";
import Heading from "../components/ui/Heading";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import Paragraph from "../components/ui/Paragraph";
import Form from "../components/ui/Form";
import { ChangePasswordForm, cookiesUserDataKey } from "../data";
import Button from "../components/ui/Button";
import Span from "../components/ui/Span";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import InputErroMessage from "../components/ui/InputErroMessage";
import Input from "../components/ui/Input";
import axiosInstance from "../config/axios.config";
import CookieServices from "../Services/CookieServices";
const userData: IResponse = CookieServices.get(cookiesUserDataKey);

export const ChangeMyPasswordPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const initialValues: IChangePassowrdValues = {
    currentPassword: "",
    password: "",
    rePassword: "",
  };

  const handleUpdateData = async (values: IChangePassowrdValues) => {
    setIsLoading(true);
    const request = axiosInstance.put(
      `/api/v1/users/changeMyPassword`,
      values,
      {
        headers: { token: userData?.token },
      }
    );
    try {
      await toast.promise(
        request,
        {
          pending: "changing password...",
          success: "password changed successfully! ✈",
          error: "Failed To change password ❌",
        },
        { autoClose: 5000 }
      );
      setErrorMessage("");
      resetForm();
    } catch (err) {
      console.log(err);
      const error = err as AxiosError<IApiError>;
      toast.error(
        `${error.response?.data.errors?.msg} ( ${error.response?.data.errors?.value} )`
      );
      setErrorMessage(
        `${error.response?.data.errors?.msg} ( ${error.response?.data.errors?.value} )`
      );
    } finally {
      setIsLoading(false);
    }
  };
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    resetForm,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: changePassowrdSchema,
    onSubmit: handleUpdateData,
  });

  // render
  const renderInput = ChangePasswordForm.map((input) => (
    <label htmlFor={input.name} key={input.name}>
      <Paragraph className="font-bold text-slate-700 pb-2 capitalize dark:text-gray-200">
        {input.name}
      </Paragraph>
      <Input
        value={values[input.name]}
        onChange={handleChange}
        onBlur={handleBlur}
        id={input.name}
        name={input.name}
        type={input.type}
        autoComplete={input.autoComplete}
        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue hover:shadow dark:bg-gray-700 dark:border-gray-600"
        placeholder="Enter name..."
      />
      {errors[input.name] && touched[input.name] && (
        <InputErroMessage msg={errors[input.name]} role="alert" />
      )}
    </label>
  ));

  return (
    <Div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 dark:bg-gray-800 dark:text-white dark:shadow-gray-700">
      <Heading as="h1" className="text-4xl font-semibold capitalize">
        Change Your Password <EditSquareIcon />
      </Heading>
      <Paragraph className="text-slate-500 font-bold dark:text-gray-300">
        Fill up the form to Change Your Password
      </Paragraph>

      {errorMessage && (
        <InputErroMessage
          msg={errorMessage}
          className="text-red-600 text-xl text-center py-5 font-bold mt-3 dark:text-red-400"
        />
      )}

      <Form className="my-10" onSubmit={handleSubmit} autoComplete="off">
        <Div className="flex flex-col space-y-5">
          {renderInput}
          <Button
            type="submit"
            className="w-full py-3 font-medium cursor-pointer text-white bg-blue duration-200 hover:bg-blue rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center 
          hover:scale-105 transition-all dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <Span className="font-bold capitalize">Update Data</Span>
                <EditSquareIcon />{" "}
              </>
            )}
          </Button>
        </Div>
      </Form>
    </Div>
  );
};
