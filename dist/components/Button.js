"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import "./styles/_button.scss";

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
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "button-component --".concat(variant, " --").concat(disabled ? "disabled" : "", " --").concat(size),
    style: {
      backgroundColor: backgroundColor,
      color: textColor
    }
  }, startIcon, text, endIcon);
};
var _default = Button;
exports.default = _default;