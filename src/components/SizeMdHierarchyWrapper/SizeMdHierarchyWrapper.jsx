/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Circle536 } from "../../icons/Circle536";
import { Circle900 } from "../../icons/Circle900";
import { ButtonBase } from "../ButtonBase";
import "./style.css";

export const SizeMdHierarchyWrapper = ({
  size,
  hierarchy,
  icon,
  destructive,
  state,
  className,
  buttonBaseText = "Button CTA",
  buttonBaseSizeMdIconLeadingClassName,
}) => {
  return (
    <div
      className={`size-md-hierarchy-wrapper state-${state} size-6-${size} icon-0-${icon} hierarchy-${hierarchy} ${className}`}
    >
      <ButtonBase
        circle536Color={
          (!destructive &&
            hierarchy === "primary" &&
            icon === "leading" &&
            size === "lg") ||
          (!destructive &&
            hierarchy === "primary" &&
            icon === "leading" &&
            size === "md") ||
          (!destructive &&
            hierarchy === "primary" &&
            icon === "leading" &&
            size === "sm") ||
          (!destructive &&
            hierarchy === "primary" &&
            icon === "leading" &&
            size === "xl")
            ? "white"
            : (destructive && icon === "leading" && size === "lg") ||
                (destructive && icon === "leading" && size === "md") ||
                (destructive && icon === "leading" && size === "sm") ||
                (destructive && icon === "leading" && size === "xl")
              ? "#FCFDFD"
              : (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "lg" &&
                    state === "default") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "lg" &&
                    state === "focused") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "lg" &&
                    state === "hover") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "md" &&
                    state === "default") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "md" &&
                    state === "focused") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "md" &&
                    state === "hover") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "sm" &&
                    state === "default") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "sm" &&
                    state === "focused") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "sm" &&
                    state === "hover") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "xl" &&
                    state === "default") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "xl" &&
                    state === "focused") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "xl" &&
                    state === "hover")
                ? "#229C90"
                : (hierarchy === "tertiary-color" &&
                      icon === "leading" &&
                      size === "lg" &&
                      state === "default") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "leading" &&
                      size === "lg" &&
                      state === "focused") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "leading" &&
                      size === "md" &&
                      state === "default") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "leading" &&
                      size === "md" &&
                      state === "focused") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "leading" &&
                      size === "sm" &&
                      state === "default") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "leading" &&
                      size === "sm" &&
                      state === "focused") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "leading" &&
                      size === "xl" &&
                      state === "default") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "leading" &&
                      size === "xl" &&
                      state === "focused")
                  ? "#F1A94D"
                  : (hierarchy === "secondary-gray" &&
                        icon === "leading" &&
                        size === "lg" &&
                        state === "default") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "leading" &&
                        size === "lg" &&
                        state === "focused") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "leading" &&
                        size === "md" &&
                        state === "default") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "leading" &&
                        size === "md" &&
                        state === "focused") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "leading" &&
                        size === "sm" &&
                        state === "default") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "leading" &&
                        size === "sm" &&
                        state === "focused") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "leading" &&
                        size === "xl" &&
                        state === "default") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "leading" &&
                        size === "xl" &&
                        state === "focused")
                    ? "#667085"
                    : (hierarchy === "secondary-color" &&
                          icon === "leading" &&
                          size === "lg" &&
                          state === "disabled") ||
                        (hierarchy === "secondary-color" &&
                          icon === "leading" &&
                          size === "md" &&
                          state === "disabled") ||
                        (hierarchy === "secondary-color" &&
                          icon === "leading" &&
                          size === "sm" &&
                          state === "disabled") ||
                        (hierarchy === "secondary-color" &&
                          icon === "leading" &&
                          size === "xl" &&
                          state === "disabled")
                      ? "#A7D7D3"
                      : (hierarchy === "tertiary-color" &&
                            icon === "leading" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (hierarchy === "tertiary-color" &&
                            icon === "leading" &&
                            size === "md" &&
                            state === "disabled") ||
                          (hierarchy === "tertiary-color" &&
                            icon === "leading" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (hierarchy === "tertiary-color" &&
                            icon === "leading" &&
                            size === "xl" &&
                            state === "disabled")
                        ? "#F8D4A6"
                        : (hierarchy === "secondary-gray" &&
                              icon === "leading" &&
                              size === "lg" &&
                              state === "disabled") ||
                            (hierarchy === "secondary-gray" &&
                              icon === "leading" &&
                              size === "md" &&
                              state === "disabled") ||
                            (hierarchy === "secondary-gray" &&
                              icon === "leading" &&
                              size === "sm" &&
                              state === "disabled") ||
                            (hierarchy === "secondary-gray" &&
                              icon === "leading" &&
                              size === "xl" &&
                              state === "disabled")
                          ? "#C4DBE1"
                          : (hierarchy === "tertiary-color" &&
                                icon === "leading" &&
                                size === "lg" &&
                                state === "hover") ||
                              (hierarchy === "tertiary-color" &&
                                icon === "leading" &&
                                size === "md" &&
                                state === "hover") ||
                              (hierarchy === "tertiary-color" &&
                                icon === "leading" &&
                                size === "sm" &&
                                state === "hover") ||
                              (hierarchy === "tertiary-color" &&
                                icon === "leading" &&
                                size === "xl" &&
                                state === "hover")
                            ? "#EE9321"
                            : (hierarchy === "secondary-gray" &&
                                  icon === "leading" &&
                                  size === "lg" &&
                                  state === "hover") ||
                                (hierarchy === "secondary-gray" &&
                                  icon === "leading" &&
                                  size === "md" &&
                                  state === "hover") ||
                                (hierarchy === "secondary-gray" &&
                                  icon === "leading" &&
                                  size === "sm" &&
                                  state === "hover") ||
                                (hierarchy === "secondary-gray" &&
                                  icon === "leading" &&
                                  size === "xl" &&
                                  state === "hover")
                              ? "#344054"
                              : undefined
        }
        circle536Stroke={
          (!destructive &&
            hierarchy === "primary" &&
            icon === "trailing" &&
            size === "lg") ||
          (!destructive &&
            hierarchy === "primary" &&
            icon === "trailing" &&
            size === "md") ||
          (!destructive &&
            hierarchy === "primary" &&
            icon === "trailing" &&
            size === "sm") ||
          (!destructive &&
            hierarchy === "primary" &&
            icon === "trailing" &&
            size === "xl")
            ? "white"
            : (destructive && icon === "trailing" && size === "lg") ||
                (destructive && icon === "trailing" && size === "md") ||
                (destructive && icon === "trailing" && size === "sm") ||
                (destructive && icon === "trailing" && size === "xl")
              ? "#FCFDFD"
              : (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "lg" &&
                    state === "default") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "lg" &&
                    state === "focused") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "lg" &&
                    state === "hover") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "md" &&
                    state === "default") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "md" &&
                    state === "focused") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "md" &&
                    state === "hover") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "sm" &&
                    state === "default") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "sm" &&
                    state === "focused") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "sm" &&
                    state === "hover") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "xl" &&
                    state === "default") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "xl" &&
                    state === "focused") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "xl" &&
                    state === "hover")
                ? "#229C90"
                : (hierarchy === "tertiary-color" &&
                      icon === "trailing" &&
                      size === "lg" &&
                      state === "default") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "trailing" &&
                      size === "lg" &&
                      state === "focused") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "trailing" &&
                      size === "md" &&
                      state === "default") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "trailing" &&
                      size === "md" &&
                      state === "focused") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "trailing" &&
                      size === "sm" &&
                      state === "default") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "trailing" &&
                      size === "sm" &&
                      state === "focused") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "trailing" &&
                      size === "xl" &&
                      state === "default") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "trailing" &&
                      size === "xl" &&
                      state === "focused")
                  ? "#F1A94D"
                  : (hierarchy === "secondary-gray" &&
                        icon === "trailing" &&
                        size === "lg" &&
                        state === "default") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "trailing" &&
                        size === "lg" &&
                        state === "focused") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "trailing" &&
                        size === "md" &&
                        state === "default") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "trailing" &&
                        size === "md" &&
                        state === "focused") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "trailing" &&
                        size === "sm" &&
                        state === "default") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "trailing" &&
                        size === "sm" &&
                        state === "focused") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "trailing" &&
                        size === "xl" &&
                        state === "default") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "trailing" &&
                        size === "xl" &&
                        state === "focused")
                    ? "#667085"
                    : (hierarchy === "secondary-color" &&
                          icon === "trailing" &&
                          size === "lg" &&
                          state === "disabled") ||
                        (hierarchy === "secondary-color" &&
                          icon === "trailing" &&
                          size === "md" &&
                          state === "disabled") ||
                        (hierarchy === "secondary-color" &&
                          icon === "trailing" &&
                          size === "sm" &&
                          state === "disabled") ||
                        (hierarchy === "secondary-color" &&
                          icon === "trailing" &&
                          size === "xl" &&
                          state === "disabled")
                      ? "#A7D7D3"
                      : (hierarchy === "tertiary-color" &&
                            icon === "trailing" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (hierarchy === "tertiary-color" &&
                            icon === "trailing" &&
                            size === "md" &&
                            state === "disabled") ||
                          (hierarchy === "tertiary-color" &&
                            icon === "trailing" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (hierarchy === "tertiary-color" &&
                            icon === "trailing" &&
                            size === "xl" &&
                            state === "disabled")
                        ? "#F8D4A6"
                        : (hierarchy === "secondary-gray" &&
                              icon === "trailing" &&
                              size === "lg" &&
                              state === "disabled") ||
                            (hierarchy === "secondary-gray" &&
                              icon === "trailing" &&
                              size === "md" &&
                              state === "disabled") ||
                            (hierarchy === "secondary-gray" &&
                              icon === "trailing" &&
                              size === "sm" &&
                              state === "disabled") ||
                            (hierarchy === "secondary-gray" &&
                              icon === "trailing" &&
                              size === "xl" &&
                              state === "disabled")
                          ? "#C4DBE1"
                          : (hierarchy === "tertiary-color" &&
                                icon === "trailing" &&
                                size === "lg" &&
                                state === "hover") ||
                              (hierarchy === "tertiary-color" &&
                                icon === "trailing" &&
                                size === "md" &&
                                state === "hover") ||
                              (hierarchy === "tertiary-color" &&
                                icon === "trailing" &&
                                size === "sm" &&
                                state === "hover") ||
                              (hierarchy === "tertiary-color" &&
                                icon === "trailing" &&
                                size === "xl" &&
                                state === "hover")
                            ? "#EE9321"
                            : (hierarchy === "secondary-gray" &&
                                  icon === "trailing" &&
                                  size === "lg" &&
                                  state === "hover") ||
                                (hierarchy === "secondary-gray" &&
                                  icon === "trailing" &&
                                  size === "md" &&
                                  state === "hover") ||
                                (hierarchy === "secondary-gray" &&
                                  icon === "trailing" &&
                                  size === "sm" &&
                                  state === "hover") ||
                                (hierarchy === "secondary-gray" &&
                                  icon === "trailing" &&
                                  size === "xl" &&
                                  state === "hover")
                              ? "#344054"
                              : undefined
        }
        circle900Color={
          icon === "leading" &&
          !destructive &&
          hierarchy === "primary" &&
          size === "two-xl"
            ? "white"
            : destructive && icon === "leading" && size === "two-xl"
              ? "#FCFDFD"
              : (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "two-xl" &&
                    state === "default") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "two-xl" &&
                    state === "focused") ||
                  (hierarchy === "secondary-color" &&
                    icon === "leading" &&
                    size === "two-xl" &&
                    state === "hover")
                ? "#229C90"
                : (hierarchy === "tertiary-color" &&
                      icon === "leading" &&
                      size === "two-xl" &&
                      state === "default") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "leading" &&
                      size === "two-xl" &&
                      state === "focused")
                  ? "#F1A94D"
                  : (hierarchy === "secondary-gray" &&
                        icon === "leading" &&
                        size === "two-xl" &&
                        state === "default") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "leading" &&
                        size === "two-xl" &&
                        state === "focused")
                    ? "#667085"
                    : icon === "leading" &&
                        state === "disabled" &&
                        hierarchy === "secondary-color" &&
                        size === "two-xl"
                      ? "#A7D7D3"
                      : hierarchy === "tertiary-color" &&
                          icon === "leading" &&
                          state === "disabled" &&
                          size === "two-xl"
                        ? "#F8D4A6"
                        : icon === "leading" &&
                            hierarchy === "secondary-gray" &&
                            state === "disabled" &&
                            size === "two-xl"
                          ? "#C4DBE1"
                          : icon === "leading" &&
                              hierarchy === "tertiary-color" &&
                              state === "hover" &&
                              size === "two-xl"
                            ? "#EE9321"
                            : icon === "leading" &&
                                hierarchy === "secondary-gray" &&
                                state === "hover" &&
                                size === "two-xl"
                              ? "#344054"
                              : undefined
        }
        circle900Stroke={
          icon === "trailing" &&
          !destructive &&
          hierarchy === "primary" &&
          size === "two-xl"
            ? "white"
            : icon === "trailing" && destructive && size === "two-xl"
              ? "#FCFDFD"
              : (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "two-xl" &&
                    state === "default") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "two-xl" &&
                    state === "focused") ||
                  (hierarchy === "secondary-color" &&
                    icon === "trailing" &&
                    size === "two-xl" &&
                    state === "hover")
                ? "#229C90"
                : (hierarchy === "tertiary-color" &&
                      icon === "trailing" &&
                      size === "two-xl" &&
                      state === "default") ||
                    (hierarchy === "tertiary-color" &&
                      icon === "trailing" &&
                      size === "two-xl" &&
                      state === "focused")
                  ? "#F1A94D"
                  : (hierarchy === "secondary-gray" &&
                        icon === "trailing" &&
                        size === "two-xl" &&
                        state === "default") ||
                      (hierarchy === "secondary-gray" &&
                        icon === "trailing" &&
                        size === "two-xl" &&
                        state === "focused")
                    ? "#667085"
                    : icon === "trailing" &&
                        state === "disabled" &&
                        hierarchy === "secondary-color" &&
                        size === "two-xl"
                      ? "#A7D7D3"
                      : icon === "trailing" &&
                          state === "disabled" &&
                          hierarchy === "tertiary-color" &&
                          size === "two-xl"
                        ? "#F8D4A6"
                        : icon === "trailing" &&
                            hierarchy === "secondary-gray" &&
                            state === "disabled" &&
                            size === "two-xl"
                          ? "#C4DBE1"
                          : icon === "trailing" &&
                              hierarchy === "tertiary-color" &&
                              state === "hover" &&
                              size === "two-xl"
                            ? "#EE9321"
                            : icon === "trailing" &&
                                hierarchy === "secondary-gray" &&
                                state === "hover" &&
                                size === "two-xl"
                              ? "#344054"
                              : undefined
        }
        className={buttonBaseSizeMdIconLeadingClassName}
        dotClassName={`${hierarchy === "primary" && icon === "dot" && !destructive && "class-109"} ${destructive && icon === "dot" && "class-110"} ${((hierarchy === "secondary-color" && icon === "dot" && state === "default") || (hierarchy === "secondary-color" && icon === "dot" && state === "focused") || (hierarchy === "secondary-color" && icon === "dot" && state === "hover") || (hierarchy === "secondary-gray" && icon === "dot" && state === "default") || (hierarchy === "secondary-gray" && icon === "dot" && state === "focused") || (hierarchy === "secondary-gray" && icon === "dot" && state === "hover") || (hierarchy === "tertiary-color" && icon === "dot" && state === "default") || (hierarchy === "tertiary-color" && icon === "dot" && state === "focused") || (hierarchy === "tertiary-color" && icon === "dot" && state === "hover")) && "class-111"} ${hierarchy === "secondary-color" && state === "disabled" && icon === "dot" && "class-112"} ${state === "disabled" && hierarchy === "tertiary-color" && icon === "dot" && "class-113"} ${hierarchy === "secondary-gray" && state === "disabled" && icon === "dot" && "class-114"}`}
        dotClassNameOverride={`${icon === "trailing" && hierarchy === "primary" && !destructive && "class-115"} ${icon === "trailing" && destructive && "class-116"} ${((hierarchy === "secondary-color" && icon === "trailing" && state === "default") || (hierarchy === "secondary-color" && icon === "trailing" && state === "focused") || (hierarchy === "secondary-color" && icon === "trailing" && state === "hover")) && "class-117"} ${hierarchy === "tertiary-color" && icon === "trailing" && ["default", "focused"].includes(state) && "class-118"} ${hierarchy === "secondary-gray" && icon === "trailing" && ["default", "focused"].includes(state) && "class-119"} ${icon === "trailing" && state === "disabled" && hierarchy === "secondary-color" && "class-120"} ${icon === "trailing" && state === "disabled" && hierarchy === "tertiary-color" && "class-121"} ${icon === "trailing" && hierarchy === "secondary-gray" && state === "disabled" && "class-122"} ${icon === "trailing" && hierarchy === "tertiary-color" && state === "hover" && "class-123"} ${icon === "trailing" && hierarchy === "secondary-gray" && state === "hover" && "class-124"}`}
        icon={
          icon === "dot"
            ? "dot"
            : icon === "leading"
              ? "leading"
              : icon === "trailing"
                ? "trailing"
                : icon === "only"
                  ? "only"
                  : "false"
        }
        override={
          (icon === "only" && size === "lg") ||
          (icon === "only" && size === "md") ||
          (icon === "only" && size === "sm") ||
          (icon === "only" && size === "xl") ? (
            <Circle536
              className="circle-536"
              color={
                hierarchy === "primary" && !destructive
                  ? "white"
                  : destructive
                    ? "#FCFDFD"
                    : hierarchy === "secondary-color" &&
                        ["default", "focused", "hover"].includes(state)
                      ? "#229C90"
                      : hierarchy === "tertiary-color" &&
                          ["default", "focused"].includes(state)
                        ? "#F1A94D"
                        : hierarchy === "secondary-gray" &&
                            ["default", "focused"].includes(state)
                          ? "#667085"
                          : state === "disabled" &&
                              hierarchy === "secondary-color"
                            ? "#A7D7D3"
                            : state === "disabled" &&
                                hierarchy === "tertiary-color"
                              ? "#F8D4A6"
                              : hierarchy === "secondary-gray" &&
                                  state === "disabled"
                                ? "#C4DBE1"
                                : hierarchy === "tertiary-color" &&
                                    state === "hover"
                                  ? "#EE9321"
                                  : hierarchy === "secondary-gray" &&
                                      state === "hover"
                                    ? "#344054"
                                    : undefined
              }
            />
          ) : icon === "only" && size === "two-xl" ? (
            <Circle900
              className="circle-309"
              color={
                hierarchy === "primary" && !destructive
                  ? "white"
                  : destructive
                    ? "#FCFDFD"
                    : hierarchy === "secondary-color" &&
                        ["default", "focused", "hover"].includes(state)
                      ? "#229C90"
                      : hierarchy === "tertiary-color" &&
                          ["default", "focused"].includes(state)
                        ? "#F1A94D"
                        : hierarchy === "secondary-gray" &&
                            ["default", "focused"].includes(state)
                          ? "#667085"
                          : state === "disabled" &&
                              hierarchy === "secondary-color"
                            ? "#A7D7D3"
                            : hierarchy === "tertiary-color" &&
                                state === "disabled"
                              ? "#F8D4A6"
                              : hierarchy === "secondary-gray" &&
                                  state === "disabled"
                                ? "#C4DBE1"
                                : hierarchy === "tertiary-color" &&
                                    state === "hover"
                                  ? "#EE9321"
                                  : hierarchy === "secondary-gray" &&
                                      state === "hover"
                                    ? "#344054"
                                    : undefined
              }
            />
          ) : undefined
        }
        size={
          size === "lg"
            ? "lg"
            : size === "xl"
              ? "xl"
              : size === "two-xl"
                ? "two-xl"
                : size === "sm"
                  ? "sm"
                  : "md"
        }
        text={buttonBaseText}
        textClassName={`${hierarchy === "primary" && icon === "false" && !destructive && "class-115"} ${destructive && icon === "false" && "class-116"} ${((hierarchy === "secondary-color" && icon === "false" && state === "default") || (hierarchy === "secondary-color" && icon === "false" && state === "focused") || (hierarchy === "secondary-color" && icon === "false" && state === "hover")) && "class-117"} ${((hierarchy === "tertiary-color" && icon === "false" && size === "lg" && state === "default") || (hierarchy === "tertiary-color" && icon === "false" && size === "md" && state === "default") || (hierarchy === "tertiary-color" && icon === "false" && size === "sm" && state === "default") || (hierarchy === "tertiary-color" && icon === "false" && size === "xl" && state === "default") || (hierarchy === "tertiary-color" && icon === "false" && state === "focused")) && "class-118"} ${hierarchy === "secondary-gray" && icon === "false" && ["default", "focused"].includes(state) && "class-119"} ${state === "disabled" && hierarchy === "secondary-color" && icon === "false" && "class-120"} ${state === "disabled" && hierarchy === "tertiary-color" && icon === "false" && "class-121"} ${hierarchy === "secondary-gray" && state === "disabled" && icon === "false" && "class-122"} ${icon === "false" && hierarchy === "tertiary-color" && state === "hover" && "class-123"} ${icon === "false" && hierarchy === "secondary-gray" && state === "hover" && "class-124"} ${state === "default" && hierarchy === "tertiary-color" && icon === "false" && size === "two-xl" && "class-125"}`}
        textClassNameOverride={`${!destructive && hierarchy === "primary" && ["dot", "leading"].includes(icon) && "class-115"} ${destructive && ["dot", "leading"].includes(icon) && "class-116"} ${((hierarchy === "secondary-color" && icon === "dot" && state === "default") || (hierarchy === "secondary-color" && icon === "dot" && state === "focused") || (hierarchy === "secondary-color" && icon === "dot" && state === "hover") || (hierarchy === "secondary-color" && icon === "leading" && state === "default") || (hierarchy === "secondary-color" && icon === "leading" && state === "focused") || (hierarchy === "secondary-color" && icon === "leading" && state === "hover")) && "class-117"} ${((hierarchy === "tertiary-color" && icon === "dot" && state === "default") || (hierarchy === "tertiary-color" && icon === "dot" && state === "focused") || (hierarchy === "tertiary-color" && icon === "leading" && state === "default") || (hierarchy === "tertiary-color" && icon === "leading" && state === "focused")) && "class-118"} ${((hierarchy === "secondary-gray" && icon === "dot" && state === "default") || (hierarchy === "secondary-gray" && icon === "dot" && state === "focused") || (hierarchy === "secondary-gray" && icon === "leading" && state === "default") || (hierarchy === "secondary-gray" && icon === "leading" && state === "focused")) && "class-119"} ${hierarchy === "secondary-color" && state === "disabled" && ["dot", "leading"].includes(icon) && "class-120"} ${hierarchy === "tertiary-color" && state === "disabled" && ["dot", "leading"].includes(icon) && "class-121"} ${hierarchy === "secondary-gray" && state === "disabled" && ["dot", "leading"].includes(icon) && "class-122"} ${hierarchy === "tertiary-color" && state === "hover" && ["dot", "leading"].includes(icon) && "class-123"} ${hierarchy === "secondary-gray" && state === "hover" && ["dot", "leading"].includes(icon) && "class-124"}`}
      />
    </div>
  );
};

SizeMdHierarchyWrapper.propTypes = {
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  hierarchy: PropTypes.oneOf([
    "primary",
    "tertiary-color",
    "secondary-gray",
    "secondary-color",
  ]),
  icon: PropTypes.oneOf(["only", "leading", "false", "dot", "trailing"]),
  destructive: PropTypes.bool,
  state: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
  buttonBaseText: PropTypes.string,
};
