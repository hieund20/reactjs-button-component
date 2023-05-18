import React from "react";
import "./styles/buttonStyle.css";

const ButtonComponent = (props) => {
  const {
    text = "CONTAINED",
    variant = "contained",
    disabled = false,
    backgroundColor = "",
    textColor = "",
    size = "medium",
    startIcon = false,
    endIcon = false,
  } = props;

  return (
    <button
      className={`button-component --${variant} --${
        disabled ? "disabled" : ""
      } --${size}`}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
};

export default ButtonComponent;
