import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      {" "}
      <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-slate-100 flex flex-col gap-4 p-3 max-w-lg w-full rounded-lg">
          <h1 className="text-center text-2xl font-semibold">SignUp Form</h1>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="p-3 rounded-lg outline-none"
            />
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
              Sign Up
            </button>
          </form>

          <p className="text-slate-500">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-slate-700">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
