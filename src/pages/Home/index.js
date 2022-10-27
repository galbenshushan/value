import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getItemFromLs,
  setItemToLs,
  removeItemFromLs,
} from "../../helpers/localStorage";
import logo from "../../images/Batman-Logo.png";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    removeItemFromLs('justValue');
  }, []);

  return (
    <div>
      Home
      <button
        onClick={() => {
          navigate("/Contact");
        }}
      >
        go back to contact
      </button>
      <img src={logo} />
    </div>
  );
};

export default Home;
