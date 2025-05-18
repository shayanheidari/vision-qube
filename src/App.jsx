import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="md:bg-gray-100 md:py-[100px] md:px-[250px] h-screen w-screen"> */}
      <Navbar />
      <ComingSoon />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
