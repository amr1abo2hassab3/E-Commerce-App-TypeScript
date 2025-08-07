import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { clearCart } from "../../app/features/CartSlice/actions/clearCart";
import { toast } from "react-toastify";

const useClearCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  return async () => {
    const resultAction = dispatch(clearCart());
    await toast.promise(
      resultAction,
      {
        pending: "Clearing cart...",
        success: "Cart cleared successfully!",
        error: "Failed to clear the cart.",
      },
      { autoClose: 1500 }
    );
  };
};

export default useClearCart;
