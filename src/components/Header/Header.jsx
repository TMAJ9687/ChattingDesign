/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MessageCircle } from "../../icons/MessageCircle";
import { User } from "../../icons/User";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { SizeMdHierarchyWrapper } from "../SizeMdHierarchyWrapper";
import { Switcher } from "../Switcher";
import "./style.css";

export const Header = ({
  user,
  mode,
  className,
  groupClassName,
  hasFrame = true,
  groupClassNameOverride,
  switcherToggleBasePressedTrueSizeMdClassName,
  groupWrapperClassName,
  visible = true,
  icon = <MessageCircle className="message-circle" color="#667085" />,
  sizeMdHierarchyWrapperClassName,
}) => {
  return (
    <div className={`header mode-1-${mode} ${className}`}>
      <div className="text-wrapper-2">chativy.</div>

      <div className={`group ${user} mode-3-${mode} ${groupClassName}`}>
        {hasFrame && (
          <div className="frame">
            {icon}
            <div className="text-wrapper-3">Inbox</div>
          </div>
        )}

        <div className={`group-2 ${groupClassNameOverride}`}>
          {mode === "light" && user === "standard" && (
            <Switcher
              className="switcher-instance"
              mode="light"
              pressed={false}
              size="sm"
              state="default"
              supportingText={false}
              text
              text1="Dark mode"
              textClassName="switcher-2"
              toggleBasePressedTrueSizeMdClassName={
                switcherToggleBasePressedTrueSizeMdClassName
              }
            />
          )}

          {(mode === "dark" || user === "vip") && (
            <div className="switcher-3">
              {user === "standard" && (
                <>
                  <div className="text-2">Light mode</div>

                  <Switcher
                    className="switcher-4"
                    mode="dark"
                    pressed={false}
                    size="sm"
                    state="hover"
                    supportingText={false}
                    text={false}
                  />
                </>
              )}

              {mode === "light" && (
                <Switcher
                  className="switcher-instance"
                  mode="light"
                  pressed={false}
                  size="sm"
                  state="default"
                  supportingText={false}
                  text
                  text1="Dark mode"
                  toggleBasePressedTrueSizeMdClassName="switcher-5"
                />
              )}

              {user === "vip" && mode === "dark" && (
                <div className="switcher-6">
                  <div className="text-2">Light mode</div>

                  <Switcher
                    className="switcher-4"
                    mode="dark"
                    pressed={false}
                    size="sm"
                    state="hover"
                    supportingText={false}
                    text={false}
                  />
                </div>
              )}

              {user === "vip" && (
                <LanguageSwitcher
                  className="language-switcher-instance"
                  mode={mode === "dark" ? "dark" : "light"}
                  state="default"
                />
              )}
            </div>
          )}

          <div className={`group-3 ${groupWrapperClassName}`}>
            {user === "standard" && (
              <>
                <>
                  {visible && (
                    <SizeMdHierarchyWrapper
                      buttonBaseSizeMdIconLeadingClassName={
                        sizeMdHierarchyWrapperClassName
                      }
                      buttonBaseText="VIP Membership"
                      className={`${mode === "dark" ? "class-8" : "class-9"}`}
                      destructive={false}
                      hierarchy="primary"
                      icon="false"
                      size="lg"
                      state="default"
                    />
                  )}
                </>

                <LanguageSwitcher
                  className="language-switcher-2"
                  mode={mode === "dark" ? "dark" : "light"}
                  state="default"
                />
              </>
            )}

            {user === "vip" && (
              <div className="avatar-label-group-wrapper">
                <div className="avatar-label-group">
                  <div className="avatar">
                    <div className="overlap-group">
                      <User className="user-instance" />
                      <div className="avatar-online" />
                    </div>
                  </div>

                  <div className="text-and-supporting">
                    <div className="text-3">Olivia Rhye</div>

                    <div className="supporting-text">olivia@untitledui.com</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.oneOf(["vip", "standard"]),
  mode: PropTypes.oneOf(["dark", "light"]),
  hasFrame: PropTypes.bool,
  visible: PropTypes.bool,
};
