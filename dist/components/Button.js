"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.string.starts-with.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import "./styles/_button.scss";

const hexToRGB = hex => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return "".concat(r, ", ").concat(g, ", ").concat(b);
};
const Button = props => {
  const {
    text = "CONTAINED",
    variant = "contained",
    disabled = false,
    backgroundColor = "",
    textColor = "",
    size = "medium",
    startIcon = false,
    endIcon = false
  } = props;
  const hoverColor = textColor.startsWith("#") ? hexToRGB(textColor) : "0, 0, 0"; // Set hover color based on textColor prop

  return /*#__PURE__*/_react.default.createElement("button", {
    className: "button-component --".concat(variant, " ").concat(disabled ? "--disabled" : "", " --").concat(size, " ").concat((startIcon || endIcon) && "--haveIcon"),
    style: {
      backgroundColor: backgroundColor,
      color: textColor,
      borderColor: variant === "outline" ? textColor : "",
      "--hover-text-variant-bgColor": hoverColor
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, startIcon), /*#__PURE__*/_react.default.createElement("span", null, text), /*#__PURE__*/_react.default.createElement("div", null, endIcon));
};
var _default = Button;
exports.default = _default;