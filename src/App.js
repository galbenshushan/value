import "./App.css";
// import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import { AnyContext } from "./store/globalContext/AnyContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  const [anyState, setAnyState] = useContext(AnyContext);

  useEffect(() => {
    console.log('');
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Home />}>
            {/* <Route index element={<Home />} /> */}

            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
