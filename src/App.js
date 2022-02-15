import { Routes, Route } from "react-router-dom";
import "./App.css";
import Customch from "./pages/Customch";
import Threech from "./pages/Threech";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="three" element={<Threech />} />
        <Route path="custom" element={<Customch />} />
      </Routes>
    </>
  );
};

export default App;
