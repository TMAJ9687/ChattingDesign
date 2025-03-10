import { LanguageSwitcher } from ".";

export default {
  title: "Components/LanguageSwitcher",
  component: LanguageSwitcher,

  argTypes: {
    state: {
      options: ["pressed", "hover", "default"],
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
    state: "pressed",
    mode: "dark",
    className: {},
  },
};
