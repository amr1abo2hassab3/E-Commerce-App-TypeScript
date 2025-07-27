import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import { getUserColorSystem } from "./lib/utils";
import { ToastContainer } from "react-toastify";

function App() {
  getUserColorSystem();
  return (
    <main className="dark:bg-dark">
      <RouterProvider router={router} />
      <ToastContainer />
    </main>
  );
}

export default App;
