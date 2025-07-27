import { Link, useNavigate } from "react-router-dom";
import type { IRegisterInput, IRegisterValues } from "../interfaces";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import { registerSchema } from "../validation";
import InputErrorMessage from "../components/ui/InputErroMessage";
import Button from "../components/ui/Button";
import { Alert } from "@mui/material";
import Input from "../components/ui/Input";
import { toast } from "react-toastify";
import { userRegister } from "../app/features/RegisterSlice";
import { RegisterForm } from "../data";
import Form from "../components/ui/Form";
import Heading from "../components/ui/Heading";
import Div from "../components/ui/Div";
import LoadingSpinner from "../components/ui/LoadingSpinner";

// import { toast } from "react-toastify";

const RegisterPage = () => {
  // state or hooks
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.register);

  const initialValues: IRegisterValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  };

  // handler
  // Function to handle the Register process
  const handleRegister = async (values: IRegisterValues) => {
    // Dispatch the Register action with user credentials and wait for the result
    const resultAction = await dispatch(userRegister(values));

    // Check if the Register request was fulfilled successfully
    if (userRegister.fulfilled.match(resultAction)) {
      // Show a success toast message to the user
      toast.success("Register successful! Redirecting in 3 seconds to login", {
        autoClose: 3000,
      });
      // navigate user into login page after 3 seconds to reflect login state
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      onSubmit: handleRegister,
      validationSchema: registerSchema,
    });

  // render
  const renderInput = RegisterForm.map((input: IRegisterInput) => (
    <div className="!mb-10" key={input.name}>
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
    </div>
  ));

  return (
    <Div className="flex items-start  justify-center p-4">
      <Div className="max-w-[600px] w-full bg-white dark:bg-dark rounded-xl shadow-2xl p-8">
        <Heading className="text-2xl font-bold text-dark dark:text-light mb-6 text-center">
          Sign Up
        </Heading>
        {error?.message && (
          <Alert sx={{ fontWeight: "bold" }} severity="error">
            {error?.message}
          </Alert>
        )}
        <Form className="" onSubmit={handleSubmit}>
          {renderInput}

          <Button
            type="submit"
            className="w-full min-h-11 flex items-center justify-center bg-blue duration-300 hover:bg-blue-700 cursor-pointer text-white font-medium py-2.5 rounded-lg transition-colors dark:bg-blue dark:hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : "Sign Up"}
          </Button>
        </Form>

        <Div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 font-bold">
          Already have an account?
          <Link
            to={"/login"}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-medium"
          >
            {" "}
            login here
          </Link>
        </Div>
      </Div>
    </Div>
  );
};

export default RegisterPage;
