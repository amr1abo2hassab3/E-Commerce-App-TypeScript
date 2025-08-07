import { useState } from "react";
import Heading from "../components/ui/Heading";
import Div from "../components/ui/Div";
import Paragraph from "../components/ui/Paragraph";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { cookiesUserDataKey, createOrderForm, urlNavigate } from "../data";
import { useFormik } from "formik";
import type { ICreateOrderValues, IResponse } from "../interfaces";
import InputErroMessage from "../components/ui/InputErroMessage";
import axiosInstance from "../config/axios.config";
import CookieServices from "../Services/CookieServices";
import { toast } from "react-toastify";
import { createOrderSchema } from "../validation";
import { useNavigate } from "react-router-dom";
import type {
  CartResponse,
  ResponsePayment,
} from "../interfaces/cartInterfaces";
import useGetDataQuery from "../hooks/useGetDataQuery";

const CreateOrder = () => {
  // state or hooks
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [byCash, setByCash] = useState(true);
  const userData: IResponse = CookieServices.get(cookiesUserDataKey);
  const navigate = useNavigate();
  const { data: dataCart, refetch } = useGetDataQuery<CartResponse>({
    queryKey: ["getAllDataCart"],
    url: "/api/v1/cart",
    config: {
      headers: {
        token: userData?.token,
      },
    },
  });

  const initialValues: ICreateOrderValues = {
    details: "",
    city: "",
    phone: "",
  };
  // handler
  const createCachOrder = async (values: ICreateOrderValues) => {
    if (dataCart?.numOfCartItems) {
      setIsLoading(true);
      try {
        const res = axiosInstance.post(
          `/api/v1/orders/${dataCart?.cartId}`,
          { shippingAddress: values },
          {
            headers: {
              token: userData.token,
            },
          }
        );
        await toast.promise(
          res,
          {
            pending: "Creating Cach Order...",
            success: "Order created successfully! ✈",
            error: "Failed To Create This Order! ❌",
          },
          { autoClose: 3000 }
        );
        await setTimeout(() => {
          navigate("/allorders");
        }, 2000);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error("Your Cart Is Empity Go to add product in Your Cart");
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    }
  };
  const createCheckOutOrder = async (values: ICreateOrderValues) => {
    if (dataCart?.numOfCartItems) {
      setIsLoading(true);
      try {
        const res = axiosInstance.post<ResponsePayment>(
          `/api/v1/orders/checkout-session/${dataCart?.cartId}?url=${urlNavigate}`,
          { shippingAddress: values },
          {
            headers: {
              token: userData.token,
            },
          }
        );
        const { data } = await toast.promise(
          res,
          {
            pending: "Creating Order...",
            success: "Go to payment",
            error: "Failed To Create This Order! ❌",
          },
          { autoClose: 5000 }
        );
        console.log(data);
        window.open(data.session.url);
        window.location.reload();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error("Your Cart Is Empity Go to add product in Your Cart");
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    }
  };
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues,
      onSubmit: (values: ICreateOrderValues) => {
        if (byCash) {
          createCachOrder(values);
        } else {
          createCheckOutOrder(values);
        }
        refetch();
      },
      validationSchema: createOrderSchema,
    });
  // render
  const renderInput = createOrderForm.map((input) => (
    <label htmlFor={input.name} key={input.name}>
      <Paragraph className=" text-dark dark:text-light pb-2 font-semibold">
        {input.placeholder}
      </Paragraph>
      <Input
        value={values[input.name]}
        onBlur={handleBlur}
        onChange={handleChange}
        id="email"
        name={input.name}
        type={input.type}
        className="w-full py-3 text-dark dark:text-light border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
        placeholder={input.placeholder}
      />
      {touched[input.name] && errors[input.name] && (
        <InputErroMessage msg={errors[input.name]} />
      )}
    </label>
  ));

  return (
    <Div className="max-w-lg w-full mx-auto my-10 bg-white dark:bg-dark p-8 rounded-xl shadow shadow-slate-300">
      <Heading
        as="h1"
        className="text-4xl text-dark dark:text-blue font-extrabold"
      >
        create order{" "}
      </Heading>
      <Paragraph className="text-dark dark:text-light font-bold mt-3">
        Fill up the form to create order{" "}
      </Paragraph>

      <Form className="my-10" onSubmit={handleSubmit}>
        <Div className="flex flex-col space-y-5">
          {renderInput}
          <Div className="flex flex-col gap-4">
            <Button
              onClick={() => setByCash(true)}
              type="submit"
              className={`w-full  py-3 font-medium ${
                dataCart?.numOfCartItems == 0
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } text-white bg-indigo-500 duration-200 hover:bg-indigo-600 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center`}
            >
              {isLoading && byCash ? <LoadingSpinner /> : "Create Order Cash"}
            </Button>

            <Button
              onClick={() => setByCash(false)}
              type="submit"
              className={`w-full py-3 font-medium ${
                dataCart?.numOfCartItems == 0
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } text-white bg-indigo-500 duration-200 hover:bg-indigo-600 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center`}
            >
              {isLoading && !byCash ? (
                <LoadingSpinner />
              ) : (
                "Payment Through Visa"
              )}
            </Button>
          </Div>
        </Div>
      </Form>
    </Div>
  );
};

export default CreateOrder;
