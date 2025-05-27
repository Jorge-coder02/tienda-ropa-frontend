import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function useAddToCart() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (objeto_prod) => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 1500);
    dispatch(addToCart(objeto_prod));
  };

  return { addedToCart, handleAddToCart };
}
