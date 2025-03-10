/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Ae } from "../../icons/Ae";
import { De1 } from "../../icons/De1";
import { Es1 } from "../../icons/Es1";
import { Gb5 } from "../../icons/Gb5";
import { Gb11 } from "../../icons/Gb11";
import { Ru1 } from "../../icons/Ru1";
import "./style.css";

export const LanguageSwitcher = ({ state, mode, className }) => {
  return (
    <div
      className={`language-switcher state-0-${state} mode-0-${mode} ${className}`}
    >
      {["default", "hover"].includes(state) && (
        <Gb5 className="instance-node-2" />
      )}

      {state === "pressed" && (
        <>
          <Gb11 className="instance-node-2" />
          <Ae className="instance-node-2" />
          <Es1 className="instance-node-2" />
          <Ru1 className="instance-node-2" />
          <De1 className="instance-node-2" />
        </>
      )}
    </div>
  );
};

LanguageSwitcher.propTypes = {
  state: PropTypes.oneOf(["pressed", "hover", "default"]),
  mode: PropTypes.oneOf(["dark", "light"]),
};
