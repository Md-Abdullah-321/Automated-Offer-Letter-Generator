import UserDashboard from "./user/pages/home";
import Footer from "./user/utils/footer";
import Navbar from "./user/utils/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <UserDashboard />
      <Footer />
    </div>
  );
}

export default App;
