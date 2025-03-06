import Header from "./components/Header/header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from ".././src/components/pages/About/index";
import { useState } from "react";
function App() {
  // const [count, setCount] = useState(0);
  // const counter = () => {
  //   setCount((prev) => prev + 1);// 1
  //   setCount((prev) => prev + 1);//1 + 1 =2
  //   setCount((prev) => prev + 1);// 2 +1 = 3
  //   setCount((prev) => prev + 1);//3 + 1 = 4
  // };
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      {/* <h1>Count: {count}</h1>
      <button onClick={counter}>Increase by 4</button> */}
    </div>
  );
}

export default App;
