import { ToggleBase } from ".";

export default {
  title: "Components/ToggleBase",
  component: ToggleBase,

  argTypes: {
    size: {
      options: ["md", "sm"],
      control: { type: "select" },
    },
    theme: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
    state: {
      options: ["default", "disabled", "hover", "focus"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    pressed: true,
    size: "md",
    theme: "dark",
    state: "default",
    className: {},
    buttonClassName: {},
  },
};
