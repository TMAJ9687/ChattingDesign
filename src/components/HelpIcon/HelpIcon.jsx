/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HelpIcon = ({ open, supportingText, tooltip, className }) => {
  return (
    <div
      className={`help-icon ${tooltip} open-${open} supporting-text-${supportingText} ${className}`}
    >
      {((open && tooltip === "left") ||
        (open && tooltip === "top-arrow") ||
        (open && tooltip === "top-left") ||
        (open && tooltip === "top-no-arrow") ||
        (open && tooltip === "top-right")) && (
        <div className="tooltip">
          {tooltip === "top-no-arrow" && (
            <div className="content-2">
              <div className="text-8">
                {!supportingText && <>This is a tooltip</>}

                {supportingText && (
                  <>
                    <div className="text-9">This is a tooltip</div>

                    <p className="p">
                      Tooltips are used to describe or identify an element. In
                      most scenarios, tooltips help the user understand the
                      meaning, function or alt-text of an element.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}

          {["left", "top-arrow", "top-left", "top-right"].includes(tooltip) && (
            <>
              <div className="content-3">
                <div className="text-10">
                  {!supportingText && <>This is a tooltip</>}

                  {supportingText && (
                    <>
                      <div className="text-9">This is a tooltip</div>

                      <p className="p">
                        Tooltips are used to describe or identify an element. In
                        most scenarios, tooltips help the user understand the
                        meaning, function or alt-text of an element.
                      </p>
                    </>
                  )}
                </div>
              </div>

              <img
                className="tooltip-2"
                alt="Tooltip"
                src={
                  supportingText && tooltip === "top-arrow"
                    ? "/img/tooltip-1.svg"
                    : tooltip === "top-right"
                      ? "/img/tooltip-2.svg"
                      : tooltip === "top-left"
                        ? "/img/tooltip-4.svg"
                        : tooltip === "left"
                          ? "/img/tooltip-10.svg"
                          : "/img/tooltip.svg"
                }
              />
            </>
          )}
        </div>
      )}

      {open && (
        <div className="cursor-2">
          {[
            "left",
            "top-arrow",
            "top-left",
            "top-no-arrow",
            "top-right",
          ].includes(tooltip) && (
            <div className="lines-wrapper">
              <img className="lines" alt="Lines" src="/img/lines.svg" />
            </div>
          )}

          {["bottom", "right"].includes(tooltip) && (
            <>
              <div className="tooltip-3">
                <img
                  className="tooltip-4"
                  alt="Tooltip"
                  src={
                    tooltip === "bottom" && supportingText
                      ? "/img/tooltip-7.svg"
                      : tooltip === "right"
                        ? "/img/tooltip-8.svg"
                        : "/img/tooltip-6.svg"
                  }
                />

                <div className="content-4">
                  <div className="text-11">
                    {!supportingText && <>This is a tooltip</>}

                    {supportingText && (
                      <>
                        <div className="text-9">This is a tooltip</div>

                        <p className="p">
                          Tooltips are used to describe or identify an element.
                          In most scenarios, tooltips help the user understand
                          the meaning, function or alt-text of an element.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="cursor">
                <div className="img-wrapper">
                  <img className="lines" alt="Lines" src="/img/lines.svg" />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

HelpIcon.propTypes = {
  open: PropTypes.bool,
  supportingText: PropTypes.bool,
  tooltip: PropTypes.oneOf([
    "top-left",
    "right",
    "top-arrow",
    "bottom",
    "left",
    "top-no-arrow",
    "top-right",
  ]),
};
