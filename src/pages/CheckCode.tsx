import { useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../components/ui/Form";
import Heading from "../components/ui/Heading";
import Div from "../components/ui/Div";
import Paragraph from "../components/ui/Paragraph";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import axiosInstance from "../config/axios.config";
import EmailIcon from "@mui/icons-material/Email";
import type { AxiosError } from "axios";
import type { IApiError } from "../interfaces";
import LoadingSpinner from "../components/ui/LoadingSpinner";

export const CheckCode = () => {
  // State to store the entered OTP
  const [otp, setOtp] = useState<string>("");

  // Loading state while verifying
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Error message if code is invalid
  const [messageError, setMessageError] = useState<string | undefined>("");

  // React Router hook to navigate programmatically
  const navigate = useNavigate();

  // Function to verify the reset code
  const handleCheckCode = async () => {
    setIsLoading(true);

    const request = axiosInstance.post(`/api/v1/auth/verifyResetCode`, {
      resetCode: otp,
    });

    try {
      // Show toast notification based on request status
      await toast.promise(
        request,
        {
          pending: "Checking pin code..",
          success: "Reset code is valid 🎉",
          error: "Reset code is invalid or has expired❌",
        },
        { autoClose: 1500 }
      );

      // Clear error message and navigate to reset password page
      setMessageError("");
      navigate("/resetPassword");
    } catch (error) {
      // Handle error and display message
      const err = error as AxiosError<IApiError>;
      if (err) setMessageError(err.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Update OTP value when user types
  const handleChange = (value: string) => {
    setOtp(value);
  };

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
      <Paragraph className="text-main text-xl text-center py-5 font-bold mt-3">
        Reset code sent to your email <EmailIcon />
      </Paragraph>
      <Form
        className="my-10"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleCheckCode();
        }}
      >
        <Div className="flex flex-col space-y-5">
          <Div className="text-center flex flex-col items-center">
            <Heading className="font-semibold text-xl p-4 dark:text-light  text-dark">
              Enter your pin code
            </Heading>
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              renderSeparator={<span></span>}
              renderInput={(props, index: number) => (
                <Input
                  {...props}
                  style={{
                    width: "4rem",
                    height: "4rem",
                    fontSize: "1.5rem",
                    textAlign: "center",
                    marginLeft: "8px",
                    border: otp[index] ? "1px solid blue" : "1px solid red",
                    borderRadius: "5px",
                    transition: "border 0.2s ease-in-out",
                  }}
                />
              )}
            />
          </Div>
          {messageError && (
            <Paragraph className="font-bold mt-3 capitalize text-red-600 text-xl pt-4 text-center">
              {messageError}
            </Paragraph>
          )}
          <Button
            type="submit"
            className="w-full cursor-pointer py-3 font-bold  text-white bg-blue-400 duration-300 hover:bg-blue rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                check code <i className="fa-solid fa-check-double ml-4"></i>
                <i className="fa-solid fa-plane-departure"></i>
              </>
            )}
          </Button>
          <Paragraph className="text-center dark:text-light  text-dark">
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
