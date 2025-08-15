import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import { getUserColorSystem } from "./lib/utils";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setCountWishList,
  setJwtDecode,
  setProductsIdFavorite,
  setTokenFromCookie,
} from "./app/features/global";
import CookieServices from "./Services/CookieServices";
import { cookiesUserDataKey } from "./data";
import useGetDataQuery from "./hooks/useGetDataQuery";
import type { ProductWishListResponse } from "./interfaces/productsInterfaces";
import type { IResponse, JWtDecode } from "./interfaces";
import { jwtDecode } from "jwt-decode";

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
    enabled: !!userData?.token,
  });

  const countWishlist = data?.count || 0;
  const productsIdFavorite = data?.data.map((product) => product._id);

  useEffect(() => {
    const token: IResponse = CookieServices.get(cookiesUserDataKey);
    if (token) {
      const decoded: JWtDecode = jwtDecode(token.token);
      dispatch(setTokenFromCookie(token));
      dispatch(setJwtDecode(decoded));
    }
  }, []);

  useEffect(() => {
    if (data && productsIdFavorite) {
      dispatch(setProductsIdFavorite(productsIdFavorite));
      dispatch(setCountWishList(countWishlist));
      dispatch(setCountWishList(data.count));
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
