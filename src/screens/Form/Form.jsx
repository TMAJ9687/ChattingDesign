import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputFieldBase } from "../../components/InputFieldBase";
import { Latop } from "../../components/Latop";
import { MailWrapper } from "../../components/MailWrapper";
import { MessageCircleWrapper } from "../../components/MessageCircleWrapper";
import "./style.css";

export const Form = () => {
  return (
    <div className="form">
      <div className="div-9">
        <Header
          className="header-17"
          icon={<MessageCircleWrapper />}
          mode="light"
          switcherToggleBasePressedTrueSizeMdClassName="header-18"
          user="standard"
        />
        <div className="overlap-22">
          <div className="frame-66">
            <div className="ad-6">
              <div className="overlap-23">
                <div className="group-81">
                  <div className="overlap-24">
                    <div className="group-82">
                      <div className="overlap-group-19">
                        <div className="ellipse-9" />

                        <div className="ellipse-10" />

                        <div className="ellipse-11" />
                      </div>
                    </div>

                    <div className="ellipse-12" />
                  </div>
                </div>

                <p className="sub-text-6">
                  Take your website to the next level
                </p>
              </div>

              <div className="group-83">
                <div className="group-84">
                  <div className="group-copy-7">
                    <img
                      className="group-85"
                      alt="Group"
                      src="/img/group-3-1.png"
                    />

                    <img
                      className="group-copy-8"
                      alt="Group copy"
                      src="/img/group-3-copy.png"
                    />

                    <img
                      className="group-copy-9"
                      alt="Group copy"
                      src="/img/group-3-copy-2-1.png"
                    />
                  </div>
                </div>
              </div>

              <Latop className="latop-3" />
            </div>
          </div>

          <div className="frame-67">
            <div className="text-wrapper-47">Terms &amp; Privacy Policy</div>

            <div className="text-wrapper-47">Contact us</div>

            <div className="text-wrapper-47">FAQ</div>
          </div>
        </div>

        <div className="content-24">
          <div className="content-25">
            <div className="heading-and-2">
              <div className="heading-2">Get in touch</div>

              <p className="supporting-text-10">
                Our friendly team would love to hear from you.
              </p>
            </div>

            <div className="div-10">
              <div className="form-fields">
                <div className="input-field-16">
                  <div className="div-11">
                    <div className="div-11">
                      <div className="label-2">Email</div>

                      <div className="input-field-17">
                        <InputFieldBase
                          className="input-field-base-7"
                          destructive={false}
                          hasHintText={false}
                          hasLabel={false}
                          hasTextInput={false}
                          icon={<MailWrapper />}
                          inputClassName="input-field-base-8"
                          text1="jason123@gmail.com"
                          textClassName="input-field-base-9"
                          type="default"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="textarea-input-field">
                  <div className="div-12">
                    <div className="div-12">
                      <div className="label-2">Message</div>

                      <div className="textarea-input-field-wrapper">
                        <div className="div-12">
                          <div className="div-12">
                            <div className="input-10">
                              <div className="text-42">Enter here</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="checkbox">
                  <div className="checkbox-base-wrapper">
                    <div className="checkbox-base" />
                  </div>

                  <p className="text-43">
                    <span className="text-wrapper-48">
                      You agree to our friendly{" "}
                    </span>

                    <span className="text-wrapper-49">privacy policy</span>

                    <span className="text-wrapper-50">.</span>
                  </p>
                </div>
              </div>

              <div className="actions-3">
                <Button
                  buttonBaseSizeMdIconLeadingClassName="button-26"
                  buttonBaseText="Send message"
                  buttonBaseTextClassName="button-25"
                  className="button-24"
                  destructive={false}
                  hierarchy="primary"
                  icon="false"
                  size="xl"
                  state="default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
