/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ToggleBase = ({
  pressed,
  size,
  theme,
  state,
  className,
  buttonClassName,
}) => {
  return (
    <div
      className={`toggle-base ${size} ${state} pressed-${pressed} ${theme} ${className}`}
    >
      <div className={`div ${buttonClassName}`} />
    </div>
  );
};

ToggleBase.propTypes = {
  pressed: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm"]),
  theme: PropTypes.oneOf(["dark", "light"]),
  state: PropTypes.oneOf(["default", "disabled", "hover", "focus"]),
};
