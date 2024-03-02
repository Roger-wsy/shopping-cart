import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div>
            <h1 className=" text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              React Redux Shopping Cart
            </h1>
          </div>
        </Link>
        <ul className="flex items-center space-x-6 text-gray-800 font-semibold ">
          <Link to={"/"}>
            <li className="cursor-pointer list-none p-5">Home</li>
          </Link>
          <Link to={"/cart"}>
            <li className="cursor-pointer p-5 ">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
