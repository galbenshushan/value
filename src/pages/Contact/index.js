import React from "react";
import { useNavigate } from "react-router-dom";
import DynamicButton from "../../components/Button/Button";
// import DynamicButton from "../components/Button/Button";
const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <DynamicButton
        onClick={() => {
          navigate("/");
        }}
        title={"button"}
      />
    </div>
  );
};

export default Contact;
