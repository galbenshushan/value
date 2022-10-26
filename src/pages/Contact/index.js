import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      Contact
      <button
        onClick={() => {
          navigate("/");
        }}
      >lets Go to home</button>
    </div>
  );
};

export default Contact;
