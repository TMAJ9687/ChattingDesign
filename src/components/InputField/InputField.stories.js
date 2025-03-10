import { InputField } from ".";

export default {
  title: "Components/InputField",
  component: InputField,

  argTypes: {
    type: {
      options: [
        "leading-text",
        "input-field",
        "default",
        "leading-dropdown",
        "trailing-dropdown",
        "payment-input",
      ],
      control: { type: "select" },
    },
    state: {
      options: ["focused", "filled", "placeholder", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "leading-text",
    leadingIcon: true,
    label: true,
    hintText: true,
    helpIcon: true,
    destructive: true,
    state: "focused",
    className: {},
    inputFieldBaseTextClassName: {},
    inputFieldBaseLabelClassName: {},
    inputFieldBaseInputClassName: {},
    inputFieldBaseText: "olivia@untitledui.com",
    inputFieldBaseText1: "Email",
  },
};
