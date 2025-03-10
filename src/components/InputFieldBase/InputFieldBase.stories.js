import { InputFieldBase } from ".";

export default {
  title: "Components/InputFieldBase",
  component: InputFieldBase,

  argTypes: {
    type: {
      options: [
        "leading-text",
        "default",
        "leading-dropdown",
        "trailing-dropdown",
        "payment-input",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "leading-text",
    destructive: true,
    className: {},
    labelClassName: {},
    text: "Email",
    inputClassName: {},
    hasPaymentMethodIcon: true,
    textClassName: {},
    text1: "olivia@untitledui.com",
    hasTextInput: true,
    hasHintText: true,
    hasLabel: true,
    helpIconOpenFalseClassName: {},
    right: "/img/right-56.svg",
    middle: "/img/middle-56.svg",
    hintTextClassName: {},
    helpIconOpenFalseClassNameOverride: {},
    visible: true,
    textClassNameOverride: {},
    textInputClassName: {},
    hasText: true,
    divClassName: {},
  },
};
