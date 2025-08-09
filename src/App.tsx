import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import { getUserColorSystem } from "./lib/utils";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTokenFromCookie } from "./app/features/global";
import CookieServices from "./Services/CookieServices";
import { cookiesUserDataKey } from "./data";

function App() {
  getUserColorSystem();
  // check if user is login or not
  const dispatch = useDispatch();
  useEffect(() => {
    const token = CookieServices.get(cookiesUserDataKey);
    if (token) {
      dispatch(setTokenFromCookie(token));
    }
  }, []);

  return (
    <main className="dark:bg-dark">
      <RouterProvider router={router} />
      <ToastContainer />
    </main>
  );
}

export default App;
