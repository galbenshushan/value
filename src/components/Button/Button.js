import React from "react";
import Button from "@mui/material/Button";

const DynamicButton = ({ onClick = () => {}, title = "" }) => {
  return <button onClick={onClick} className="single-button">{title}</button>;
};

export default DynamicButton;
