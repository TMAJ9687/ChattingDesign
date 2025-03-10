import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,

  argTypes: {
    user: {
      options: ["vip", "standard"],
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
    user: "vip",
    mode: "dark",
    className: {},
    groupClassName: {},
    hasFrame: true,
    groupClassNameOverride: {},
    switcherToggleBasePressedTrueSizeMdClassName: {},
    groupWrapperClassName: {},
    visible: true,
    sizeMdHierarchyWrapperClassName: {},
  },
};
