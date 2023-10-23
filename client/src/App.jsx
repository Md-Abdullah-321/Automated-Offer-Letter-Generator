import { Route, Routes } from "react-router-dom";
import About from "./user/pages/about";
import UserDashboard from "./user/pages/home";
import SignIn from "./user/pages/signin";
import SignUp from "./user/pages/signup";
import Footer from "./user/utils/footer";
import Navbar from "./user/utils/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
