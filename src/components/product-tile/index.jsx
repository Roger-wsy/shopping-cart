import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }
  return (
    <div>
      <div className="group flex flex-col item-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-hover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-large">
            {product?.title}
          </h1>
        </div>
        <div>
          <h1 className="flex items-center justify-center w-full mt-5">
            <button
              onClick={
                cart.some((item) => item.id === product.id)
                  ? handleRemoveFromCart
                  : handleAddToCart
              }
              className="bg-red-950 text-white border-2 border-red-950 rounded-xl p-2 w-[250px] font-bold"
            >
              {cart.some((item) => item.id === product.id)
                ? "Remove From Cart"
                : "Add to Cart"}
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
}
