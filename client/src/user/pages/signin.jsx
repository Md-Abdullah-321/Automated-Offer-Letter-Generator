import { useState } from "react";
import { Link } from "react-router-dom";

const init = {
  email: "",
  password: "",
};
function SignIn() {
  const [formData, setFormData] = useState({ ...init });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const url = "/api/user/signin";
    const requestData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email.trim(),
        password: formData.password.trim(),
      }),
    };

    try {
      const response = await fetch(url, requestData);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-slate-100 flex flex-col gap-4 p-3 max-w-lg w-full rounded-lg">
        <h1 className="text-center text-2xl font-semibold">SignIn Form</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="p-3 rounded-lg outline-none"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
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
