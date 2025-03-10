import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";
import { Latop } from "../../components/Latop";
import "./style.css";

export const VipLogin = () => {
  return (
    <div className="VIP-login">
      <div className="div-3">
        <Header
          className="header-5"
          groupClassName="header-6"
          groupClassNameOverride="header-7"
          groupWrapperClassName="header-9"
          hasFrame={false}
          mode="light"
          switcherToggleBasePressedTrueSizeMdClassName="header-8"
          user="standard"
          visible={false}
        />
        <div className="ad-px-px-wrapper">
          <div className="ad-px-px">
            <div className="overlap-4">
              <div className="div-wrapper">
                <div className="overlap-5">
                  <div className="group-5">
                    <div className="overlap-group-4">
                      <div className="ellipse-5" />

                      <div className="ellipse-6" />

                      <div className="ellipse-7" />
                    </div>
                  </div>

                  <div className="ellipse-8" />
                </div>
              </div>

              <p className="sub-text-2">Take your website to the next level</p>
            </div>

            <div className="group-6">
              <div className="group-7">
                <div className="group-copy-4">
                  <img
                    className="group-8"
                    alt="Group"
                    src="/img/group-3-1.png"
                  />

                  <img
                    className="group-copy-5"
                    alt="Group copy"
                    src="/img/group-3-copy.png"
                  />

                  <img
                    className="group-copy-6"
                    alt="Group copy"
                    src="/img/group-3-copy-2-1.png"
                  />
                </div>
              </div>
            </div>

            <Latop className="latop-2" />
          </div>
        </div>

        <div className="content-7">
          <div className="header-10">
            <div className="text-and-supporting-3">
              <p className="text-13">Log in to your account</p>

              <p className="supporting-text-3">
                Welcome back! Please enter your details.
              </p>
            </div>
          </div>

          <div className="content-8">
            <div className="form-3">
              <InputField
                className="input-field-5"
                destructive={false}
                helpIcon={false}
                hintText={false}
                inputFieldBaseInputClassName="input-field-8"
                inputFieldBaseLabelClassName="input-field-7"
                inputFieldBaseText="Enter your username"
                inputFieldBaseText1="Username"
                inputFieldBaseTextClassName="input-field-6"
                label
                leadingIcon={false}
                state="placeholder"
                type="default"
              />
              <InputField
                className="input-field-5"
                destructive={false}
                helpIcon={false}
                hintText={false}
                inputFieldBaseInputClassName="input-field-8"
                inputFieldBaseLabelClassName="input-field-7"
                inputFieldBaseText="••••••••"
                inputFieldBaseText1="Password"
                inputFieldBaseTextClassName="input-field-6"
                label
                leadingIcon={false}
                state="placeholder"
                type="default"
              />
            </div>

            <div className="row">
              <Button
                buttonBaseSizeMdIconLeadingClassName="button-6"
                buttonBaseText="Forgot password"
                buttonBaseTextClassName="button-5"
                className="button-4"
                destructive={false}
                hierarchy="link-color"
                icon="false"
                size="md"
                state="default"
              />
            </div>

            <div className="button-wrapper">
              <Button
                buttonBaseSizeMdIconLeadingClassName="button-9"
                buttonBaseText="Sign in"
                buttonBaseTextClassName="button-8"
                className="button-7"
                destructive={false}
                hierarchy="primary"
                icon="false"
                size="lg"
                state="default"
              />
            </div>
          </div>

          <div className="row-2">
            <div className="text-14">Don’t have an account?</div>

            <Button
              buttonBaseSizeMdIconLeadingClassName="button-6"
              buttonBaseText="Sign up"
              buttonBaseTextClassName="button-5"
              className="button-4"
              destructive={false}
              hierarchy="link-color"
              icon="false"
              size="md"
              state="default"
            />
          </div>
        </div>

        <div className="content-9">
          <div className="check-items">
            <div className="frame-4">
              <div className="check-item-text">
                <img
                  className="check-icon"
                  alt="Check icon"
                  src="/img/check-icon-16.svg"
                />

                <div className="text-wrap">
                  <div className="text-15">Send unlimited photos</div>
                </div>
              </div>

              <div className="check-item-text">
                <img
                  className="check-icon"
                  alt="Check icon"
                  src="/img/check-icon-17.svg"
                />

                <div className="text-wrap">
                  <div className="text-15">Send unlimited voice messages</div>
                </div>
              </div>

              <div className="check-item-text">
                <img
                  className="check-icon"
                  alt="Check icon"
                  src="/img/check-icon-18-2.svg"
                />

                <div className="text-wrap">
                  <div className="text-15">Chat history view</div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-5">
            <div className="check-item-text">
              <img
                className="check-icon"
                alt="Check icon"
                src="/img/check-icon-16.svg"
              />

              <div className="text-wrap">
                <p className="text-15">Find matches according to interests</p>
              </div>
            </div>

            <div className="check-item-text">
              <img
                className="check-icon"
                alt="Check icon"
                src="/img/check-icon-16.svg"
              />

              <div className="text-wrap">
                <div className="text-15">Customer Support</div>
              </div>
            </div>

            <div className="check-item-text">
              <img
                className="check-icon"
                alt="Check icon"
                src="/img/check-icon-21.svg"
              />

              <div className="text-wrap">
                <div className="text-15">Customized avatars</div>
              </div>
            </div>
          </div>

          <div className="frame-6">
            <div className="check-item-text">
              <img
                className="check-icon"
                alt="Check icon"
                src="/img/check-icon-16.svg"
              />

              <div className="text-wrap">
                <p className="text-15">Appear at the top of the list</p>
              </div>
            </div>

            <div className="check-item-text">
              <img
                className="check-icon"
                alt="Check icon"
                src="/img/check-icon-23.svg"
              />

              <div className="text-wrap">
                <div className="text-15">Ad free</div>
              </div>
            </div>

            <div className="check-item-text">
              <img
                className="check-icon"
                alt="Check icon"
                src="/img/check-icon-24.svg"
              />

              <div className="text-wrap">
                <p className="text-15">React, reply, edit, unsend messages</p>
              </div>
            </div>
          </div>

          <div className="frame-6">
            <div className="check-item-text">
              <img
                className="check-icon"
                alt="Check icon"
                src="/img/check-icon-16.svg"
              />

              <div className="text-wrap">
                <div className="text-15">View message status</div>
              </div>
            </div>

            <div className="check-item-text">
              <img
                className="check-icon"
                alt="Check icon"
                src="/img/check-icon-23.svg"
              />

              <div className="text-wrap">
                <p className="text-15">Hide your own message status</p>
              </div>
            </div>

            <div className="check-item-text">
              <img
                className="check-icon"
                alt="Check icon"
                src="/img/check-icon-24.svg"
              />

              <div className="text-wrap">
                <div className="text-15">Control your online status</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
