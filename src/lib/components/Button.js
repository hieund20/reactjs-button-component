import React from "react";
// import "./styles/_button.scss";

const hexToRGB = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

const Button = (props) => {
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

  const hoverColor = textColor.startsWith("#")
    ? hexToRGB(textColor)
    : "0, 0, 0"; // Set hover color based on textColor prop

  return (
    <button
      className={`button-component --${variant} ${
        disabled ? "--disabled" : ""
      } --${size} ${(startIcon || endIcon) && "--haveIcon"}`}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        borderColor: variant === "outline" ? textColor : "",
        "--hover-text-variant-bgColor": hoverColor,
      }}
    >
      <div>{startIcon}</div>
      <span>{text}</span>
      <div>{endIcon}</div>
    </button>
  );
};

export default Button;
