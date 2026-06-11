import Navbar from "./components/NavbarNew";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";







function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
        


      </div>




      <Footer />
    </div>
  );
}

export default App;



{/*import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Navbar />
      
    </div>
  );
}

*/}