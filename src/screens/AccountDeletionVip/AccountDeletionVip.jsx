import React from "react";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { InputFieldBase } from "../../components/InputFieldBase";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { MailWrapper } from "../../components/MailWrapper";
import { SizeMdHierarchyWrapper } from "../../components/SizeMdHierarchyWrapper";
import { Switcher } from "../../components/Switcher";
import { User } from "../../icons/User";
import "./style.css";

export const AccountDeletionVip = () => {
  return (
    <div className="account-deletion-VIP">
      <div className="overlap-wrapper-2">
        <div className="overlap-6">
          <header className="header-11">
            <div className="text-wrapper-6">chativy.</div>

            <div className="group-9">
              <div className="group-10">
                <div className="group-11">
                  <Switcher
                    className="switcher-7"
                    mode="light"
                    pressed={false}
                    size="sm"
                    state="default"
                    supportingText={false}
                    text
                    text1="Dark mode"
                    toggleBasePressedTrueSizeMdClassName="switcher-8"
                  />
                  <LanguageSwitcher
                    className="language-switcher-3"
                    mode="light"
                    state="default"
                  />
                </div>

                <div className="group-12">
                  <div className="group-13">
                    <div className="avatar-label-group-2">
                      <div className="avatar-2">
                        <div className="overlap-group-5">
                          <User className="icon-instance-node" />
                          <div className="avatar-online-2" />
                        </div>
                      </div>

                      <div className="text-and-supporting-4">
                        <div className="text-16">Olivia Rhye</div>

                        <div className="supporting-text-4">
                          olivia@untitledui.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="frame-7">
            <div className="text-wrapper-7">Terms &amp; Privacy Policy</div>

            <div className="text-wrapper-7">Contact us</div>

            <div className="text-wrapper-7">FAQ</div>
          </div>

          <div className="main">
            <div className="container-wrapper">
              <div className="container">
                <div className="div-4">
                  <div className="text-17">Settings</div>
                </div>

                <div className="horizontal-tabs">
                  <div className="overlap-group-6">
                    <div className="divider" />

                    <div className="tabs">
                      <div className="tab-button-base">
                        <div className="content-10">
                          <div className="text-18">My details</div>
                        </div>

                        <div className="bottom-border" />
                      </div>

                      <div className="tab-button-base">
                        <div className="content-10">
                          <div className="text-19">Membership</div>
                        </div>

                        <div className="bottom-border-2" />
                      </div>

                      <div className="tab-button-base">
                        <div className="content-10">
                          <div className="text-19">Password</div>
                        </div>

                        <div className="bottom-border-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-wrapper">
              <div className="container">
                <div className="section-header">
                  <div className="content-11">
                    <div className="text-and-supporting-5">
                      <div className="text-20">Personal info</div>

                      <p className="supporting-text-5">
                        Update your avatar and personal details here.
                      </p>
                    </div>

                    <div className="actions-2">
                      <Button
                        buttonBaseSizeMdIconLeadingClassName="button-11"
                        buttonBaseText="Cancel"
                        buttonBaseTextClassName="design-component-instance-node-2"
                        className="button-10"
                        destructive={false}
                        hierarchy="secondary-gray"
                        icon="false"
                        size="md"
                        state="default"
                      />
                      <Button
                        buttonBaseSizeMdIconLeadingClassName="button-13"
                        buttonBaseText="Save"
                        buttonBaseTextClassName="button-12"
                        className="button-10"
                        destructive={false}
                        hierarchy="primary"
                        icon="false"
                        size="md"
                        state="default"
                      />
                    </div>
                  </div>

                  <div className="divider-2" />
                </div>

                <div className="div-4">
                  <div className="content-12">
                    <div className="text-and-supporting-6">
                      <div className="text-21">Your Avatar</div>

                      <p className="supporting-text-5">
                        This will be displayed on your profile.
                      </p>
                    </div>

                    <div className="avatar-and-file">
                      <div className="group-14">
                        <div className="group-15">
                          <img
                            className="avatar-3"
                            alt="Avatar"
                            src="/img/avatar-4-2.svg"
                          />

                          <div className="group-16">
                            <SizeMdHierarchyWrapper
                              buttonBaseText="Change Avatar"
                              className="button-14"
                              destructive={false}
                              hierarchy="secondary-color"
                              icon="false"
                              size="sm"
                              state="default"
                            />
                            <SizeMdHierarchyWrapper
                              buttonBaseText="Remove Avatar"
                              className="button-15"
                              destructive={false}
                              hierarchy="secondary-gray"
                              icon="false"
                              size="sm"
                              state="default"
                            />
                          </div>
                        </div>
                      </div>

                      <Switcher
                        className="switcher-9"
                        mode="light"
                        pressed={false}
                        size="sm"
                        state="default"
                        supportingText={false}
                        text
                        text1="Online Status"
                        textClassName="switcher-10"
                        toggleBasePressedTrueSizeMdClassName="switcher-8"
                      />
                    </div>
                  </div>

                  <div className="content-12">
                    <div className="text-22">Username</div>

                    <div className="input-fields">
                      <InputField
                        className="input-field-9"
                        destructive={false}
                        helpIcon={false}
                        hintText={false}
                        inputFieldBaseInputClassName="design-component-instance-node-3"
                        inputFieldBaseText="Skuns"
                        inputFieldBaseTextClassName="input-field-10"
                        label={false}
                        leadingIcon={false}
                        state="filled"
                        type="default"
                      />
                    </div>
                  </div>

                  <div className="divider-2" />

                  <div className="content-12">
                    <div className="text-22">Email address</div>

                    <InputField
                      className="input-field-11"
                      destructive={false}
                      helpIcon={false}
                      hintText={false}
                      inputFieldBaseIcon={<MailWrapper />}
                      inputFieldBaseInputClassName="input-field-12"
                      inputFieldBaseText="Jasonmanson18@gmail.com"
                      inputFieldBaseTextClassName="input-field-10"
                      label={false}
                      leadingIcon
                      state="filled"
                      type="default"
                    />
                    <Button
                      buttonBaseSizeMdIconLeadingClassName="button-13"
                      buttonBaseText="Verify"
                      className="button-16"
                      destructive={false}
                      hierarchy="primary"
                      icon="false"
                      size="md"
                      state="default"
                    />
                  </div>

                  <div className="divider-2" />

                  <div className="group-17">
                    <div className="overlap-group-7">
                      <div className="content-13">
                        <div className="text-22">Age</div>

                        <div className="input-field-base-wrapper">
                          <InputFieldBase
                            className="input-field-base-2"
                            destructive={false}
                            hasHintText={false}
                            hasLabel={false}
                            hasPaymentMethodIcon={false}
                            hasTextInput={false}
                            inputClassName="design-component-instance-node-3"
                            text1="27"
                            textClassName="input-field-base-3"
                            type="default"
                          />
                        </div>
                      </div>

                      <div className="content-14">
                        <div className="text-22">Gender</div>

                        <div className="input-field-base-instance-wrapper">
                          <InputFieldBase
                            className="input-field-base-2"
                            destructive={false}
                            hasHintText={false}
                            hasLabel={false}
                            hasPaymentMethodIcon={false}
                            hasTextInput={false}
                            inputClassName="design-component-instance-node-3"
                            text1="Female"
                            textClassName="design-component-instance-node-2"
                            type="default"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="divider-2" />

                  <div className="content-12">
                    <div className="text-22">Country</div>

                    <div className="input-with-label-2">
                      <div className="input-2">
                        <div className="content-15">
                          <img className="US" alt="Us" src="/img/us.svg" />

                          <div className="text-23">United States</div>
                        </div>

                        <div className="chevron-down-wrapper">
                          <img
                            className="chevron-down-2"
                            alt="Chevron down"
                            src="/img/chevron-down-5.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="divider-2" />

                  <div className="group-18">
                    <div className="text-and-supporting-7">
                      <div className="text-21">Interest</div>

                      <p className="supporting-text-5">
                        You can add new Interests or remove old ones
                      </p>
                    </div>

                    <div className="frame-8">
                      <div className="tag">
                        <div className="text-wrapper-8">orange</div>

                        <img className="x" alt="X" src="/img/x.svg" />
                      </div>

                      <div className="tag">
                        <div className="text-wrapper-9">lime</div>

                        <img className="x" alt="X" src="/img/x.svg" />
                      </div>

                      <div className="tag">
                        <div className="text-wrapper-10">gold</div>

                        <img className="x" alt="X" src="/img/x.svg" />
                      </div>

                      <div className="button-base-wrapper">
                        <div className="circle-wrapper">
                          <div className="circle-3" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="divider-2" />

                  <div className="button-instance-wrapper">
                    <SizeMdHierarchyWrapper
                      buttonBaseText="Delete Account"
                      className="button-10"
                      destructive
                      hierarchy="primary"
                      icon="false"
                      size="sm"
                      state="default"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            className="rectangle"
            alt="Rectangle"
            src="/img/rectangle-2299-2.svg"
          />

          <div className="modal">
            <div className="div-4">
              <div className="featured-icon">
                <img
                  className="alert-circle-2"
                  alt="Alert circle"
                  src="/img/alert-circle-165.svg"
                />
              </div>

              <div className="text-and-supporting-8">
                <div className="text-24">Delete Account</div>

                <div className="flexcontainer">
                  <p className="span-wrapper">
                    <span className="span">
                      Are you sure you want to delete this conversation? This
                      action cannot be undone.
                      <br />
                    </span>
                  </p>

                  <p className="span-wrapper">
                    <span className="text-wrapper-11">
                      Deleting your account will remove all the information
                      associated with it: chat history, shared files, your
                      profile and information, your membership. In case of
                      active membership, money will not be refunded.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <Button
                buttonBaseSizeMdIconLeadingClassName="button-18"
                buttonBaseText="Cancel"
                buttonBaseTextClassName="design-component-instance-node-2"
                className="button-17"
                destructive={false}
                hierarchy="secondary-gray"
                icon="false"
                size="lg"
                state="default"
              />
              <Button
                buttonBaseSizeMdIconLeadingClassName="button-20"
                buttonBaseText="Delete"
                buttonBaseTextClassName="button-19"
                className="button-17"
                destructive
                hierarchy="primary"
                icon="false"
                size="lg"
                state="default"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
