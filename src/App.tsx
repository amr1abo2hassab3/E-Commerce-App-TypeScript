import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import { getUserColorSystem } from "./lib/utils";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setCountWishList,
  setProductsIdFavorite,
  setTokenFromCookie,
} from "./app/features/global";
import CookieServices from "./Services/CookieServices";
import { cookiesUserDataKey } from "./data";
import useGetDataQuery from "./hooks/useGetDataQuery";
import type { ProductWishListResponse } from "./interfaces/productsInterfaces";
import type { IResponse } from "./interfaces";
const userData: IResponse = CookieServices.get(cookiesUserDataKey) || null;

function App() {
  getUserColorSystem();
  // check if user is login or not
  const dispatch = useDispatch();

  // handler
  const { data } = useGetDataQuery<ProductWishListResponse>({
    queryKey: ["getAllWishlistProducts"],
    url: "/api/v1/wishlist",
    config: {
      headers: {
        token: userData?.token,
      },
    },
  });

  const countWishlist = data?.count || 0;
  const productsIdFavorite = data?.data.map((product) => product._id);

  useEffect(() => {
    const token = CookieServices.get(cookiesUserDataKey);
    if (token) {
      dispatch(setTokenFromCookie(token));
    }
  }, []);

  useEffect(() => {
    if (data && productsIdFavorite) {
      dispatch(setProductsIdFavorite(productsIdFavorite));
      dispatch(setCountWishList(countWishlist));
    }
  }, [data]);

  return (
    <main className="dark:bg-dark">
      <RouterProvider router={router} />
      <ToastContainer />
    </main>
  );
}

export default App;
