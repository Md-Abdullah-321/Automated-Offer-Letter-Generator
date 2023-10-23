import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full py-3 px-4 bg-slate-50">
      <ul className="flex justify-end gap-6 items-center">
        <Link to="/">
          <li className="hover:border-b-2 p-2 hover:text-slate-700 cursor-pointer">
            Home
          </li>
        </Link>

        <Link to="/about">
          <li className="hover:border-b-2 p-2 hover:text-slate-700 cursor-pointer">
            About Us
          </li>
        </Link>
        <Link to="/sign-in">
          <li className="hover:border-b-2 p-2 hover:text-slate-700 cursor-pointer">
            Sign In
          </li>
        </Link>
        <Link to="/sign-up">
          <li className="hover:border-b-2 p-2 hover:text-slate-700 cursor-pointer">
            Sign Up
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
