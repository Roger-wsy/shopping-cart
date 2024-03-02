import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <div className="flex p-5 bg-red-500 mt-2 mb-2 rounded-xl">
      <div className="flex p-3">
        <div className="h-40 w-40">
          <img
            src={cartItem?.image}
            className="h-28 rounded-lg object-cover"
            alt={cartItem?.title}
          />
        </div>
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
          <p className="text-white font-extrabold">{cartItem?.price}</p>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white border-2 border-red-950 rounded-xl p-2 w-[250px] font-bold"
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
}
