import React from "react";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { Switcher } from "../../components/Switcher";
import { User } from "../../icons/User";
import "./style.css";

export const AccountForStandard = () => {
  return (
    <div className="account-for-standard">
      <div className="div-6">
        <div className="header-14">
          <div className="text-wrapper-34">chativy.</div>

          <div className="group-59">
            <div className="group-60">
              <div className="group-61">
                <Switcher
                  className="switcher-11"
                  mode="light"
                  pressed={false}
                  size="sm"
                  state="default"
                  supportingText={false}
                  text
                  text1="Dark mode"
                  toggleBasePressedTrueSizeMdClassName="switcher-12"
                />
                <LanguageSwitcher
                  className="language-switcher-4"
                  mode="light"
                  state="default"
                />
              </div>

              <div className="group-62">
                <div className="group-63">
                  <div className="avatar-label-group-3">
                    <div className="avatar-11">
                      <div className="overlap-group-14">
                        <User className="user-6" />
                        <div className="avatar-online-7" />
                      </div>
                    </div>

                    <div className="text-and-supporting-9">
                      <div className="text-33">Olivia Rhye</div>

                      <div className="supporting-text-6">
                        olivia@untitledui.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-2">
          <div className="container-wrapper-2">
            <div className="container-3">
              <div className="page-header-2">
                <div className="text-34">Settings</div>
              </div>

              <div className="horizontal-tabs-3">
                <div className="overlap-group-15">
                  <div className="divider-4" />

                  <div className="tabs-3">
                    <div className="tab-button-base-3">
                      <div className="content-21">
                        <div className="text-35">My details</div>
                      </div>

                      <div className="bottom-border-5" />
                    </div>

                    <div className="tab-button-base-3">
                      <div className="content-21">
                        <div className="text-36">Membership</div>
                      </div>

                      <div className="bottom-border-6" />
                    </div>

                    <div className="tab-button-base-3">
                      <div className="content-21">
                        <div className="text-37">Password</div>
                      </div>

                      <div className="bottom-border-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-wrapper-2">
            <div className="container-3">
              <div className="section-header-2">
                <div className="div-7">
                  <div className="text-and-supporting-10">
                    <div className="group-64">
                      <div className="overlap-group-16">
                        <div className="tag-7">
                          <div className="cyan-3">Active</div>
                        </div>

                        <div className="text-38">VIP Membership</div>
                      </div>
                    </div>

                    <div className="group-65">
                      <p className="supporting-text-7">
                        Last Updated: 12 June 2024
                      </p>

                      <p className="supporting-text-8">
                        Exp. Date: 12 October 2024
                      </p>
                    </div>
                  </div>
                </div>

                <div className="divider-5" />
              </div>

              <div className="pricing-tier-card">
                <div className="header-15">
                  <div className="price">
                    <div className="price-2">$20.99/6mth</div>
                  </div>

                  <div className="heading-and">
                    <div className="heading">$3.50/mth</div>

                    <div className="supporting-text-9">
                      Billed every 6 month.
                    </div>
                  </div>
                </div>

                <div className="content-22">
                  <div className="check-items-2">
                    <div className="div-7">
                      <div className="check-item-text-2">
                        <img
                          className="check-icon-2"
                          alt="Check icon"
                          src="/img/check-icon-16-3.svg"
                        />

                        <div className="text-wrap-2">
                          <div className="text-39">Send unlimited photos</div>
                        </div>
                      </div>

                      <div className="check-item-text-2">
                        <img
                          className="check-icon-2"
                          alt="Check icon"
                          src="/img/check-icon-17-2.svg"
                        />

                        <div className="text-wrap-2">
                          <div className="text-39">
                            Send unlimited voice messages
                          </div>
                        </div>
                      </div>

                      <div className="check-item-text-2">
                        <img
                          className="check-icon-2"
                          alt="Check icon"
                          src="/img/check-icon-18.svg"
                        />

                        <div className="text-wrap-2">
                          <div className="text-39">Chat history view</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="frame-50">
                    <div className="check-item-text-2">
                      <img
                        className="check-icon-2"
                        alt="Check icon"
                        src="/img/check-icon-16-3.svg"
                      />

                      <div className="text-wrap-2">
                        <p className="text-39">
                          Find matches according to interests
                        </p>
                      </div>
                    </div>

                    <div className="check-item-text-2">
                      <img
                        className="check-icon-2"
                        alt="Check icon"
                        src="/img/check-icon-16-3.svg"
                      />

                      <div className="text-wrap-2">
                        <div className="text-39">Customer Support</div>
                      </div>
                    </div>

                    <div className="check-item-text-2">
                      <img
                        className="check-icon-2"
                        alt="Check icon"
                        src="/img/check-icon-21-2.svg"
                      />

                      <div className="text-wrap-2">
                        <div className="text-39">Customized avatars</div>
                      </div>
                    </div>
                  </div>

                  <div className="frame-51">
                    <div className="check-item-text-2">
                      <img
                        className="check-icon-2"
                        alt="Check icon"
                        src="/img/check-icon-16-3.svg"
                      />

                      <div className="text-wrap-2">
                        <p className="text-39">Appear at the top of the list</p>
                      </div>
                    </div>

                    <div className="check-item-text-2">
                      <img
                        className="check-icon-2"
                        alt="Check icon"
                        src="/img/check-icon-23-2.svg"
                      />

                      <div className="text-wrap-2">
                        <div className="text-39">Ad free</div>
                      </div>
                    </div>

                    <div className="check-item-text-2">
                      <img
                        className="check-icon-2"
                        alt="Check icon"
                        src="/img/check-icon-24-2.svg"
                      />

                      <div className="text-wrap-2">
                        <p className="text-39">
                          React, reply, edit, unsend messages
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="frame-51">
                    <div className="check-item-text-2">
                      <img
                        className="check-icon-2"
                        alt="Check icon"
                        src="/img/check-icon-16-3.svg"
                      />

                      <div className="text-wrap-2">
                        <div className="text-39">View message status</div>
                      </div>
                    </div>

                    <div className="check-item-text-2">
                      <img
                        className="check-icon-2"
                        alt="Check icon"
                        src="/img/check-icon-23-2.svg"
                      />

                      <div className="text-wrap-2">
                        <p className="text-39">Hide your own message status</p>
                      </div>
                    </div>

                    <div className="check-item-text-2">
                      <img
                        className="check-icon-2"
                        alt="Check icon"
                        src="/img/check-icon-24-2.svg"
                      />

                      <div className="text-wrap-2">
                        <div className="text-39">
                          Control your online status
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer" />
              </div>
            </div>
          </div>
        </div>

        <div className="frame-52">
          <div className="text-wrapper-35">Terms &amp; Privacy Policy</div>

          <div className="text-wrapper-35">Contact us</div>

          <div className="text-wrapper-35">FAQ</div>
        </div>
      </div>
    </div>
  );
};
