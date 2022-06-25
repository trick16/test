import { Routes, Route } from "react-router-dom";
import "./App.css";
import Customch from "./pages/Customch";
import Threech from "./pages/Threech";
import TestUtils from "./pages/TestUtils";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="three" element={<Threech />} />
        <Route path="custom" element={<Customch />} />
        <Route path="utils" element={<TestUtils />} />
      </Routes>
    </>
  );
};

export default App;
