/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ToggleBase } from "../ToggleBase";
import "./style.css";

export const Switcher = ({
  pressed,
  size,
  text,
  supportingText,
  state,
  mode,
  className,
  textClassName,
  text1 = "Remember me",
  toggleBasePressedTrueSizeMdClassName,
}) => {
  return (
    <div className={`switcher text-${text} size-0-${size} ${className}`}>
      {state === "default" && !pressed && size === "sm" && text && (
        <div className={`text mode-${mode} ${textClassName}`}>{text1}</div>
      )}

      {(!text || mode === "light") && (
        <ToggleBase
          buttonClassName="instance-node"
          className={`${pressed && state === "focus" && "class"} ${pressed && ["default", "hover"].includes(state) && "class-2"} ${((mode === "light" && size === "sm" && state === "disabled") || (!pressed && size === "md" && state === "default") || (size === "md" && state === "disabled")) && "class-3"} ${mode === "light" && state === "focus" && !pressed && "class-4"} ${mode === "light" && state === "hover" && !pressed && "class-5"} ${state === "default" && !pressed && size === "sm" && text && toggleBasePressedTrueSizeMdClassName} ${((mode === "dark" && !pressed && state === "default") || (mode === "dark" && !pressed && state === "hover") || (mode === "dark" && state === "disabled")) && "toggle-base-instance"} ${state === "focus" && mode === "dark" && !pressed && "class-6"} ${state === "default" && !pressed && mode === "light" && size === "sm" && !text && "class-7"}`}
          pressed={!pressed ? false : true}
          size={size === "sm" ? "sm" : "md"}
          state={
            state === "hover"
              ? "hover"
              : state === "default"
                ? "default"
                : state === "disabled"
                  ? "disabled"
                  : "focus"
          }
          theme="dark"
        />
      )}

      {mode === "dark" && text && (
        <div className="toggle-base-wrapper">
          <ToggleBase
            buttonClassName="instance-node"
            className="toggle-base-instance"
            pressed={false}
            size="sm"
            state="hover"
            theme="dark"
          />
        </div>
      )}

      {((!pressed && size === "md" && state === "default" && text) ||
        (pressed && state === "default" && text) ||
        (state === "disabled" && text) ||
        (state === "focus" && text) ||
        (state === "hover" && text)) && (
        <div className="text-wrapper">{text1}</div>
      )}
    </div>
  );
};

Switcher.propTypes = {
  pressed: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm"]),
  text: PropTypes.bool,
  supportingText: PropTypes.bool,
  state: PropTypes.oneOf(["default", "disabled", "hover", "focus"]),
  mode: PropTypes.oneOf(["dark", "light"]),
  text1: PropTypes.string,
};
