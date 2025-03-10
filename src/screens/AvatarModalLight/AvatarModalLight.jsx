import React from "react";
import { Button } from "../../components/Button";
import { InputFieldBase } from "../../components/InputFieldBase";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { SizeMdHierarchyWrapper } from "../../components/SizeMdHierarchyWrapper";
import { Switcher } from "../../components/Switcher";
import "./style.css";

export const AvatarModalLight = () => {
  return (
    <div className="avatar-modal-light">
      <div className="overlap-wrapper-4">
        <div className="overlap-25">
          <header className="header-19">
            <div className="text-wrapper-51">chativy.</div>

            <div className="group-86">
              <div className="group-87">
                <Switcher
                  className="switcher-13"
                  mode="light"
                  pressed={false}
                  size="sm"
                  state="default"
                  supportingText={false}
                  text
                  text1="Dark mode"
                  textClassName="switcher-14"
                  toggleBasePressedTrueSizeMdClassName="switcher-15"
                />
                <div className="group-88">
                  <SizeMdHierarchyWrapper
                    buttonBaseSizeMdIconLeadingClassName="button-28"
                    buttonBaseText="VIP Membership"
                    className="button-27"
                    destructive={false}
                    hierarchy="primary"
                    icon="false"
                    size="lg"
                    state="default"
                  />
                  <LanguageSwitcher
                    className="language-switcher-5"
                    mode="light"
                    state="default"
                  />
                </div>
              </div>
            </div>
          </header>

          <div className="frame-68">
            <div className="text-wrapper-52">Terms &amp; Privacy Policy</div>

            <div className="text-wrapper-52">Contact us</div>

            <div className="text-wrapper-52">FAQ</div>
          </div>

          <div className="header-section">
            <div className="container-4">
              <div className="heading-and-wrapper">
                <div className="heading-and-3">
                  <div className="heading-and-4">
                    <div className="subheading">Settings</div>

                    <div className="heading-3">My details</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="container-5">
              <div className="section-header-3">
                <div className="content-26">
                  <div className="text-and-supporting-11">
                    <div className="text-44">Personal info</div>

                    <p className="supporting-text-11">
                      You can only update your interests.
                    </p>
                  </div>

                  <div className="actions-4">
                    <Button
                      buttonBaseSizeMdIconLeadingClassName="button-31"
                      buttonBaseText="Cancel"
                      buttonBaseTextClassName="button-30"
                      className="button-29"
                      destructive={false}
                      hierarchy="secondary-gray"
                      icon="false"
                      size="md"
                      state="default"
                    />
                    <Button
                      buttonBaseSizeMdIconLeadingClassName="button-33"
                      buttonBaseText="Save"
                      buttonBaseTextClassName="button-32"
                      className="button-29"
                      destructive={false}
                      hierarchy="primary"
                      icon="false"
                      size="md"
                      state="default"
                    />
                  </div>
                </div>

                <div className="divider-7" />
              </div>

              <div className="form-4">
                <div className="content-27">
                  <div className="text-45">Username</div>

                  <div className="input-field-18">
                    <InputFieldBase
                      className="input-field-base-10"
                      destructive={false}
                      hasHintText={false}
                      hasLabel={false}
                      hasPaymentMethodIcon={false}
                      hasTextInput={false}
                      inputClassName="input-field-base-11"
                      text1="Montgo980"
                      textClassName="input-field-base-12"
                      type="default"
                    />
                  </div>
                </div>

                <div className="divider-7" />

                <div className="group-89">
                  <div className="overlap-group-20">
                    <div className="content-28">
                      <div className="text-45">Age</div>

                      <div className="input-field-19">
                        <InputFieldBase
                          className="input-field-base-10"
                          destructive={false}
                          hasHintText={false}
                          hasLabel={false}
                          hasPaymentMethodIcon={false}
                          hasTextInput={false}
                          inputClassName="input-field-base-11"
                          text1="27"
                          textClassName="input-field-base-12"
                          type="default"
                        />
                      </div>
                    </div>

                    <div className="content-29">
                      <div className="text-45">Gender</div>

                      <div className="input-field-20">
                        <InputFieldBase
                          className="input-field-base-10"
                          destructive={false}
                          hasHintText={false}
                          hasLabel={false}
                          hasPaymentMethodIcon={false}
                          hasTextInput={false}
                          inputClassName="input-field-base-11"
                          text1="Female"
                          textClassName="input-field-base-12"
                          type="default"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="divider-7" />

                <div className="content-27">
                  <div className="text-45">Country</div>

                  <div className="input-with-label-7">
                    <div className="input-11">
                      <div className="content-30">
                        <img className="US-2" alt="Us" src="/img/us-1.svg" />

                        <div className="text-46">United States</div>
                      </div>

                      <div className="help-icon-2">
                        <img
                          className="chevron-down-3"
                          alt="Chevron down"
                          src="/img/chevron-down-5.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="divider-7" />

                <div className="content-27">
                  <div className="text-and-supporting-12">
                    <div className="text-47">Interest</div>

                    <p className="supporting-text-11">
                      You can add new Interests or remove old ones
                    </p>
                  </div>

                  <div className="frame-69">
                    <div className="tag-11">
                      <div className="text-wrapper-53">orange</div>

                      <img className="x-2" alt="X" src="/img/x.svg" />
                    </div>

                    <div className="tag-11">
                      <div className="text-wrapper-54">lime</div>

                      <img className="x-2" alt="X" src="/img/x.svg" />
                    </div>

                    <div className="tag-11">
                      <div className="text-wrapper-55">gold</div>

                      <img className="x-2" alt="X" src="/img/x.svg" />
                    </div>

                    <div className="button-34">
                      <div className="button-base-2">
                        <div className="circle-4" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="divider-7" />
              </div>
            </div>
          </div>

          <img
            className="rectangle-3"
            alt="Rectangle"
            src="/img/rectangle-2299-3.svg"
          />

          <div className="group-90">
            <div className="frame-70">
              <div className="frame-71">
                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="avatar-14">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>

                <div className="user-wrapper">
                  <img className="user-8" alt="User" src="/img/user-4.svg" />
                </div>
              </div>

              <button className="button-base-3">
                <div className="text-48">Save</div>
              </button>
            </div>

            <div className="frame-72">
              <div className="frame-73">
                <div className="text-wrapper-56">Choose Avatar</div>
              </div>

              <div className="frame-74">
                <img
                  className="x-circle"
                  alt="X circle"
                  src="/img/x-circle-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
