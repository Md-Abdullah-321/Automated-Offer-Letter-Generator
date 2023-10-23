import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-slate-100 flex flex-col gap-4 p-3 max-w-lg w-full rounded-lg">
        <h1 className="text-center text-2xl font-semibold">SignIn Form</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="p-3 rounded-lg outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="p-3 rounded-lg outline-none"
          />
          <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95">
            Sign In
          </button>
        </form>
        <p className="text-slate-500">
          Don't have any account?{" "}
          <Link to="/sign-up" className="text-slate-700">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
