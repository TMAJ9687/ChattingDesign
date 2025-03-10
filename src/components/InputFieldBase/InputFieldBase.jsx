/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AlertCircle62 } from "../../icons/AlertCircle62";
import { ChevronDown } from "../../icons/ChevronDown";
import { Mail } from "../../icons/Mail";
import { HelpIcon } from "../HelpIcon";
import "./style.css";

export const InputFieldBase = ({
  type,
  destructive,
  className,
  labelClassName,
  text = "Email",
  inputClassName,
  hasPaymentMethodIcon = true,
  textClassName,
  text1 = "olivia@untitledui.com",
  hasTextInput = true,
  hasHintText = true,
  hasLabel = true,
  icon = <Mail className="chevron-down" />,
  helpIconOpenFalseClassName,
  right = "/img/right-56.svg",
  middle = "/img/middle-56.svg",
  hintTextClassName,
  helpIconOpenFalseClassNameOverride,
  visible = true,
  textClassNameOverride,
  textInputClassName,
  hasText = true,
  divClassName,
}) => {
  return (
    <div className={`input-field-base ${className}`}>
      <div className="input-with-label">
        {hasLabel && (
          <div className={`label ${labelClassName}`}>
            {type === "default" && <>{text}</>}

            {type === "payment-input" && <>Card number</>}

            {type === "leading-dropdown" && <>Phone number</>}

            {type === "leading-text" && <>Website</>}

            {type === "trailing-dropdown" && <>Sale amount</>}
          </div>
        )}

        <div
          className={`input type-${type} destructive-${destructive} ${inputClassName}`}
        >
          <div className="content">
            {[
              "default",
              "leading-dropdown",
              "payment-input",
              "trailing-dropdown",
            ].includes(type) && (
              <>
                <>
                  {hasPaymentMethodIcon && (
                    <>
                      <>
                        {type === "default" && <>{icon}</>}

                        {[
                          "leading-dropdown",
                          "payment-input",
                          "trailing-dropdown",
                        ].includes(type) && (
                          <div className="payment-method-icon">
                            {type === "payment-input" && (
                              <div className="mastercard">
                                <div className="overlap-group-2">
                                  <img
                                    className="img"
                                    alt="Right"
                                    src={right}
                                  />

                                  <img
                                    className="middle"
                                    alt="Middle"
                                    src={middle}
                                  />
                                </div>
                              </div>
                            )}

                            {type === "leading-dropdown" && <>US</>}

                            {type === "trailing-dropdown" && (
                              <>
                                <div className="text-wrapper-4">$</div>

                                <div className={`text-4 ${divClassName}`}>
                                  1,000.00
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </>
                    </>
                  )}
                </>

                <>
                  {hasText && (
                    <>
                      <>
                        {["default", "payment-input"].includes(type) && (
                          <div className={`text-4 ${textClassName}`}>
                            {type === "default" && <>{text1}</>}

                            {type === "payment-input" && <>Card number</>}
                          </div>
                        )}

                        {type === "leading-dropdown" && (
                          <ChevronDown className="chevron-down" />
                        )}

                        {type === "trailing-dropdown" && !destructive && (
                          <HelpIcon
                            className="help-icon-instance"
                            open={false}
                            supportingText={false}
                            tooltip="top-arrow"
                          />
                        )}

                        {type === "trailing-dropdown" && destructive && (
                          <AlertCircle62 className="alert-circle" />
                        )}
                      </>
                    </>
                  )}
                </>
              </>
            )}

            {type === "leading-text" && (
              <div className="text-wrapper-4">http://</div>
            )}
          </div>

          {hasTextInput && (
            <>
              <>
                {!destructive &&
                  ["default", "payment-input"].includes(type) && (
                    <HelpIcon
                      className={helpIconOpenFalseClassName}
                      open={false}
                      supportingText={false}
                      tooltip="top-arrow"
                    />
                  )}

                {destructive && ["default", "payment-input"].includes(type) && (
                  <AlertCircle62 className="alert-circle" />
                )}

                {[
                  "leading-dropdown",
                  "leading-text",
                  "trailing-dropdown",
                ].includes(type) && (
                  <div className={`text-input ${textInputClassName}`}>
                    <div className={`text-5 ${textClassNameOverride}`}>
                      {type === "leading-dropdown" && <>+1 (555) 000-0000</>}

                      {type === "leading-text" && <>www.untitledui.com</>}

                      {type === "trailing-dropdown" && <>USD</>}
                    </div>

                    {visible && (
                      <>
                        <>
                          {!destructive &&
                            ["leading-dropdown", "leading-text"].includes(
                              type,
                            ) && (
                              <HelpIcon
                                className={helpIconOpenFalseClassNameOverride}
                                open={false}
                                supportingText={false}
                                tooltip="top-arrow"
                              />
                            )}

                          {destructive &&
                            ["leading-dropdown", "leading-text"].includes(
                              type,
                            ) && <AlertCircle62 className="alert-circle" />}

                          {type === "trailing-dropdown" && (
                            <ChevronDown className="chevron-down" />
                          )}
                        </>
                      </>
                    )}
                  </div>
                )}
              </>
            </>
          )}
        </div>
      </div>

      {hasHintText && (
        <div
          className={`hint-text destructive-1-${destructive} ${hintTextClassName}`}
        >
          {!destructive && (
            <p className="text-wrapper-115">
              This is a hint text to help user.
            </p>
          )}

          {destructive && (
            <p className="text-wrapper-115">This is an error message.</p>
          )}
        </div>
      )}
    </div>
  );
};

InputFieldBase.propTypes = {
  type: PropTypes.oneOf([
    "leading-text",
    "default",
    "leading-dropdown",
    "trailing-dropdown",
    "payment-input",
  ]),
  destructive: PropTypes.bool,
  text: PropTypes.string,
  hasPaymentMethodIcon: PropTypes.bool,
  text1: PropTypes.string,
  hasTextInput: PropTypes.bool,
  hasHintText: PropTypes.bool,
  hasLabel: PropTypes.bool,
  right: PropTypes.string,
  middle: PropTypes.string,
  visible: PropTypes.bool,
  hasText: PropTypes.bool,
};
