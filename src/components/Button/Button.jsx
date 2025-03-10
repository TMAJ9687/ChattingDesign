/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Circle452 } from "../../icons/Circle452";
import { Circle536 } from "../../icons/Circle536";
import { Circle900 } from "../../icons/Circle900";
import { ButtonBase } from "../ButtonBase";
import "./style.css";

export const Button = ({
  size,
  hierarchy,
  icon,
  destructive,
  state,
  className,
  buttonBaseText = "Button CTA",
  buttonBaseTextClassName,
  buttonBaseSizeMdIconLeadingClassName,
}) => {
  return (
    <div
      className={`button destructive-3-${destructive} ${hierarchy} ${state} size-5-${size} icon-${icon} ${className}`}
    >
      <ButtonBase
        circle536Color={
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "leading" &&
            size === "lg" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "leading" &&
            size === "lg" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "leading" &&
            size === "md" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "leading" &&
            size === "md" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "leading" &&
            size === "sm" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "leading" &&
            size === "sm" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "leading" &&
            size === "xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "leading" &&
            size === "xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "lg" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "lg" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "lg" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "md" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "md" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "md" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "sm" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "sm" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "sm" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "xl" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "lg" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "lg" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "lg" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "md" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "md" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "md" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "sm" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "sm" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "sm" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "xl" &&
            state === "hover")
            ? "#6941C6"
            : (destructive &&
                  hierarchy === "link-color" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "leading" &&
                  size === "lg" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "leading" &&
                  size === "md" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "leading" &&
                  size === "sm" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "leading" &&
                  size === "xl" &&
                  state === "focused")
              ? "#B42318"
              : (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "leading" &&
                    size === "lg" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "leading" &&
                    size === "lg" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "leading" &&
                    size === "md" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "leading" &&
                    size === "md" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "leading" &&
                    size === "sm" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "leading" &&
                    size === "sm" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "leading" &&
                    size === "xl" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "leading" &&
                    size === "xl" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "leading" &&
                    size === "lg" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "leading" &&
                    size === "lg" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "leading" &&
                    size === "md" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "leading" &&
                    size === "md" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "leading" &&
                    size === "sm" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "leading" &&
                    size === "sm" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "leading" &&
                    size === "xl" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "leading" &&
                    size === "xl" &&
                    state === "focused")
                ? "#667085"
                : (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "leading" &&
                      size === "lg" &&
                      state === "default") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "leading" &&
                      size === "lg" &&
                      state === "focused") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "leading" &&
                      size === "md" &&
                      state === "default") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "leading" &&
                      size === "md" &&
                      state === "focused") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "leading" &&
                      size === "sm" &&
                      state === "default") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "leading" &&
                      size === "sm" &&
                      state === "focused") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "leading" &&
                      size === "xl" &&
                      state === "default") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "leading" &&
                      size === "xl" &&
                      state === "focused")
                  ? "#344054"
                  : (hierarchy === "primary" &&
                        icon === "leading" &&
                        size === "lg") ||
                      (hierarchy === "primary" &&
                        icon === "leading" &&
                        size === "md" &&
                        state === "disabled") ||
                      (hierarchy === "primary" &&
                        icon === "leading" &&
                        size === "md" &&
                        state === "focused") ||
                      (hierarchy === "primary" &&
                        icon === "leading" &&
                        size === "md" &&
                        state === "hover") ||
                      (hierarchy === "primary" &&
                        icon === "leading" &&
                        size === "sm") ||
                      (hierarchy === "primary" &&
                        icon === "leading" &&
                        size === "xl")
                    ? "white"
                    : (!destructive &&
                          hierarchy === "secondary-color" &&
                          icon === "leading" &&
                          size === "lg" &&
                          state === "disabled") ||
                        (!destructive &&
                          hierarchy === "secondary-color" &&
                          icon === "leading" &&
                          size === "md" &&
                          state === "disabled") ||
                        (!destructive &&
                          hierarchy === "secondary-color" &&
                          icon === "leading" &&
                          size === "sm" &&
                          state === "disabled") ||
                        (!destructive &&
                          hierarchy === "secondary-color" &&
                          icon === "leading" &&
                          size === "xl" &&
                          state === "disabled")
                      ? "#D6BBFB"
                      : (destructive &&
                            hierarchy === "link-color" &&
                            icon === "leading" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-color" &&
                            icon === "leading" &&
                            size === "md" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-color" &&
                            icon === "leading" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-color" &&
                            icon === "leading" &&
                            size === "xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-gray" &&
                            icon === "leading" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-gray" &&
                            icon === "leading" &&
                            size === "md" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-gray" &&
                            icon === "leading" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-gray" &&
                            icon === "leading" &&
                            size === "xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-color" &&
                            icon === "leading" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-color" &&
                            icon === "leading" &&
                            size === "md" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-color" &&
                            icon === "leading" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-color" &&
                            icon === "leading" &&
                            size === "xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-gray" &&
                            icon === "leading" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-gray" &&
                            icon === "leading" &&
                            size === "md" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-gray" &&
                            icon === "leading" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-gray" &&
                            icon === "leading" &&
                            size === "xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-color" &&
                            icon === "leading" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-color" &&
                            icon === "leading" &&
                            size === "md" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-color" &&
                            icon === "leading" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-color" &&
                            icon === "leading" &&
                            size === "xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-gray" &&
                            icon === "leading" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-gray" &&
                            icon === "leading" &&
                            size === "md" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-gray" &&
                            icon === "leading" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-gray" &&
                            icon === "leading" &&
                            size === "xl" &&
                            state === "disabled")
                        ? "#FDA29B"
                        : (!destructive &&
                              hierarchy === "link-color" &&
                              icon === "leading" &&
                              size === "lg" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-color" &&
                              icon === "leading" &&
                              size === "md" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-color" &&
                              icon === "leading" &&
                              size === "sm" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-color" &&
                              icon === "leading" &&
                              size === "xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-gray" &&
                              icon === "leading" &&
                              size === "lg" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-gray" &&
                              icon === "leading" &&
                              size === "md" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-gray" &&
                              icon === "leading" &&
                              size === "sm" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-gray" &&
                              icon === "leading" &&
                              size === "xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "secondary-gray" &&
                              icon === "leading" &&
                              size === "lg" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "secondary-gray" &&
                              icon === "leading" &&
                              size === "md" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "secondary-gray" &&
                              icon === "leading" &&
                              size === "sm" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "secondary-gray" &&
                              icon === "leading" &&
                              size === "xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-color" &&
                              icon === "leading" &&
                              size === "lg" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-color" &&
                              icon === "leading" &&
                              size === "md" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-color" &&
                              icon === "leading" &&
                              size === "sm" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-color" &&
                              icon === "leading" &&
                              size === "xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-gray" &&
                              icon === "leading" &&
                              size === "lg" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-gray" &&
                              icon === "leading" &&
                              size === "md" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-gray" &&
                              icon === "leading" &&
                              size === "sm" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-gray" &&
                              icon === "leading" &&
                              size === "xl" &&
                              state === "disabled")
                          ? "#D0D5DD"
                          : (!destructive &&
                                hierarchy === "link-color" &&
                                icon === "leading" &&
                                size === "lg" &&
                                state === "hover") ||
                              (!destructive &&
                                hierarchy === "link-color" &&
                                icon === "leading" &&
                                size === "md" &&
                                state === "hover") ||
                              (!destructive &&
                                hierarchy === "link-color" &&
                                icon === "leading" &&
                                size === "sm" &&
                                state === "hover") ||
                              (!destructive &&
                                hierarchy === "link-color" &&
                                icon === "leading" &&
                                size === "xl" &&
                                state === "hover")
                            ? "#53389E"
                            : (destructive &&
                                  hierarchy === "link-color" &&
                                  icon === "leading" &&
                                  size === "lg" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-color" &&
                                  icon === "leading" &&
                                  size === "md" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-color" &&
                                  icon === "leading" &&
                                  size === "sm" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-color" &&
                                  icon === "leading" &&
                                  size === "xl" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-gray" &&
                                  icon === "leading" &&
                                  size === "lg" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-gray" &&
                                  icon === "leading" &&
                                  size === "md" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-gray" &&
                                  icon === "leading" &&
                                  size === "sm" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-gray" &&
                                  icon === "leading" &&
                                  size === "xl" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "secondary-gray" &&
                                  icon === "leading" &&
                                  size === "lg" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "secondary-gray" &&
                                  icon === "leading" &&
                                  size === "md" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "secondary-gray" &&
                                  icon === "leading" &&
                                  size === "sm" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "secondary-gray" &&
                                  icon === "leading" &&
                                  size === "xl" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "tertiary-gray" &&
                                  icon === "leading" &&
                                  size === "lg" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "tertiary-gray" &&
                                  icon === "leading" &&
                                  size === "md" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "tertiary-gray" &&
                                  icon === "leading" &&
                                  size === "sm" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "tertiary-gray" &&
                                  icon === "leading" &&
                                  size === "xl" &&
                                  state === "hover")
                              ? "#912018"
                              : (!destructive &&
                                    hierarchy === "link-gray" &&
                                    icon === "leading" &&
                                    size === "lg" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "link-gray" &&
                                    icon === "leading" &&
                                    size === "md" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "link-gray" &&
                                    icon === "leading" &&
                                    size === "sm" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "link-gray" &&
                                    icon === "leading" &&
                                    size === "xl" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "tertiary-gray" &&
                                    icon === "leading" &&
                                    size === "lg" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "tertiary-gray" &&
                                    icon === "leading" &&
                                    size === "md" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "tertiary-gray" &&
                                    icon === "leading" &&
                                    size === "sm" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "tertiary-gray" &&
                                    icon === "leading" &&
                                    size === "xl" &&
                                    state === "hover")
                                ? "#475467"
                                : (!destructive &&
                                      hierarchy === "secondary-gray" &&
                                      icon === "leading" &&
                                      size === "lg" &&
                                      state === "hover") ||
                                    (!destructive &&
                                      hierarchy === "secondary-gray" &&
                                      icon === "leading" &&
                                      size === "md" &&
                                      state === "hover") ||
                                    (!destructive &&
                                      hierarchy === "secondary-gray" &&
                                      icon === "leading" &&
                                      size === "sm" &&
                                      state === "hover") ||
                                    (!destructive &&
                                      hierarchy === "secondary-gray" &&
                                      icon === "leading" &&
                                      size === "xl" &&
                                      state === "hover")
                                  ? "#1D2939"
                                  : undefined
        }
        circle536Color1={
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "only" &&
            size === "md" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "only" &&
            size === "md" &&
            state === "default")
            ? "#6941C6"
            : (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "only" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "only" &&
                  size === "md" &&
                  state === "default")
              ? "#B42318"
              : undefined
        }
        circle536Stroke={
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "lg" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "md" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "sm" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "xl" &&
            state === "hover")
            ? "#6941C6"
            : (destructive &&
                  hierarchy === "link-color" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "trailing" &&
                  size === "lg" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "trailing" &&
                  size === "md" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "trailing" &&
                  size === "sm" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "trailing" &&
                  size === "xl" &&
                  state === "focused")
              ? "#B42318"
              : (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "trailing" &&
                    size === "lg" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "trailing" &&
                    size === "lg" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "trailing" &&
                    size === "md" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "trailing" &&
                    size === "md" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "trailing" &&
                    size === "sm" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "trailing" &&
                    size === "sm" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "trailing" &&
                    size === "xl" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "trailing" &&
                    size === "xl" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "trailing" &&
                    size === "lg" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "trailing" &&
                    size === "lg" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "trailing" &&
                    size === "md" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "trailing" &&
                    size === "md" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "trailing" &&
                    size === "sm" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "trailing" &&
                    size === "sm" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "trailing" &&
                    size === "xl" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "trailing" &&
                    size === "xl" &&
                    state === "focused")
                ? "#667085"
                : (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "trailing" &&
                      size === "lg" &&
                      state === "default") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "trailing" &&
                      size === "lg" &&
                      state === "focused") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "trailing" &&
                      size === "md" &&
                      state === "default") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "trailing" &&
                      size === "md" &&
                      state === "focused") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "trailing" &&
                      size === "sm" &&
                      state === "default") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "trailing" &&
                      size === "sm" &&
                      state === "focused") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "trailing" &&
                      size === "xl" &&
                      state === "default") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "trailing" &&
                      size === "xl" &&
                      state === "focused")
                  ? "#344054"
                  : (hierarchy === "primary" &&
                        icon === "trailing" &&
                        size === "lg") ||
                      (hierarchy === "primary" &&
                        icon === "trailing" &&
                        size === "md" &&
                        state === "disabled") ||
                      (hierarchy === "primary" &&
                        icon === "trailing" &&
                        size === "md" &&
                        state === "focused") ||
                      (hierarchy === "primary" &&
                        icon === "trailing" &&
                        size === "md" &&
                        state === "hover") ||
                      (hierarchy === "primary" &&
                        icon === "trailing" &&
                        size === "sm") ||
                      (hierarchy === "primary" &&
                        icon === "trailing" &&
                        size === "xl")
                    ? "white"
                    : (!destructive &&
                          hierarchy === "secondary-color" &&
                          icon === "trailing" &&
                          size === "lg" &&
                          state === "disabled") ||
                        (!destructive &&
                          hierarchy === "secondary-color" &&
                          icon === "trailing" &&
                          size === "md" &&
                          state === "disabled") ||
                        (!destructive &&
                          hierarchy === "secondary-color" &&
                          icon === "trailing" &&
                          size === "sm" &&
                          state === "disabled") ||
                        (!destructive &&
                          hierarchy === "secondary-color" &&
                          icon === "trailing" &&
                          size === "xl" &&
                          state === "disabled")
                      ? "#D6BBFB"
                      : (destructive &&
                            hierarchy === "link-color" &&
                            icon === "trailing" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-color" &&
                            icon === "trailing" &&
                            size === "md" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-color" &&
                            icon === "trailing" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-color" &&
                            icon === "trailing" &&
                            size === "xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-gray" &&
                            icon === "trailing" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-gray" &&
                            icon === "trailing" &&
                            size === "md" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-gray" &&
                            icon === "trailing" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-gray" &&
                            icon === "trailing" &&
                            size === "xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-color" &&
                            icon === "trailing" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-color" &&
                            icon === "trailing" &&
                            size === "md" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-color" &&
                            icon === "trailing" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-color" &&
                            icon === "trailing" &&
                            size === "xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-gray" &&
                            icon === "trailing" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-gray" &&
                            icon === "trailing" &&
                            size === "md" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-gray" &&
                            icon === "trailing" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-gray" &&
                            icon === "trailing" &&
                            size === "xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-color" &&
                            icon === "trailing" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-color" &&
                            icon === "trailing" &&
                            size === "md" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-color" &&
                            icon === "trailing" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-color" &&
                            icon === "trailing" &&
                            size === "xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-gray" &&
                            icon === "trailing" &&
                            size === "lg" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-gray" &&
                            icon === "trailing" &&
                            size === "md" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-gray" &&
                            icon === "trailing" &&
                            size === "sm" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-gray" &&
                            icon === "trailing" &&
                            size === "xl" &&
                            state === "disabled")
                        ? "#FDA29B"
                        : (!destructive &&
                              hierarchy === "link-color" &&
                              icon === "trailing" &&
                              size === "lg" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-color" &&
                              icon === "trailing" &&
                              size === "md" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-color" &&
                              icon === "trailing" &&
                              size === "sm" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-color" &&
                              icon === "trailing" &&
                              size === "xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-gray" &&
                              icon === "trailing" &&
                              size === "lg" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-gray" &&
                              icon === "trailing" &&
                              size === "md" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-gray" &&
                              icon === "trailing" &&
                              size === "sm" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-gray" &&
                              icon === "trailing" &&
                              size === "xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "secondary-gray" &&
                              icon === "trailing" &&
                              size === "lg" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "secondary-gray" &&
                              icon === "trailing" &&
                              size === "md" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "secondary-gray" &&
                              icon === "trailing" &&
                              size === "sm" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "secondary-gray" &&
                              icon === "trailing" &&
                              size === "xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-color" &&
                              icon === "trailing" &&
                              size === "lg" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-color" &&
                              icon === "trailing" &&
                              size === "md" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-color" &&
                              icon === "trailing" &&
                              size === "sm" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-color" &&
                              icon === "trailing" &&
                              size === "xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-gray" &&
                              icon === "trailing" &&
                              size === "lg" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-gray" &&
                              icon === "trailing" &&
                              size === "md" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-gray" &&
                              icon === "trailing" &&
                              size === "sm" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-gray" &&
                              icon === "trailing" &&
                              size === "xl" &&
                              state === "disabled")
                          ? "#D0D5DD"
                          : (!destructive &&
                                hierarchy === "link-color" &&
                                icon === "trailing" &&
                                size === "lg" &&
                                state === "hover") ||
                              (!destructive &&
                                hierarchy === "link-color" &&
                                icon === "trailing" &&
                                size === "md" &&
                                state === "hover") ||
                              (!destructive &&
                                hierarchy === "link-color" &&
                                icon === "trailing" &&
                                size === "sm" &&
                                state === "hover") ||
                              (!destructive &&
                                hierarchy === "link-color" &&
                                icon === "trailing" &&
                                size === "xl" &&
                                state === "hover")
                            ? "#53389E"
                            : (destructive &&
                                  hierarchy === "link-color" &&
                                  icon === "trailing" &&
                                  size === "lg" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-color" &&
                                  icon === "trailing" &&
                                  size === "md" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-color" &&
                                  icon === "trailing" &&
                                  size === "sm" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-color" &&
                                  icon === "trailing" &&
                                  size === "xl" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-gray" &&
                                  icon === "trailing" &&
                                  size === "lg" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-gray" &&
                                  icon === "trailing" &&
                                  size === "md" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-gray" &&
                                  icon === "trailing" &&
                                  size === "sm" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-gray" &&
                                  icon === "trailing" &&
                                  size === "xl" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "secondary-gray" &&
                                  icon === "trailing" &&
                                  size === "lg" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "secondary-gray" &&
                                  icon === "trailing" &&
                                  size === "md" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "secondary-gray" &&
                                  icon === "trailing" &&
                                  size === "sm" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "secondary-gray" &&
                                  icon === "trailing" &&
                                  size === "xl" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "tertiary-gray" &&
                                  icon === "trailing" &&
                                  size === "lg" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "tertiary-gray" &&
                                  icon === "trailing" &&
                                  size === "md" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "tertiary-gray" &&
                                  icon === "trailing" &&
                                  size === "sm" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "tertiary-gray" &&
                                  icon === "trailing" &&
                                  size === "xl" &&
                                  state === "hover")
                              ? "#912018"
                              : (!destructive &&
                                    hierarchy === "link-gray" &&
                                    icon === "trailing" &&
                                    size === "lg" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "link-gray" &&
                                    icon === "trailing" &&
                                    size === "md" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "link-gray" &&
                                    icon === "trailing" &&
                                    size === "sm" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "link-gray" &&
                                    icon === "trailing" &&
                                    size === "xl" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "tertiary-gray" &&
                                    icon === "trailing" &&
                                    size === "lg" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "tertiary-gray" &&
                                    icon === "trailing" &&
                                    size === "md" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "tertiary-gray" &&
                                    icon === "trailing" &&
                                    size === "sm" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "tertiary-gray" &&
                                    icon === "trailing" &&
                                    size === "xl" &&
                                    state === "hover")
                                ? "#475467"
                                : (!destructive &&
                                      hierarchy === "secondary-gray" &&
                                      icon === "trailing" &&
                                      size === "lg" &&
                                      state === "hover") ||
                                    (!destructive &&
                                      hierarchy === "secondary-gray" &&
                                      icon === "trailing" &&
                                      size === "md" &&
                                      state === "hover") ||
                                    (!destructive &&
                                      hierarchy === "secondary-gray" &&
                                      icon === "trailing" &&
                                      size === "sm" &&
                                      state === "hover") ||
                                    (!destructive &&
                                      hierarchy === "secondary-gray" &&
                                      icon === "trailing" &&
                                      size === "xl" &&
                                      state === "hover")
                                  ? "#1D2939"
                                  : undefined
        }
        circle900Color={
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "leading" &&
            size === "two-xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "leading" &&
            size === "two-xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "two-xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "two-xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "leading" &&
            size === "two-xl" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "two-xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "two-xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "leading" &&
            size === "two-xl" &&
            state === "hover")
            ? "#6941C6"
            : (destructive &&
                  hierarchy === "link-color" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "leading" &&
                  size === "two-xl" &&
                  state === "focused")
              ? "#B42318"
              : (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "leading" &&
                    size === "two-xl" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "leading" &&
                    size === "two-xl" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "leading" &&
                    size === "two-xl" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "leading" &&
                    size === "two-xl" &&
                    state === "focused")
                ? "#667085"
                : (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "leading" &&
                      size === "two-xl" &&
                      state === "default") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "leading" &&
                      size === "two-xl" &&
                      state === "focused")
                  ? "#344054"
                  : (hierarchy === "primary" &&
                        icon === "leading" &&
                        size === "two-xl" &&
                        state === "disabled") ||
                      (hierarchy === "primary" &&
                        icon === "leading" &&
                        size === "two-xl" &&
                        state === "focused") ||
                      (hierarchy === "primary" &&
                        icon === "leading" &&
                        size === "two-xl" &&
                        state === "hover")
                    ? "white"
                    : icon === "leading" &&
                        hierarchy === "secondary-color" &&
                        size === "two-xl" &&
                        state === "disabled" &&
                        !destructive
                      ? "#D6BBFB"
                      : (destructive &&
                            hierarchy === "link-color" &&
                            icon === "leading" &&
                            size === "two-xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-gray" &&
                            icon === "leading" &&
                            size === "two-xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-color" &&
                            icon === "leading" &&
                            size === "two-xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-gray" &&
                            icon === "leading" &&
                            size === "two-xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-color" &&
                            icon === "leading" &&
                            size === "two-xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-gray" &&
                            icon === "leading" &&
                            size === "two-xl" &&
                            state === "disabled")
                        ? "#FDA29B"
                        : (!destructive &&
                              hierarchy === "link-color" &&
                              icon === "leading" &&
                              size === "two-xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-gray" &&
                              icon === "leading" &&
                              size === "two-xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "secondary-gray" &&
                              icon === "leading" &&
                              size === "two-xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-color" &&
                              icon === "leading" &&
                              size === "two-xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-gray" &&
                              icon === "leading" &&
                              size === "two-xl" &&
                              state === "disabled")
                          ? "#D0D5DD"
                          : icon === "leading" &&
                              size === "two-xl" &&
                              hierarchy === "link-color" &&
                              !destructive &&
                              state === "hover"
                            ? "#53389E"
                            : (destructive &&
                                  hierarchy === "link-color" &&
                                  icon === "leading" &&
                                  size === "two-xl" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-gray" &&
                                  icon === "leading" &&
                                  size === "two-xl" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "secondary-gray" &&
                                  icon === "leading" &&
                                  size === "two-xl" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "tertiary-gray" &&
                                  icon === "leading" &&
                                  size === "two-xl" &&
                                  state === "hover")
                              ? "#912018"
                              : (!destructive &&
                                    hierarchy === "link-gray" &&
                                    icon === "leading" &&
                                    size === "two-xl" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "tertiary-gray" &&
                                    icon === "leading" &&
                                    size === "two-xl" &&
                                    state === "hover")
                                ? "#475467"
                                : icon === "leading" &&
                                    size === "two-xl" &&
                                    hierarchy === "secondary-gray" &&
                                    !destructive &&
                                    state === "hover"
                                  ? "#1D2939"
                                  : undefined
        }
        circle900Stroke={
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "link-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "secondary-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "hover") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "focused") ||
          (!destructive &&
            hierarchy === "tertiary-color" &&
            icon === "trailing" &&
            size === "two-xl" &&
            state === "hover")
            ? "#6941C6"
            : (destructive &&
                  hierarchy === "link-color" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-color" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "link-gray" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  icon === "trailing" &&
                  size === "two-xl" &&
                  state === "focused")
              ? "#B42318"
              : (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "trailing" &&
                    size === "two-xl" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "link-gray" &&
                    icon === "trailing" &&
                    size === "two-xl" &&
                    state === "focused") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "trailing" &&
                    size === "two-xl" &&
                    state === "default") ||
                  (!destructive &&
                    hierarchy === "tertiary-gray" &&
                    icon === "trailing" &&
                    size === "two-xl" &&
                    state === "focused")
                ? "#667085"
                : (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "trailing" &&
                      size === "two-xl" &&
                      state === "default") ||
                    (!destructive &&
                      hierarchy === "secondary-gray" &&
                      icon === "trailing" &&
                      size === "two-xl" &&
                      state === "focused")
                  ? "#344054"
                  : (hierarchy === "primary" &&
                        icon === "trailing" &&
                        size === "two-xl" &&
                        state === "disabled") ||
                      (hierarchy === "primary" &&
                        icon === "trailing" &&
                        size === "two-xl" &&
                        state === "focused") ||
                      (hierarchy === "primary" &&
                        icon === "trailing" &&
                        size === "two-xl" &&
                        state === "hover")
                    ? "white"
                    : icon === "trailing" &&
                        hierarchy === "secondary-color" &&
                        size === "two-xl" &&
                        state === "disabled" &&
                        !destructive
                      ? "#D6BBFB"
                      : (destructive &&
                            hierarchy === "link-color" &&
                            icon === "trailing" &&
                            size === "two-xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "link-gray" &&
                            icon === "trailing" &&
                            size === "two-xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-color" &&
                            icon === "trailing" &&
                            size === "two-xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "secondary-gray" &&
                            icon === "trailing" &&
                            size === "two-xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-color" &&
                            icon === "trailing" &&
                            size === "two-xl" &&
                            state === "disabled") ||
                          (destructive &&
                            hierarchy === "tertiary-gray" &&
                            icon === "trailing" &&
                            size === "two-xl" &&
                            state === "disabled")
                        ? "#FDA29B"
                        : (!destructive &&
                              hierarchy === "link-color" &&
                              icon === "trailing" &&
                              size === "two-xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "link-gray" &&
                              icon === "trailing" &&
                              size === "two-xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "secondary-gray" &&
                              icon === "trailing" &&
                              size === "two-xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-color" &&
                              icon === "trailing" &&
                              size === "two-xl" &&
                              state === "disabled") ||
                            (!destructive &&
                              hierarchy === "tertiary-gray" &&
                              icon === "trailing" &&
                              size === "two-xl" &&
                              state === "disabled")
                          ? "#D0D5DD"
                          : icon === "trailing" &&
                              size === "two-xl" &&
                              hierarchy === "link-color" &&
                              !destructive &&
                              state === "hover"
                            ? "#53389E"
                            : (destructive &&
                                  hierarchy === "link-color" &&
                                  icon === "trailing" &&
                                  size === "two-xl" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "link-gray" &&
                                  icon === "trailing" &&
                                  size === "two-xl" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "secondary-gray" &&
                                  icon === "trailing" &&
                                  size === "two-xl" &&
                                  state === "hover") ||
                                (destructive &&
                                  hierarchy === "tertiary-gray" &&
                                  icon === "trailing" &&
                                  size === "two-xl" &&
                                  state === "hover")
                              ? "#912018"
                              : (!destructive &&
                                    hierarchy === "link-gray" &&
                                    icon === "trailing" &&
                                    size === "two-xl" &&
                                    state === "hover") ||
                                  (!destructive &&
                                    hierarchy === "tertiary-gray" &&
                                    icon === "trailing" &&
                                    size === "two-xl" &&
                                    state === "hover")
                                ? "#475467"
                                : icon === "trailing" &&
                                    size === "two-xl" &&
                                    hierarchy === "secondary-gray" &&
                                    !destructive &&
                                    state === "hover"
                                  ? "#1D2939"
                                  : undefined
        }
        className={buttonBaseSizeMdIconLeadingClassName}
        dotClassName={`${((hierarchy === "link-color" && icon === "dot" && state === "default") || (hierarchy === "link-color" && icon === "dot" && state === "focused") || (hierarchy === "link-color" && icon === "dot" && state === "hover") || (hierarchy === "link-gray" && icon === "dot" && state === "default") || (hierarchy === "link-gray" && icon === "dot" && state === "focused") || (hierarchy === "link-gray" && icon === "dot" && state === "hover") || (hierarchy === "secondary-color" && icon === "dot" && state === "default") || (hierarchy === "secondary-color" && icon === "dot" && state === "focused") || (hierarchy === "secondary-color" && icon === "dot" && state === "hover") || (hierarchy === "secondary-gray" && icon === "dot" && state === "default") || (hierarchy === "secondary-gray" && icon === "dot" && state === "focused") || (hierarchy === "secondary-gray" && icon === "dot" && state === "hover") || (hierarchy === "tertiary-color" && icon === "dot" && state === "default") || (hierarchy === "tertiary-color" && icon === "dot" && state === "focused") || (hierarchy === "tertiary-color" && icon === "dot" && state === "hover") || (hierarchy === "tertiary-gray" && icon === "dot" && state === "default") || (hierarchy === "tertiary-gray" && icon === "dot" && state === "focused") || (hierarchy === "tertiary-gray" && icon === "dot" && state === "hover")) && "class-94"} ${icon === "dot" && state === "disabled" && hierarchy === "secondary-color" && !destructive && "class-95"} ${((destructive && hierarchy === "link-color" && icon === "dot" && state === "disabled") || (destructive && hierarchy === "link-gray" && icon === "dot" && state === "disabled") || (destructive && hierarchy === "secondary-color" && icon === "dot" && state === "disabled") || (destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "disabled") || (destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "disabled") || (destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "disabled")) && "class-96"} ${((!destructive && hierarchy === "link-color" && icon === "dot" && state === "disabled") || (!destructive && hierarchy === "link-gray" && icon === "dot" && state === "disabled") || (!destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "disabled") || (!destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "disabled") || (!destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "disabled")) && "class-97"}`}
        dotClassNameOverride={`${((!destructive && hierarchy === "link-color" && icon === "trailing" && state === "default") || (!destructive && hierarchy === "link-color" && icon === "trailing" && state === "focused") || (!destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "default") || (!destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "focused") || (!destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "hover") || (!destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "default") || (!destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "focused") || (!destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "hover")) && "class-98"} ${((destructive && hierarchy === "link-color" && icon === "trailing" && state === "default") || (destructive && hierarchy === "link-color" && icon === "trailing" && state === "focused") || (destructive && hierarchy === "link-gray" && icon === "trailing" && state === "default") || (destructive && hierarchy === "link-gray" && icon === "trailing" && state === "focused") || (destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "default") || (destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "focused") || (destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "hover") || (destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "default") || (destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "focused") || (destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "default") || (destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "focused") || (destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "hover") || (destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "default") || (destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "focused")) && "class-99"} ${((!destructive && hierarchy === "link-gray" && icon === "trailing" && state === "default") || (!destructive && hierarchy === "link-gray" && icon === "trailing" && state === "focused") || (!destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "default") || (!destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "focused")) && "class-100"} ${((!destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "default") || (!destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "focused")) && "class-101"} ${icon === "trailing" && state === "disabled" && hierarchy === "secondary-color" && !destructive && "class-102"} ${((destructive && hierarchy === "link-color" && icon === "trailing" && state === "disabled") || (destructive && hierarchy === "link-gray" && icon === "trailing" && state === "disabled") || (destructive && hierarchy === "secondary-color" && icon === "trailing" && state === "disabled") || (destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "disabled") || (destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "disabled") || (destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "disabled")) && "class-103"} ${((!destructive && hierarchy === "link-color" && icon === "trailing" && state === "disabled") || (!destructive && hierarchy === "link-gray" && icon === "trailing" && state === "disabled") || (!destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "disabled") || (!destructive && hierarchy === "tertiary-color" && icon === "trailing" && state === "disabled") || (!destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "disabled")) && "class-104"} ${icon === "trailing" && hierarchy === "link-color" && state === "hover" && !destructive && "class-105"} ${((destructive && hierarchy === "link-color" && icon === "trailing" && state === "hover") || (destructive && hierarchy === "link-gray" && icon === "trailing" && state === "hover") || (destructive && hierarchy === "secondary-gray" && icon === "trailing" && state === "hover") || (destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "hover")) && "class-106"} ${((!destructive && hierarchy === "link-gray" && icon === "trailing" && state === "hover") || (!destructive && hierarchy === "tertiary-gray" && icon === "trailing" && state === "hover")) && "class-107"} ${icon === "trailing" && hierarchy === "secondary-gray" && state === "hover" && !destructive && "class-108"}`}
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
          (!destructive &&
            hierarchy === "tertiary-gray" &&
            icon === "only" &&
            size === "lg" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-gray" &&
            icon === "only" &&
            size === "md" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-gray" &&
            icon === "only" &&
            size === "sm" &&
            state === "default") ||
          (!destructive &&
            hierarchy === "tertiary-gray" &&
            icon === "only" &&
            size === "xl" &&
            state === "default") ? (
            <Circle452 className="circle-2" />
          ) : (!destructive &&
              hierarchy === "tertiary-gray" &&
              icon === "only" &&
              size === "xl" &&
              state === "disabled") ||
            (!destructive &&
              hierarchy === "tertiary-gray" &&
              icon === "only" &&
              size === "xl" &&
              state === "hover") ||
            (!destructive &&
              icon === "only" &&
              size === "xl" &&
              state === "focused") ||
            (destructive &&
              hierarchy === "primary" &&
              icon === "only" &&
              size === "xl" &&
              state === "focused") ||
            (destructive &&
              hierarchy === "secondary-color" &&
              icon === "only" &&
              size === "xl" &&
              state === "focused") ||
            (destructive &&
              hierarchy === "secondary-gray" &&
              icon === "only" &&
              size === "xl" &&
              state === "focused") ||
            (destructive &&
              hierarchy === "tertiary-color" &&
              icon === "only" &&
              size === "xl" &&
              state === "focused") ||
            (destructive &&
              hierarchy === "tertiary-gray" &&
              icon === "only" &&
              size === "lg" &&
              state === "default") ||
            (destructive &&
              hierarchy === "tertiary-gray" &&
              icon === "only" &&
              size === "md" &&
              state === "default") ||
            (destructive &&
              hierarchy === "tertiary-gray" &&
              icon === "only" &&
              size === "sm" &&
              state === "default") ||
            (destructive &&
              hierarchy === "tertiary-gray" &&
              icon === "only" &&
              size === "xl") ||
            (hierarchy === "primary" && icon === "only" && size === "lg") ||
            (hierarchy === "primary" &&
              icon === "only" &&
              size === "sm" &&
              state === "default") ||
            (hierarchy === "primary" &&
              icon === "only" &&
              size === "xl" &&
              state === "default") ||
            (hierarchy === "primary" &&
              icon === "only" &&
              size === "xl" &&
              state === "disabled") ||
            (hierarchy === "primary" &&
              icon === "only" &&
              size === "xl" &&
              state === "hover") ||
            (hierarchy === "secondary-color" &&
              icon === "only" &&
              size === "lg") ||
            (hierarchy === "secondary-color" &&
              icon === "only" &&
              size === "sm" &&
              state === "default") ||
            (hierarchy === "secondary-color" &&
              icon === "only" &&
              size === "xl" &&
              state === "default") ||
            (hierarchy === "secondary-color" &&
              icon === "only" &&
              size === "xl" &&
              state === "disabled") ||
            (hierarchy === "secondary-color" &&
              icon === "only" &&
              size === "xl" &&
              state === "hover") ||
            (hierarchy === "secondary-gray" &&
              icon === "only" &&
              size === "lg") ||
            (hierarchy === "secondary-gray" &&
              icon === "only" &&
              size === "md" &&
              state === "default") ||
            (hierarchy === "secondary-gray" &&
              icon === "only" &&
              size === "sm" &&
              state === "default") ||
            (hierarchy === "secondary-gray" &&
              icon === "only" &&
              size === "xl" &&
              state === "default") ||
            (hierarchy === "secondary-gray" &&
              icon === "only" &&
              size === "xl" &&
              state === "disabled") ||
            (hierarchy === "secondary-gray" &&
              icon === "only" &&
              size === "xl" &&
              state === "hover") ||
            (hierarchy === "tertiary-color" &&
              icon === "only" &&
              size === "lg") ||
            (hierarchy === "tertiary-color" &&
              icon === "only" &&
              size === "sm" &&
              state === "default") ||
            (hierarchy === "tertiary-color" &&
              icon === "only" &&
              size === "xl" &&
              state === "default") ||
            (hierarchy === "tertiary-color" &&
              icon === "only" &&
              size === "xl" &&
              state === "disabled") ||
            (hierarchy === "tertiary-color" &&
              icon === "only" &&
              size === "xl" &&
              state === "hover") ||
            (hierarchy === "tertiary-gray" &&
              icon === "only" &&
              size === "lg" &&
              state === "disabled") ||
            (hierarchy === "tertiary-gray" &&
              icon === "only" &&
              size === "lg" &&
              state === "focused") ||
            (hierarchy === "tertiary-gray" &&
              icon === "only" &&
              size === "lg" &&
              state === "hover") ||
            (icon === "only" && size === "md" && state === "disabled") ||
            (icon === "only" && size === "md" && state === "focused") ||
            (icon === "only" && size === "md" && state === "hover") ||
            (icon === "only" && size === "sm" && state === "disabled") ||
            (icon === "only" && size === "sm" && state === "focused") ||
            (icon === "only" && size === "sm" && state === "hover") ? (
            <Circle536
              className="circle-2"
              color={
                (destructive &&
                  hierarchy === "secondary-color" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "secondary-color" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "secondary-gray" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  state === "default") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  state === "focused") ||
                (destructive &&
                  hierarchy === "tertiary-color" &&
                  state === "hover") ||
                (destructive &&
                  hierarchy === "tertiary-gray" &&
                  state === "focused") ||
                (hierarchy === "tertiary-gray" && state === "default")
                  ? "#B42318"
                  : !destructive &&
                      hierarchy === "secondary-gray" &&
                      ["default", "focused"].includes(state)
                    ? "#344054"
                    : hierarchy === "primary"
                      ? "white"
                      : state === "disabled" &&
                          hierarchy === "secondary-color" &&
                          !destructive
                        ? "#D6BBFB"
                        : (destructive &&
                              hierarchy === "secondary-color" &&
                              state === "disabled") ||
                            (destructive &&
                              hierarchy === "secondary-gray" &&
                              state === "disabled") ||
                            (destructive &&
                              hierarchy === "tertiary-color" &&
                              state === "disabled") ||
                            (destructive &&
                              hierarchy === "tertiary-gray" &&
                              state === "disabled")
                          ? "#FDA29B"
                          : (!destructive &&
                                hierarchy === "secondary-gray" &&
                                state === "disabled") ||
                              (!destructive &&
                                hierarchy === "tertiary-color" &&
                                state === "disabled") ||
                              (!destructive &&
                                hierarchy === "tertiary-gray" &&
                                state === "disabled")
                            ? "#D0D5DD"
                            : (!destructive &&
                                  hierarchy === "secondary-color" &&
                                  state === "default") ||
                                (!destructive &&
                                  hierarchy === "secondary-color" &&
                                  state === "focused") ||
                                (!destructive &&
                                  hierarchy === "secondary-color" &&
                                  state === "hover") ||
                                (!destructive &&
                                  hierarchy === "tertiary-color" &&
                                  state === "default") ||
                                (!destructive &&
                                  hierarchy === "tertiary-color" &&
                                  state === "focused") ||
                                (!destructive &&
                                  hierarchy === "tertiary-color" &&
                                  state === "hover")
                              ? "#6941C6"
                              : hierarchy === "tertiary-gray" &&
                                  !destructive &&
                                  state === "focused"
                                ? "#667085"
                                : hierarchy === "tertiary-gray" &&
                                    state === "hover" &&
                                    !destructive
                                  ? "#475467"
                                  : destructive &&
                                      state === "hover" &&
                                      [
                                        "secondary-gray",
                                        "tertiary-gray",
                                      ].includes(hierarchy)
                                    ? "#912018"
                                    : hierarchy === "secondary-gray" &&
                                        state === "hover" &&
                                        !destructive
                                      ? "#1D2939"
                                      : undefined
              }
            />
          ) : icon === "only" && size === "two-xl" ? (
            <Circle900
              className="circle-932"
              color={
                hierarchy === "primary"
                  ? "white"
                  : (!destructive &&
                        hierarchy === "secondary-color" &&
                        state === "default") ||
                      (!destructive &&
                        hierarchy === "secondary-color" &&
                        state === "focused") ||
                      (!destructive &&
                        hierarchy === "secondary-color" &&
                        state === "hover") ||
                      (!destructive &&
                        hierarchy === "tertiary-color" &&
                        state === "default") ||
                      (!destructive &&
                        hierarchy === "tertiary-color" &&
                        state === "focused") ||
                      (!destructive &&
                        hierarchy === "tertiary-color" &&
                        state === "hover")
                    ? "#6941C6"
                    : (destructive &&
                          hierarchy === "secondary-color" &&
                          state === "default") ||
                        (destructive &&
                          hierarchy === "secondary-color" &&
                          state === "focused") ||
                        (destructive &&
                          hierarchy === "secondary-color" &&
                          state === "hover") ||
                        (destructive &&
                          hierarchy === "secondary-gray" &&
                          state === "default") ||
                        (destructive &&
                          hierarchy === "secondary-gray" &&
                          state === "focused") ||
                        (destructive &&
                          hierarchy === "tertiary-color" &&
                          state === "default") ||
                        (destructive &&
                          hierarchy === "tertiary-color" &&
                          state === "focused") ||
                        (destructive &&
                          hierarchy === "tertiary-color" &&
                          state === "hover") ||
                        (destructive &&
                          hierarchy === "tertiary-gray" &&
                          state === "default") ||
                        (destructive &&
                          hierarchy === "tertiary-gray" &&
                          state === "focused")
                      ? "#B42318"
                      : !destructive &&
                          hierarchy === "tertiary-gray" &&
                          ["default", "focused"].includes(state)
                        ? "#667085"
                        : !destructive &&
                            hierarchy === "secondary-gray" &&
                            ["default", "focused"].includes(state)
                          ? "#344054"
                          : state === "disabled" &&
                              hierarchy === "secondary-color" &&
                              !destructive
                            ? "#D6BBFB"
                            : (destructive &&
                                  hierarchy === "secondary-color" &&
                                  state === "disabled") ||
                                (destructive &&
                                  hierarchy === "secondary-gray" &&
                                  state === "disabled") ||
                                (destructive &&
                                  hierarchy === "tertiary-color" &&
                                  state === "disabled") ||
                                (destructive &&
                                  hierarchy === "tertiary-gray" &&
                                  state === "disabled")
                              ? "#FDA29B"
                              : (!destructive &&
                                    hierarchy === "secondary-gray" &&
                                    state === "disabled") ||
                                  (!destructive &&
                                    hierarchy === "tertiary-color" &&
                                    state === "disabled") ||
                                  (!destructive &&
                                    hierarchy === "tertiary-gray" &&
                                    state === "disabled")
                                ? "#D0D5DD"
                                : hierarchy === "tertiary-gray" &&
                                    state === "hover" &&
                                    !destructive
                                  ? "#475467"
                                  : destructive &&
                                      state === "hover" &&
                                      [
                                        "secondary-gray",
                                        "tertiary-gray",
                                      ].includes(hierarchy)
                                    ? "#912018"
                                    : hierarchy === "secondary-gray" &&
                                        state === "hover" &&
                                        !destructive
                                      ? "#1D2939"
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
        textClassName={buttonBaseTextClassName}
        textClassNameOverride={`${((!destructive && hierarchy === "link-color" && icon === "dot" && state === "default") || (!destructive && hierarchy === "link-color" && icon === "dot" && state === "focused") || (!destructive && hierarchy === "link-color" && icon === "leading" && state === "default") || (!destructive && hierarchy === "link-color" && icon === "leading" && state === "focused") || (!destructive && hierarchy === "secondary-color" && icon === "dot" && state === "default") || (!destructive && hierarchy === "secondary-color" && icon === "dot" && state === "focused") || (!destructive && hierarchy === "secondary-color" && icon === "dot" && state === "hover") || (!destructive && hierarchy === "secondary-color" && icon === "leading" && state === "default") || (!destructive && hierarchy === "secondary-color" && icon === "leading" && state === "focused") || (!destructive && hierarchy === "secondary-color" && icon === "leading" && state === "hover") || (!destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "default") || (!destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "focused") || (!destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "hover") || (!destructive && hierarchy === "tertiary-color" && icon === "leading" && state === "default") || (!destructive && hierarchy === "tertiary-color" && icon === "leading" && state === "focused") || (!destructive && hierarchy === "tertiary-color" && icon === "leading" && state === "hover")) && "class-98"} ${((destructive && hierarchy === "link-color" && icon === "dot" && state === "default") || (destructive && hierarchy === "link-color" && icon === "dot" && state === "focused") || (destructive && hierarchy === "link-color" && icon === "leading" && state === "default") || (destructive && hierarchy === "link-color" && icon === "leading" && state === "focused") || (destructive && hierarchy === "link-gray" && icon === "dot" && state === "default") || (destructive && hierarchy === "link-gray" && icon === "dot" && state === "focused") || (destructive && hierarchy === "link-gray" && icon === "leading" && state === "default") || (destructive && hierarchy === "link-gray" && icon === "leading" && state === "focused") || (destructive && hierarchy === "secondary-color" && icon === "dot" && state === "default") || (destructive && hierarchy === "secondary-color" && icon === "dot" && state === "focused") || (destructive && hierarchy === "secondary-color" && icon === "dot" && state === "hover") || (destructive && hierarchy === "secondary-color" && icon === "leading" && state === "default") || (destructive && hierarchy === "secondary-color" && icon === "leading" && state === "focused") || (destructive && hierarchy === "secondary-color" && icon === "leading" && state === "hover") || (destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "default") || (destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "focused") || (destructive && hierarchy === "secondary-gray" && icon === "leading" && state === "default") || (destructive && hierarchy === "secondary-gray" && icon === "leading" && state === "focused") || (destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "default") || (destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "focused") || (destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "hover") || (destructive && hierarchy === "tertiary-color" && icon === "leading" && state === "default") || (destructive && hierarchy === "tertiary-color" && icon === "leading" && state === "focused") || (destructive && hierarchy === "tertiary-color" && icon === "leading" && state === "hover") || (destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "default") || (destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "focused") || (destructive && hierarchy === "tertiary-gray" && icon === "leading" && state === "default") || (destructive && hierarchy === "tertiary-gray" && icon === "leading" && state === "focused")) && "class-99"} ${((!destructive && hierarchy === "link-gray" && icon === "dot" && state === "default") || (!destructive && hierarchy === "link-gray" && icon === "dot" && state === "focused") || (!destructive && hierarchy === "link-gray" && icon === "leading" && state === "default") || (!destructive && hierarchy === "link-gray" && icon === "leading" && state === "focused") || (!destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "default") || (!destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "focused") || (!destructive && hierarchy === "tertiary-gray" && icon === "leading" && state === "default") || (!destructive && hierarchy === "tertiary-gray" && icon === "leading" && state === "focused")) && "class-100"} ${((!destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "default") || (!destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "focused") || (!destructive && hierarchy === "secondary-gray" && icon === "leading" && state === "default") || (!destructive && hierarchy === "secondary-gray" && icon === "leading" && state === "focused")) && "class-101"} ${((!destructive && hierarchy === "secondary-color" && icon === "dot" && state === "disabled") || (!destructive && hierarchy === "secondary-color" && icon === "leading" && state === "disabled")) && "class-102"} ${((destructive && hierarchy === "link-color" && icon === "dot" && state === "disabled") || (destructive && hierarchy === "link-color" && icon === "leading" && state === "disabled") || (destructive && hierarchy === "link-gray" && icon === "dot" && state === "disabled") || (destructive && hierarchy === "link-gray" && icon === "leading" && state === "disabled") || (destructive && hierarchy === "secondary-color" && icon === "dot" && state === "disabled") || (destructive && hierarchy === "secondary-color" && icon === "leading" && state === "disabled") || (destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "disabled") || (destructive && hierarchy === "secondary-gray" && icon === "leading" && state === "disabled") || (destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "disabled") || (destructive && hierarchy === "tertiary-color" && icon === "leading" && state === "disabled") || (destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "disabled") || (destructive && hierarchy === "tertiary-gray" && icon === "leading" && state === "disabled")) && "class-103"} ${((!destructive && hierarchy === "link-color" && icon === "dot" && state === "disabled") || (!destructive && hierarchy === "link-color" && icon === "leading" && state === "disabled") || (!destructive && hierarchy === "link-gray" && icon === "dot" && state === "disabled") || (!destructive && hierarchy === "link-gray" && icon === "leading" && state === "disabled") || (!destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "disabled") || (!destructive && hierarchy === "secondary-gray" && icon === "leading" && state === "disabled") || (!destructive && hierarchy === "tertiary-color" && icon === "dot" && state === "disabled") || (!destructive && hierarchy === "tertiary-color" && icon === "leading" && state === "disabled") || (!destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "disabled") || (!destructive && hierarchy === "tertiary-gray" && icon === "leading" && state === "disabled")) && "class-104"} ${((!destructive && hierarchy === "link-color" && icon === "dot" && state === "hover") || (!destructive && hierarchy === "link-color" && icon === "leading" && state === "hover")) && "class-105"} ${((destructive && hierarchy === "link-color" && icon === "dot" && state === "hover") || (destructive && hierarchy === "link-color" && icon === "leading" && state === "hover") || (destructive && hierarchy === "link-gray" && icon === "dot" && state === "hover") || (destructive && hierarchy === "link-gray" && icon === "leading" && state === "hover") || (destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "hover") || (destructive && hierarchy === "secondary-gray" && icon === "leading" && state === "hover") || (destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "hover") || (destructive && hierarchy === "tertiary-gray" && icon === "leading" && state === "hover")) && "class-106"} ${((!destructive && hierarchy === "link-gray" && icon === "dot" && state === "hover") || (!destructive && hierarchy === "link-gray" && icon === "leading" && state === "hover") || (!destructive && hierarchy === "tertiary-gray" && icon === "dot" && state === "hover") || (!destructive && hierarchy === "tertiary-gray" && icon === "leading" && state === "hover")) && "class-107"} ${((!destructive && hierarchy === "secondary-gray" && icon === "dot" && state === "hover") || (!destructive && hierarchy === "secondary-gray" && icon === "leading" && state === "hover")) && "class-108"}`}
      />
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  hierarchy: PropTypes.oneOf([
    "tertiary-color",
    "link-color",
    "tertiary-gray",
    "secondary-color",
    "link-gray",
    "primary",
    "secondary-gray",
  ]),
  icon: PropTypes.oneOf(["only", "leading", "false", "dot", "trailing"]),
  destructive: PropTypes.bool,
  state: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
  buttonBaseText: PropTypes.string,
};
