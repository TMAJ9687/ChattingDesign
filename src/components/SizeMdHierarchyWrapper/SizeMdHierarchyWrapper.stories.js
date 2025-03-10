import { SizeMdHierarchyWrapper } from ".";

export default {
  title: "Components/SizeMdHierarchyWrapper",
  component: SizeMdHierarchyWrapper,

  argTypes: {
    size: {
      options: ["xl", "lg", "two-xl", "sm", "md"],
      control: { type: "select" },
    },
    hierarchy: {
      options: [
        "primary",
        "tertiary-color",
        "secondary-gray",
        "secondary-color",
      ],
      control: { type: "select" },
    },
    icon: {
      options: ["only", "leading", "false", "dot", "trailing"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "focused", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "xl",
    hierarchy: "primary",
    icon: "only",
    destructive: true,
    state: "disabled",
    className: {},
    buttonBaseText: "Button CTA",
    buttonBaseSizeMdIconLeadingClassName: {},
  },
};
