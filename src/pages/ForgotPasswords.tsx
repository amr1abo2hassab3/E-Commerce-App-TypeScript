import { Link, useNavigate } from "react-router-dom";
import Div from "../components/ui/Div";
import Heading from "../components/ui/Heading";
import Form from "../components/ui/Form";
import { useFormik } from "formik";
import { sentSchema } from "../validation";
import type { IForgotValues } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import InputErrorMessage from "../components/ui/InputErroMessage";
import { userSentEmail } from "../app/features/ForgotPasswordsSlice";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Paragraph from "../components/ui/Paragraph";
import EmailIcon from "@mui/icons-material/Email";

const ForgotPasswords = () => {
  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Redux dispatch hook for async actions
  const dispatch = useDispatch<AppDispatch>();

  // Get state from Redux (email status, error, and loading)
  const { data, error, loading } = useSelector(
    (state: RootState) => state.sentEmail
  );

  // Handle form submit and send email
  const handleSendEmail = async (values: IForgotValues) => {
    // Dispatch the async thunk action with the form values
    const resultAction = await dispatch(userSentEmail(values));

    // If request is successful, navigate to the "Check Code" page after delay
    if (userSentEmail.fulfilled.match(resultAction)) {
      setTimeout(() => {
        navigate("/checkCode");
      }, 2000);
    }
  };

  // Initialize Formik for form handling
  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik({
      initialValues: { email: "" }, // initial form value
      validationSchema: sentSchema, // validation schema using Yup
      onSubmit: handleSendEmail, // what happens on form submit
    });

  return (
    <Div className="max-w-lg mx-auto my-10 bg-white dark:bg-dark p-8 rounded-xl shadow shadow-slate-300">
      <Heading
        as="h1"
        className="text-4xl text-dark dark:text-blue font-extrabold"
      >
        Reset password
      </Heading>
      <Paragraph className="text-dark dark:text-light font-bold mt-3">
        Fill up the form to reset the password
      </Paragraph>
      {data?.message && (
        <Paragraph className="text-main text-xl text-center py-5 font-bold mt-3">
          {data?.message} <EmailIcon />
        </Paragraph>
      )}

      <Form className="my-10" onSubmit={handleSubmit}>
        <Div className="flex flex-col space-y-5">
          <label htmlFor="email">
            <Paragraph className=" text-dark dark:text-light pb-2 font-semibold">
              Email address
            </Paragraph>
            <Input
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              id="email"
              name="email"
              type="email"
              className="w-full py-3 text-dark dark:text-light border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter email address"
            />
            {touched.email && errors.email && (
              <InputErrorMessage msg={errors.email} />
            )}
            {error && (
              <Paragraph className="text-red-500 text-sm font-bold p-4">
                Email is not vaild Go to{" "}
                <Link className="text-green" to={"/register"}>
                  Register now
                </Link>
              </Paragraph>
            )}
          </label>
          <Button
            type="submit"
            className="w-full py-3 cursor-pointer font-medium text-white bg-blue-400 duration-300 hover:bg-blue rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
          >
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <span className="mr-1 font-medium">Enter Email</span>
                <EmailIcon className="text-white" />
              </>
            )}
          </Button>

          <Paragraph className="text-center dark:text-light text-dark">
            Not registered yet?{" "}
            <Link
              to="/register"
              className="text-blue-400 duration-300 hover:text-blue font-medium inline-flex space-x-1 items-center"
            >
              <span className="font-bold">Register now </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </Link>
          </Paragraph>
        </Div>
      </Form>
    </Div>
  );
};

export default ForgotPasswords;
