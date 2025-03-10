import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";
import { Latop } from "../../components/Latop";
import "./style.css";

export const VipCreateAccount = () => {
  return (
    <div className="VIP-create-account">
      <div className="div-2">
        <Header
          className="header-instance"
          groupClassName="design-component-instance-node"
          groupClassNameOverride="header-2"
          groupWrapperClassName="header-4"
          hasFrame={false}
          mode="light"
          switcherToggleBasePressedTrueSizeMdClassName="header-3"
          user="standard"
          visible={false}
        />
        <div className="frame-2">
          <div className="text-wrapper-5">Terms &amp; Privacy Policy</div>

          <div className="text-wrapper-5">Contact us</div>

          <div className="text-wrapper-5">FAQ</div>
        </div>

        <div className="content-wrapper">
          <div className="content-5">
            <div className="text-and-supporting-wrapper">
              <div className="text-and-supporting-2">
                <div className="text-12">Create an account</div>

                <div className="supporting-text-2">
                  Please enter your details.
                </div>
              </div>
            </div>

            <div className="content-6">
              <div className="form-2">
                <InputField
                  className="input-field-instance"
                  destructive={false}
                  helpIcon={false}
                  hintText={false}
                  inputFieldBaseInputClassName="input-field-4"
                  inputFieldBaseLabelClassName="input-field-3"
                  inputFieldBaseText="Enter your username"
                  inputFieldBaseText1="Username"
                  inputFieldBaseTextClassName="input-field-2"
                  label
                  leadingIcon={false}
                  state="placeholder"
                  type="default"
                />
                <InputField
                  className="input-field-instance"
                  destructive={false}
                  helpIcon={false}
                  hintText={false}
                  inputFieldBaseInputClassName="input-field-4"
                  inputFieldBaseLabelClassName="input-field-3"
                  inputFieldBaseText="••••••••"
                  inputFieldBaseText1="Password"
                  inputFieldBaseTextClassName="input-field-2"
                  label
                  leadingIcon={false}
                  state="placeholder"
                  type="default"
                />
              </div>

              <InputField
                className="input-field-instance"
                destructive={false}
                helpIcon={false}
                hintText={false}
                inputFieldBaseInputClassName="input-field-4"
                inputFieldBaseLabelClassName="input-field-3"
                inputFieldBaseText="••••••••"
                inputFieldBaseText1="Confirm Password"
                inputFieldBaseTextClassName="input-field-2"
                label
                leadingIcon={false}
                state="placeholder"
                type="default"
              />
              <div className="actions">
                <Button
                  buttonBaseSizeMdIconLeadingClassName="button-3"
                  buttonBaseText="Sign up"
                  buttonBaseTextClassName="button-2"
                  className="button-instance"
                  destructive={false}
                  hierarchy="primary"
                  icon="false"
                  size="lg"
                  state="default"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overlap">
          <div className="ad-wrapper">
            <div className="ad">
              <div className="overlap-2">
                <div className="overlap-wrapper">
                  <div className="overlap-3">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-3">
                        <div className="ellipse" />

                        <div className="ellipse-2" />

                        <div className="ellipse-3" />
                      </div>
                    </div>

                    <div className="ellipse-4" />
                  </div>
                </div>

                <p className="sub-text">Take your website to the next level</p>
              </div>

              <div className="group-wrapper">
                <div className="group-copy-wrapper">
                  <div className="group-copy">
                    <img
                      className="group-4"
                      alt="Group"
                      src="/img/group-3-1.png"
                    />

                    <img
                      className="group-copy-2"
                      alt="Group copy"
                      src="/img/group-3-copy.png"
                    />

                    <img
                      className="group-copy-3"
                      alt="Group copy"
                      src="/img/group-3-copy-2-1.png"
                    />
                  </div>
                </div>
              </div>

              <Latop className="latop-instance" />
            </div>
          </div>

          <div className="frame-3">
            <div className="text-wrapper-5">Terms &amp; Privacy Policy</div>

            <div className="text-wrapper-5">Contact us</div>

            <div className="text-wrapper-5">FAQ</div>
          </div>
        </div>
      </div>
    </div>
  );
};
