import React from "react";
import { ButtonBase } from "../../components/ButtonBase";
import { InputFieldBase } from "../../components/InputFieldBase";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { Latop } from "../../components/Latop";
import { SizeMdHierarchyWrapper } from "../../components/SizeMdHierarchyWrapper";
import { Switcher } from "../../components/Switcher";
import "./style.css";

export const LandingPageLight = () => {
  return (
    <div className="landing-page-light">
      <div className="div-20">
        <header className="header-36">
          <div className="text-wrapper-108">chativy.</div>

          <div className="group-222">
            <div className="group-223">
              <Switcher
                className="switcher-25"
                mode="light"
                pressed={false}
                size="sm"
                state="default"
                supportingText={false}
                text
                text1="Dark mode"
                textClassName="switcher-26"
                toggleBasePressedTrueSizeMdClassName="switcher-27"
              />
              <div className="group-224">
                <SizeMdHierarchyWrapper
                  buttonBaseSizeMdIconLeadingClassName="button-58"
                  buttonBaseText="VIP Membership"
                  className="button-57"
                  destructive={false}
                  hierarchy="primary"
                  icon="false"
                  size="lg"
                  state="default"
                />
                <LanguageSwitcher
                  className="language-switcher-7"
                  mode="light"
                  state="default"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="frame-166">
          <div className="frame-167">
            <div className="group-225">
              <div className="overlap-group-35">
                <div className="group-226">
                  <img
                    className="union-7"
                    alt="Union"
                    src="/img/union-10.svg"
                  />

                  <img
                    className="union-8"
                    alt="Union"
                    src="/img/union-11.svg"
                  />
                </div>

                <div className="ellipse-31" />

                <div className="ellipse-32" />

                <img className="union-9" alt="Union" src="/img/union-6.svg" />

                <div className="ellipse-33" />

                <img className="union-10" alt="Union" src="/img/union-7.svg" />

                <img className="union-11" alt="Union" src="/img/union-8.svg" />

                <img className="union-12" alt="Union" src="/img/union-9.svg" />

                <div className="group-227">
                  <div className="ellipse-34" />

                  <div className="ellipse-35" />

                  <div className="ellipse-36" />
                </div>
              </div>
            </div>
          </div>

          <div className="group-228">
            <div className="frame-168">
              <div className="group-229">
                <p className="text-anonymously-2">
                  <span className="text-wrapper-109">Text </span>

                  <span className="text-wrapper-110">
                    Anonymously
                    <br />
                  </span>

                  <span className="text-wrapper-109">with </span>

                  <span className="text-wrapper-111">no registration </span>
                </p>

                <p className="text-wrapper-112">
                  Unleash your creativity and connect with like-minded
                  individuals on our chatting website, where conversations come
                  to life.
                </p>
              </div>

              <div className="group-230">
                <ButtonBase
                  className="button-base-6"
                  icon="false"
                  size="xl"
                  text="Start Chat"
                  textClassName="button-base-7"
                />
                <div className="input-field-29">
                  <InputFieldBase
                    className="input-field-base-20"
                    destructive={false}
                    hasHintText={false}
                    hasLabel={false}
                    hasPaymentMethodIcon={false}
                    hasTextInput={false}
                    inputClassName="input-field-base-21"
                    text1="Type your name"
                    textClassName="input-field-base-22"
                    type="default"
                  />
                </div>
              </div>
            </div>

            <div className="ad-19">
              <div className="overlap-group-36">
                <img
                  className="group-231"
                  alt="Group"
                  src="/img/group-39774-1.png"
                />

                <p className="sub-text-19">
                  Take your website to the next level
                </p>
              </div>

              <img
                className="mask-group-14"
                alt="Mask group"
                src="/img/mask-group-1.png"
              />

              <button className="primary-BTN-large-8">
                <div className="text-wrapper-113">Get started</div>
              </button>
            </div>
          </div>
        </div>

        <div className="overlap-50">
          <div className="frame-169">
            <div className="ad-20">
              <div className="overlap-51">
                <div className="group-232">
                  <div className="overlap-52">
                    <div className="group-233">
                      <div className="overlap-group-37">
                        <div className="ellipse-37" />

                        <div className="ellipse-38" />

                        <div className="ellipse-39" />
                      </div>
                    </div>

                    <div className="ellipse-40" />
                  </div>
                </div>

                <p className="sub-text-20">
                  Take your website to the next level
                </p>
              </div>

              <div className="group-234">
                <div className="group-235">
                  <div className="group-copy-19">
                    <img
                      className="group-236"
                      alt="Group"
                      src="/img/group-3-1.png"
                    />

                    <img
                      className="group-copy-20"
                      alt="Group copy"
                      src="/img/group-3-copy-1.png"
                    />

                    <img
                      className="group-copy-21"
                      alt="Group copy"
                      src="/img/group-3-copy-2-1.png"
                    />
                  </div>
                </div>
              </div>

              <Latop className="latop-7" />
            </div>
          </div>

          <div className="frame-170">
            <div className="text-wrapper-114">Terms &amp; Privacy Policy</div>

            <div className="text-wrapper-114">Contact us</div>

            <div className="text-wrapper-114">FAQ</div>
          </div>
        </div>
      </div>
    </div>
  );
};
