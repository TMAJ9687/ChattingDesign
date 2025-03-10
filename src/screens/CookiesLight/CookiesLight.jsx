import React from "react";
import { Button } from "../../components/Button";
import { ButtonBase } from "../../components/ButtonBase";
import { InputFieldBase } from "../../components/InputFieldBase";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { Latop } from "../../components/Latop";
import { SizeMdHierarchyWrapper } from "../../components/SizeMdHierarchyWrapper";
import { Switcher } from "../../components/Switcher";
import "./style.css";

export const CookiesLight = () => {
  return (
    <div className="cookies-light">
      <div className="div-13">
        <header className="header-20">
          <div className="text-wrapper-57">chativy.</div>

          <div className="group-91">
            <div className="group-92">
              <Switcher
                className="switcher-16"
                mode="light"
                pressed={false}
                size="sm"
                state="default"
                supportingText={false}
                text
                text1="Dark mode"
                textClassName="switcher-17"
                toggleBasePressedTrueSizeMdClassName="switcher-18"
              />
              <div className="group-93">
                <SizeMdHierarchyWrapper
                  buttonBaseSizeMdIconLeadingClassName="button-36"
                  buttonBaseText="VIP Membership"
                  className="button-35"
                  destructive={false}
                  hierarchy="primary"
                  icon="false"
                  size="lg"
                  state="default"
                />
                <LanguageSwitcher
                  className="language-switcher-6"
                  mode="light"
                  state="default"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="overlap-26">
          <div className="frame-75">
            <div className="frame-76">
              <div className="group-94">
                <div className="overlap-group-21">
                  <div className="group-95">
                    <img className="union" alt="Union" src="/img/union-4.svg" />

                    <img
                      className="union-2"
                      alt="Union"
                      src="/img/union-5.svg"
                    />
                  </div>

                  <div className="ellipse-13" />

                  <div className="ellipse-14" />

                  <img className="union-3" alt="Union" src="/img/union.svg" />

                  <div className="ellipse-15" />

                  <img className="union-4" alt="Union" src="/img/union-1.svg" />

                  <img className="union-5" alt="Union" src="/img/union-2.svg" />

                  <img className="union-6" alt="Union" src="/img/union-3.svg" />

                  <div className="group-96">
                    <div className="ellipse-16" />

                    <div className="ellipse-17" />

                    <div className="ellipse-18" />
                  </div>
                </div>
              </div>
            </div>

            <div className="group-97">
              <div className="frame-77">
                <div className="group-98">
                  <p className="text-anonymously">
                    <span className="text-wrapper-58">Text </span>

                    <span className="text-wrapper-59">
                      Anonymously
                      <br />
                    </span>

                    <span className="text-wrapper-58">with </span>

                    <span className="text-wrapper-60">no registration </span>
                  </p>

                  <p className="text-wrapper-61">
                    Unleash your creativity and connect with like-minded
                    individuals on our chatting website, where conversations
                    come to life.
                  </p>
                </div>

                <div className="group-99">
                  <ButtonBase
                    className="button-base-instance"
                    icon="false"
                    size="xl"
                    text="Start Chat"
                    textClassName="button-base-4"
                  />
                  <div className="input-field-21">
                    <InputFieldBase
                      className="input-field-base-13"
                      destructive={false}
                      hasHintText={false}
                      hasLabel={false}
                      hasPaymentMethodIcon={false}
                      hasTextInput={false}
                      inputClassName="input-field-base-14"
                      text1="Type your name"
                      textClassName="input-field-base-15"
                      type="default"
                    />
                  </div>
                </div>
              </div>

              <div className="ad-7">
                <div className="overlap-group-22">
                  <img
                    className="group-100"
                    alt="Group"
                    src="/img/group-39774-1.png"
                  />

                  <p className="sub-text-7">
                    Take your website to the next level
                  </p>
                </div>

                <img
                  className="mask-group-5"
                  alt="Mask group"
                  src="/img/mask-group-1.png"
                />

                <button className="primary-BTN-large-3">
                  <div className="text-wrapper-62">Get started</div>
                </button>
              </div>
            </div>
          </div>

          <div className="frame-78">
            <div className="ad-8">
              <div className="overlap-27">
                <div className="group-101">
                  <div className="overlap-28">
                    <div className="group-102">
                      <div className="overlap-group-23">
                        <div className="ellipse-19" />

                        <div className="ellipse-20" />

                        <div className="ellipse-21" />
                      </div>
                    </div>

                    <div className="ellipse-22" />
                  </div>
                </div>

                <p className="sub-text-8">
                  Take your website to the next level
                </p>
              </div>

              <div className="group-103">
                <div className="group-104">
                  <div className="group-copy-10">
                    <img
                      className="group-105"
                      alt="Group"
                      src="/img/group-3-1.png"
                    />

                    <img
                      className="group-copy-11"
                      alt="Group copy"
                      src="/img/group-3-copy.png"
                    />

                    <img
                      className="group-copy-12"
                      alt="Group copy"
                      src="/img/group-3-copy-2-1.png"
                    />
                  </div>
                </div>
              </div>

              <Latop className="latop-4" />
            </div>
          </div>

          <div className="frame-79">
            <div className="text-wrapper-63">Terms &amp; Privacy Policy</div>

            <div className="text-wrapper-63">Contact us</div>

            <div className="text-wrapper-63">FAQ</div>
          </div>

          <div className="modal-2">
            <div className="content-31">
              <div className="material-symbols-wrapper">
                <img
                  className="material-symbols"
                  alt="Material symbols"
                  src="/img/material-symbols-cookie-outline-1.svg"
                />
              </div>

              <div className="text-and-supporting-13">
                <div className="text-49">Cookies</div>

                <p className="supporting-text-12">
                  We use cookies to give our users the best user experience
                  possible.
                </p>
              </div>
            </div>

            <div className="modal-actions-2">
              <Button
                buttonBaseSizeMdIconLeadingClassName="button-38"
                buttonBaseText="Ok"
                className="button-37"
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
    </div>
  );
};
