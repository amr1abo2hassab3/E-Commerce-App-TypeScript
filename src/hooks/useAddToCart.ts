import { toast } from 'react-toastify';
import { addToCart } from '../app/features/CartSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/store';
import type { ICartValues } from '../interfaces/cartInterfaces';

const useAddToCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  return  async (value: ICartValues) => {
    const resultAction = dispatch(addToCart(value));
    await toast.promise(
      resultAction,
      {
        pending: "Adding to cart...",
        success: "Product added successfully!",
        error: "Failed to add product to cart.",
      },
      { autoClose: 1500 }
    );
  };
}

export default useAddToCart