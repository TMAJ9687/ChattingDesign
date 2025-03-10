/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Mail } from "../../icons/Mail";
import { InputFieldBase } from "../InputFieldBase";
import "./style.css";

export const InputField = ({
  type,
  leadingIcon,
  label,
  hintText,
  helpIcon,
  destructive,
  state,
  className,
  inputFieldBaseTextClassName,
  inputFieldBaseLabelClassName,
  inputFieldBaseInputClassName,
  inputFieldBaseText = "olivia@untitledui.com",
  inputFieldBaseText1 = "Email",
  inputFieldBaseIcon = <Mail className="mail-56" />,
}) => {
  return (
    <div
      className={`input-field type-3-${type} state-0-${state} help-icon-${helpIcon} hint-text-${hintText} label-${label} destructive-2-${destructive} ${className}`}
    >
      <InputFieldBase
        className="input-field-base-instance"
        destructive={destructive ? true : undefined}
        divClassName={`${((!destructive && helpIcon && state === "filled" && type === "trailing-dropdown") || (destructive && helpIcon && !hintText && !label && state === "filled" && type === "trailing-dropdown") || (destructive && helpIcon && hintText && state === "filled" && type === "trailing-dropdown") || (!helpIcon && state === "filled" && type === "trailing-dropdown") || (state === "focused" && type === "trailing-dropdown")) && "class-12"}`}
        hasHintText={!hintText ? false : undefined}
        hasLabel={!label ? false : undefined}
        hasPaymentMethodIcon={
          !leadingIcon && type === "default" ? false : undefined
        }
        hasText={
          type === "trailing-dropdown" && !destructive ? false : undefined
        }
        hasTextInput={
          !destructive &&
          (!helpIcon || type === "payment-input") &&
          ["default", "payment-input"].includes(type)
            ? false
            : undefined
        }
        helpIconOpenFalseClassName={`${state === "placeholder" && !hintText && helpIcon && type === "default" && !label && !destructive && leadingIcon && "class-18"} ${state === "placeholder" && !hintText && !label && type === "input-field" && !destructive && "class-19"} ${state === "placeholder" && !hintText && label && helpIcon && type === "default" && !destructive && leadingIcon && "class-20"} ${state === "placeholder" && !hintText && label && type === "input-field" && !destructive && "class-21"} ${state === "placeholder" && label && helpIcon && type === "default" && hintText && !destructive && leadingIcon && "class-22"} ${state === "placeholder" && label && type === "input-field" && hintText && !destructive && "class-23"} ${state === "placeholder" && helpIcon && type === "default" && !label && hintText && !destructive && leadingIcon && "class-24"} ${state === "placeholder" && !label && type === "input-field" && hintText && !destructive && "class-25"} ${!hintText && helpIcon && type === "default" && !label && state === "disabled" && leadingIcon && "class-26"} ${!label && !hintText && state === "disabled" && type === "input-field" && "class-27"} ${!hintText && helpIcon && label && type === "default" && state === "disabled" && leadingIcon && "class-28"} ${type === "input-field" && !hintText && label && state === "disabled" && "class-29"} ${label && helpIcon && type === "default" && state === "disabled" && hintText && leadingIcon && "class-30"} ${state === "disabled" && type === "input-field" && label && hintText && "class-31"} ${helpIcon && type === "default" && !label && state === "disabled" && hintText && leadingIcon && "class-32"} ${state === "disabled" && !label && hintText && type === "input-field" && "class-33"} ${!hintText && helpIcon && type === "default" && !label && !destructive && state === "filled" && leadingIcon && "class-34"} ${!hintText && !label && type === "input-field" && !destructive && state === "filled" && "class-35"} ${!hintText && label && helpIcon && type === "default" && !destructive && state === "filled" && leadingIcon && "class-36"} ${!hintText && label && type === "input-field" && !destructive && state === "filled" && "class-37"} ${label && helpIcon && type === "default" && hintText && !destructive && state === "filled" && leadingIcon && "class-38"} ${label && type === "input-field" && hintText && !destructive && state === "filled" && "class-39"} ${helpIcon && type === "default" && !label && hintText && !destructive && state === "filled" && leadingIcon && "class-40"} ${!label && type === "input-field" && hintText && !destructive && state === "filled" && "class-41"} ${!hintText && helpIcon && type === "default" && !label && !destructive && state === "focused" && leadingIcon && "class-42"} ${!hintText && !label && type === "input-field" && !destructive && state === "focused" && "class-43"} ${!hintText && label && helpIcon && type === "default" && !destructive && state === "focused" && leadingIcon && "class-44"} ${!hintText && label && type === "input-field" && !destructive && state === "focused" && "class-45"} ${label && helpIcon && type === "default" && hintText && !destructive && state === "focused" && leadingIcon && "class-46"} ${label && type === "input-field" && !destructive && hintText && state === "focused" && "class-47"} ${helpIcon && type === "default" && !label && hintText && !destructive && state === "focused" && leadingIcon && "class-48"} ${!label && type === "input-field" && !destructive && hintText && state === "focused" && "class-49"} ${state === "placeholder" && !hintText && helpIcon && type === "default" && !label && !leadingIcon && !destructive && "class-50"} ${state === "placeholder" && !hintText && label && helpIcon && type === "default" && !leadingIcon && !destructive && "class-51"} ${state === "placeholder" && label && helpIcon && type === "default" && !leadingIcon && hintText && !destructive && "class-52"} ${state === "placeholder" && helpIcon && type === "default" && !label && !leadingIcon && hintText && !destructive && "class-53"} ${!hintText && helpIcon && type === "default" && !label && !leadingIcon && state === "disabled" && "class-54"} ${!hintText && helpIcon && label && type === "default" && !leadingIcon && state === "disabled" && "class-55"} ${label && helpIcon && type === "default" && !leadingIcon && hintText && state === "disabled" && "class-56"} ${helpIcon && type === "default" && !label && !leadingIcon && hintText && state === "disabled" && "class-57"} ${!hintText && helpIcon && type === "default" && !label && !leadingIcon && !destructive && state === "filled" && "class-58"} ${!hintText && label && helpIcon && type === "default" && !leadingIcon && !destructive && state === "filled" && "class-59"} ${label && helpIcon && type === "default" && !leadingIcon && hintText && !destructive && state === "filled" && "class-60"} ${helpIcon && type === "default" && !label && !leadingIcon && hintText && !destructive && state === "filled" && "class-61"} ${!hintText && helpIcon && type === "default" && !label && !leadingIcon && !destructive && state === "focused" && "class-62"} ${!hintText && label && helpIcon && type === "default" && !leadingIcon && !destructive && state === "focused" && "class-63"} ${label && helpIcon && type === "default" && !leadingIcon && hintText && !destructive && state === "focused" && "class-64"} ${helpIcon && type === "default" && !label && !leadingIcon && hintText && !destructive && state === "focused" && "class-65"}`}
        helpIconOpenFalseClassNameOverride={`${state === "placeholder" && !hintText && helpIcon && !label && !destructive && type === "leading-dropdown" && "class-66"} ${state === "placeholder" && !hintText && helpIcon && label && !destructive && type === "leading-dropdown" && "class-67"} ${state === "placeholder" && label && helpIcon && hintText && !destructive && type === "leading-dropdown" && "class-68"} ${state === "placeholder" && helpIcon && !label && hintText && !destructive && type === "leading-dropdown" && "class-69"} ${!hintText && helpIcon && !label && state === "disabled" && type === "leading-dropdown" && "class-70"} ${!hintText && helpIcon && label && state === "disabled" && type === "leading-dropdown" && "class-71"} ${label && helpIcon && hintText && state === "disabled" && type === "leading-dropdown" && "class-72"} ${helpIcon && !label && hintText && state === "disabled" && type === "leading-dropdown" && "class-73"} ${!hintText && helpIcon && !label && !destructive && type === "leading-dropdown" && state === "filled" && "class-74"} ${!hintText && helpIcon && label && !destructive && type === "leading-dropdown" && state === "filled" && "class-75"} ${label && helpIcon && !destructive && hintText && type === "leading-dropdown" && state === "filled" && "class-76"} ${helpIcon && !label && !destructive && hintText && type === "leading-dropdown" && state === "filled" && "class-77"} ${!hintText && helpIcon && !label && !destructive && type === "leading-dropdown" && state === "focused" && "class-78"} ${!hintText && helpIcon && label && !destructive && type === "leading-dropdown" && state === "focused" && "class-79"} ${label && helpIcon && !destructive && hintText && type === "leading-dropdown" && state === "focused" && "class-80"} ${helpIcon && !label && !destructive && hintText && type === "leading-dropdown" && state === "focused" && "class-81"} ${state === "placeholder" && !hintText && helpIcon && !label && !destructive && type === "leading-text" && "class-82"} ${state === "placeholder" && label && helpIcon && hintText && !destructive && type === "leading-text" && "class-83"} ${state === "placeholder" && helpIcon && !label && hintText && !destructive && type === "leading-text" && "class-84"} ${!hintText && helpIcon && !label && state === "disabled" && type === "leading-text" && "class-85"} ${label && helpIcon && hintText && state === "disabled" && type === "leading-text" && "class-86"} ${helpIcon && !label && hintText && state === "disabled" && type === "leading-text" && "class-87"} ${!hintText && helpIcon && !label && !destructive && type === "leading-text" && state === "filled" && "class-88"} ${label && helpIcon && hintText && !destructive && type === "leading-text" && state === "filled" && "class-89"} ${helpIcon && !label && hintText && !destructive && type === "leading-text" && state === "filled" && "class-90"} ${!hintText && helpIcon && !label && !destructive && type === "leading-text" && state === "focused" && "class-91"} ${label && helpIcon && hintText && !destructive && type === "leading-text" && state === "focused" && "class-92"} ${helpIcon && !label && hintText && !destructive && type === "leading-text" && state === "focused" && "class-93"}`}
        hintTextClassName={`${((!destructive && helpIcon && hintText && label && !leadingIcon && state === "focused" && type === "default") || (!destructive && hintText && !label && !leadingIcon && state === "focused" && type === "default") || (!destructive && hintText && leadingIcon && state === "focused") || (!destructive && hintText && state === "focused" && type === "leading-dropdown") || (!destructive && hintText && state === "focused" && type === "trailing-dropdown")) && "class-10"} ${((destructive && hintText && state === "focused" && type === "default") || (destructive && hintText && state === "focused" && type === "input-field") || (destructive && hintText && state === "focused" && type === "leading-dropdown") || (destructive && hintText && state === "focused" && type === "payment-input") || (destructive && hintText && state === "focused" && type === "trailing-dropdown")) && "class-11"}`}
        icon={inputFieldBaseIcon}
        inputClassName={inputFieldBaseInputClassName}
        labelClassName={inputFieldBaseLabelClassName}
        middle={
          ["input-field", "payment-input"].includes(type)
            ? "/img/middle.svg"
            : undefined
        }
        right={
          ["input-field", "payment-input"].includes(type)
            ? "/img/right.svg"
            : undefined
        }
        text={inputFieldBaseText1}
        text1={inputFieldBaseText}
        textClassName={inputFieldBaseTextClassName}
        textClassNameOverride={`${((!destructive && state === "filled" && type === "leading-text") || (destructive && !helpIcon && !label && state === "filled" && type === "leading-text") || (destructive && helpIcon && !hintText && !label && state === "filled" && type === "leading-text") || (state === "filled" && type === "leading-dropdown") || (state === "focused" && type === "leading-dropdown") || (state === "focused" && type === "leading-text")) && "class-12"} ${((destructive && helpIcon && hintText && !label && state === "filled" && type === "leading-text") || (destructive && label && state === "filled" && type === "leading-text")) && "class-13"}`}
        textInputClassName={`${((destructive && !helpIcon && !hintText && !label && state === "filled" && type === "leading-text") || (destructive && !helpIcon && !hintText && !label && state === "placeholder" && type === "leading-text") || (destructive && !helpIcon && label && state === "filled" && type === "leading-text") || (destructive && helpIcon && !hintText && label && state === "filled" && type === "leading-text") || (destructive && helpIcon && hintText && state === "filled" && type === "leading-text")) && "class-14"} ${type === "leading-text" && !destructive && state === "focused" && "class-15"} ${((destructive && !helpIcon && !hintText && label && state === "focused" && type === "leading-text") || (destructive && !helpIcon && hintText && state === "focused" && type === "leading-text") || (destructive && helpIcon && state === "focused" && type === "leading-text")) && "class-16"} ${!hintText && !label && !helpIcon && destructive && state === "focused" && type === "leading-text" && "class-17"}`}
        type={
          type === "default"
            ? "default"
            : type === "leading-dropdown"
              ? "leading-dropdown"
              : type === "leading-text"
                ? "leading-text"
                : type === "trailing-dropdown"
                  ? "trailing-dropdown"
                  : "payment-input"
        }
        visible={
          (!destructive && !helpIcon && type === "leading-dropdown") ||
          (!destructive && !helpIcon && type === "leading-text") ||
          (!destructive &&
            helpIcon &&
            !hintText &&
            label &&
            type === "leading-text")
            ? false
            : undefined
        }
      />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.oneOf([
    "leading-text",
    "input-field",
    "default",
    "leading-dropdown",
    "trailing-dropdown",
    "payment-input",
  ]),
  leadingIcon: PropTypes.bool,
  label: PropTypes.bool,
  hintText: PropTypes.bool,
  helpIcon: PropTypes.bool,
  destructive: PropTypes.bool,
  state: PropTypes.oneOf(["focused", "filled", "placeholder", "disabled"]),
  inputFieldBaseText: PropTypes.string,
  inputFieldBaseText1: PropTypes.string,
};
