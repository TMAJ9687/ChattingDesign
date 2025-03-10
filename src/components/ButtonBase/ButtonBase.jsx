/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Circle536 } from "../../icons/Circle536";
import { Circle900 } from "../../icons/Circle900";
import "./style.css";

export const ButtonBase = ({
  size,
  icon,
  className,
  textClassName,
  text = "Button CTA",
  dotClassName,
  textClassNameOverride,
  circle536Color = "white",
  dotClassNameOverride,
  circle536Stroke = "white",
  circle536Color1 = "white",
  override = <Circle536 className="circle" color={circle536Color1} />,
  circle900Color = "white",
  circle900Stroke = "white",
}) => {
  return (
    <div className={`button-base size-2-${size} ${icon} ${className}`}>
      {icon === "only" && <>{override}</>}

      {["false", "trailing"].includes(icon) && (
        <div
          className={`text-6 ${icon === "trailing" ? dotClassNameOverride : (icon === "false") ? textClassName : undefined}`}
        >
          {text}
        </div>
      )}

      {((icon === "leading" && size === "lg") ||
        (icon === "leading" && size === "md") ||
        (icon === "leading" && size === "sm") ||
        (icon === "leading" && size === "xl") ||
        (icon === "trailing" && size === "lg") ||
        (icon === "trailing" && size === "md") ||
        (icon === "trailing" && size === "sm") ||
        (icon === "trailing" && size === "xl")) && (
        <Circle536
          className="circle"
          color={icon === "leading" ? circle536Color : circle536Stroke}
        />
      )}

      {size === "two-xl" && ["leading", "trailing"].includes(icon) && (
        <Circle900
          className="circle-900"
          color={icon === "trailing" ? circle900Stroke : circle900Color}
        />
      )}

      {icon === "dot" && (
        <div className={`dot-wrapper ${dotClassNameOverride}`}>
          <div className={`dot-2 ${dotClassName}`} />
        </div>
      )}

      {["dot", "leading"].includes(icon) && (
        <div className={`text-7 ${textClassNameOverride}`}>{text}</div>
      )}
    </div>
  );
};

ButtonBase.propTypes = {
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  icon: PropTypes.oneOf(["only", "leading", "false", "dot", "trailing"]),
  text: PropTypes.string,
  circle536Color: PropTypes.string,
  circle536Stroke: PropTypes.string,
  circle536Color1: PropTypes.string,
  circle900Color: PropTypes.string,
  circle900Stroke: PropTypes.string,
};
