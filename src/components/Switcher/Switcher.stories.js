import { Switcher } from ".";

export default {
  title: "Components/Switcher",
  component: Switcher,

  argTypes: {
    size: {
      options: ["md", "sm"],
      control: { type: "select" },
    },
    state: {
      options: ["default", "disabled", "hover", "focus"],
      control: { type: "select" },
    },
    mode: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    pressed: true,
    size: "md",
    text: true,
    supportingText: true,
    state: "default",
    mode: "dark",
    className: {},
    textClassName: {},
    text1: "Remember me",
    toggleBasePressedTrueSizeMdClassName: {},
  },
};
