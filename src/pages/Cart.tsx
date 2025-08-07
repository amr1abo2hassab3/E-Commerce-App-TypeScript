import { Link } from "react-router-dom";
import Div from "../components/ui/Div";
import Heading from "../components/ui/Heading";
import Span from "../components/ui/Span";
import Button from "../components/ui/Button";
import { cookiesUserDataKey, tableHeading } from "../data";
import useGetDataQuery from "../hooks/useGetDataQuery";
import type { CartResponse, CartValues } from "../interfaces/cartInterfaces";
import CookieServices from "../Services/CookieServices";
import RowCartItemSkeleton from "../components/skeleton/RowCartItemSkeleton";
import MessageUi from "../components/ui/MessageUi";
import useClearCart from "../hooks/Cart/useClearCart";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { removeItem } from "../app/features/CartSlice/actions/removeItem";
import { toast } from "react-toastify";
import { lazy, Suspense } from "react";

const RowCartItem = lazy(() => import("../components/RowCartItem"));

const userData = CookieServices.get(cookiesUserDataKey);

export const CartPage = () => {
  // hooks or state
  const dispatch = useDispatch<AppDispatch>();
  // handler
  const { data, isLoading, refetch } = useGetDataQuery<CartResponse>({
    queryKey: ["getAllDataCart"],
    url: "/api/v1/cart",
    config: {
      headers: {
        token: userData?.token,
      },
    },
  });
  // remove all products form cart
  const handleClearCart = useClearCart();
  // remove item from cart
  const handleRemoveItem = async (productId: CartValues) => {
    const resultAction = toast.promise(
      dispatch(removeItem(productId)),
      {
        pending: "Removing item from cart...",
        success: "Item removed successfully!",
        error: "Failed to remove the item.",
      },
      { autoClose: 1500 }
    );
    const result = await resultAction;
    if (result.type.endsWith("fulfilled")) {
      refetch();
    }
  };

  const productsCart = data?.data?.products;
  const numOfCartItems = data?.numOfCartItems;
  const totalCartPrice = data?.data.totalCartPrice;

  // render
  const renderHeadingTabels = tableHeading.map((item) => (
    <th key={item} scope="col" className="px-16 py-3">
      {item}
    </th>
  ));

  const renderProductsCart =
    productsCart &&
    productsCart.map((product) => (
      <Suspense key={product.product._id} fallback={<RowCartItemSkeleton />}>
        <RowCartItem
          key={product.product._id}
          product={product}
          handleRemoveItem={handleRemoveItem}
        />
      </Suspense>
    ));
  return (
    <Div className="container mx-auto p-5">
      {isLoading ? (
        // حالة التحميل
        <>
          <Div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>{renderHeadingTabels}</tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, i) => (
                  <RowCartItemSkeleton key={i} />
                ))}
              </tbody>
            </table>
          </Div>
        </>
      ) : productsCart && productsCart.length > 0 ? (
        // حالة وجود منتجات
        <>
          <Div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-4 mb-6 border border-gray-200 dark:border-gray-700">
            <Div className="text-center md:text-left">
              <Heading
                as="h3"
                className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2"
              >
                Your Cart (
                <Span className="text-indigo-600">{numOfCartItems}</Span> items)
              </Heading>
              <Heading
                as="h4"
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300"
              >
                Total Price:
                <Span className="text-red-600 font-semibold ml-1">
                  ${totalCartPrice}
                </Span>
              </Heading>
            </Div>

            <Div>
              <Button
                onClick={() => {
                  handleClearCart();
                  refetch();
                }}
                className="flex items-center cursor-pointer gap-2 py-2 px-4 text-sm md:text-base bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors"
              >
                Clear Cart
              </Button>
            </Div>
          </Div>

          <Div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>{renderHeadingTabels}</tr>
              </thead>
              <tbody>{renderProductsCart}</tbody>
            </table>
          </Div>
          <Link
            to="/createOrder"
            className="w-full py-3 mt-5 font-medium text-white hover:text-white bg-blue duration-200 hover:bg-indigo-600 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
          >
            <Span className="font-bold capitalize">go to create order</Span>
          </Link>
        </>
      ) : (
        // حالة الكارت فاضي
        <>
          <MessageUi heading="your cart is empty 🛒">
            <Link
              to="/products"
              className="text-center block my-2 transition-all py-3 px-4 bg-blue rounded-md text-white text-lg capitalize font-semibold"
            >
              no products in cart ❓ go to add products ➕
            </Link>
          </MessageUi>
        </>
      )}
    </Div>
  );
};
