import React from "react";
import SideMenu2 from "../SideMenu2";
import Background from "../Background";
import Items from "../Items";
import ID from "../ID";
import Location from "../Location";
import Details from "../Details";
import SaveSetting from "../SaveSetting";
import On from "../On";
import "./Settings2.sass";

function Settings2(props) {
  const {
    spanText1,
    orderDiscussion,
    overlapGroup,
    setting,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    form,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    united,
    spanText16,
    chevronDown,
    spanText17,
    spanText18,
    spanText19,
    sideMenu2Props,
    backgroundProps,
    itemsProps,
    iD1Props,
    iD2Props,
    iD3Props,
    iD4Props,
    location1Props,
    location2Props,
    iD4Props2,
    iD5Props,
    saveSettingProps,
    on1Props,
    on2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="settings screen">
        <SideMenu2
          dashboard2Props={sideMenu2Props.dashboard2Props}
          foodOrder1Props={sideMenu2Props.foodOrder1Props}
          foodOrder2Props={sideMenu2Props.foodOrder2Props}
          foodOrder3Props={sideMenu2Props.foodOrder3Props}
          foodOrder4Props={sideMenu2Props.foodOrder4Props}
        />
        <div className="flex-col">
          <div className="flex-row">
            <div className="settings-1 poppins-bold-thunder-36px">
              <span className="poppins-bold-thunder-36px">{spanText1}</span>
            </div>
            <div className="menu">
              <div className="overlap-group1">
                <div className="ellipse-7"></div>
                <img className="order-discussion" src={orderDiscussion} alt="Order Discussion" />
              </div>
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
                <div className="ellipse-7-1"></div>
              </div>
              <img className="setting" src={setting} alt="Setting" />
              <div className="placeholder"></div>
            </div>
          </div>
          <div className="overlap-group3">
            <Background src={backgroundProps.src} />
            <div className="background"></div>
            <Items
              x0151Props={itemsProps.x0151Props}
              x0152Props={itemsProps.x0152Props}
              x0153Props={itemsProps.x0153Props}
              x0154Props={itemsProps.x0154Props}
              x0155Props={itemsProps.x0155Props}
              x0156Props={itemsProps.x0156Props}
            />
            <div className="form-1">
              <div className="restaurant-profile inter-bold-thunder-24px">
                <span className="inter-bold-thunder-24px">{spanText2}</span>
              </div>
              <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                <span className="poppins-normal-amethyst-smoke-14px">{spanText3}</span>
              </p>
              <div className="flex-row-1">
                <ID spanText1={iD1Props.spanText1} spanText2={iD1Props.spanText2} />
                <ID spanText1={iD2Props.spanText1} spanText2={iD2Props.spanText2} className={iD2Props.className} />
              </div>
              <div className="flex-row-2">
                <ID spanText1={iD3Props.spanText1} spanText2={iD3Props.spanText2} className={iD3Props.className} />
                <ID spanText1={iD4Props.spanText1} spanText2={iD4Props.spanText2} className={iD4Props.className} />
              </div>
              <div className="flex-row-3">
                <div className="photo">
                  <div className="flex-col-1">
                    <div className="restaurant-logo poppins-normal-amethyst-smoke-18px">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText4}</span>
                    </div>
                    <div className="placeholder-1"></div>
                  </div>
                  <div className="overlap-group-1">
                    <div className="change-photo poppins-medium-thunder-18px">
                      <span className="poppins-medium-thunder-18px">{spanText5}</span>
                    </div>
                  </div>
                  <div className="remove poppins-medium-thunder-18px">
                    <span className="poppins-medium-thunder-18px">{spanText6}</span>
                  </div>
                </div>
                <div className="doc">
                  <div className="company-permit-document poppins-normal-amethyst-smoke-18px">
                    <span className="poppins-normal-amethyst-smoke-18px">{spanText7}</span>
                  </div>
                  <div className="overlap-group-container">
                    <div className="overlap-group1-1">
                      <div className="drop-file-here poppins-normal-thunder-14px">
                        <span className="poppins-normal-thunder-14px">{spanText8}</span>
                      </div>
                    </div>
                    <div className="overlap-group-2">
                      <div className="upload poppins-medium-thunder-18px">
                        <span className="poppins-medium-thunder-18px">{spanText9}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="address">
                <div className="location">
                  <div className="location-1 poppins-normal-amethyst-smoke-18px">
                    <span className="poppins-normal-amethyst-smoke-18px">{spanText10}</span>
                  </div>
                  <div className="overlap-group-3">
                    <img className="form-2" src={form} alt="form" />
                    <Location src={location1Props.src} />
                    <Location src={location2Props.src} className={location2Props.className} />
                  </div>
                </div>
                <Details spanText1={iD4Props2.spanText1} spanText2={iD4Props2.spanText2} />
              </div>
              <div className="flex-row-4">
                <ID spanText1={iD5Props.spanText1} spanText2={iD5Props.spanText2} className={iD5Props.className} />
                <div className="flex-col-2">
                  <div className="password">
                    <div className="password-1 poppins-normal-amethyst-smoke-18px">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText11}</span>
                    </div>
                    <div className="overlap-group-4">
                      <div className="text-1 inter-bold-thunder-24px">
                        <span className="inter-bold-thunder-24px">{spanText12}</span>
                      </div>
                    </div>
                  </div>
                  <SaveSetting>{saveSettingProps.children}</SaveSetting>
                </div>
              </div>
            </div>
            <div className="preference">
              <div className="preference-1 poppins-semi-bold-thunder-18px">
                <span className="poppins-semi-bold-thunder-18px">{spanText13}</span>
              </div>
              <p className="lorem-ipsum-dolor-si-1 poppins-normal-amethyst-smoke-14px">
                <span className="poppins-normal-amethyst-smoke-14px">{spanText14}</span>
              </p>
              <div className="items">
                <div className="languange">
                  <div className="languange-1 poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText15}</span>
                  </div>
                  <div className="overlap-group-5">
                    <div className="group-436">
                      <div className="text">
                        <img className="united" src={united} alt="United" />
                        <div className="surname poppins-normal-thunder-14px">
                          <span className="poppins-normal-thunder-14px">{spanText16}</span>
                        </div>
                      </div>
                      <img className="chevron-down" src={chevronDown} alt="chevron-down" />
                    </div>
                    <div className="form-3"></div>
                  </div>
                </div>
                <div className="flex-row-5">
                  <div className="mode">
                    <div className="dark-mode poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText17}</span>
                    </div>
                    <div className="group-270">
                      <div className="form"></div>
                    </div>
                  </div>
                  <div className="notif">
                    <div className="notification poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText18}</span>
                    </div>
                    <div className="group-270-1">
                      <div className="form"></div>
                    </div>
                  </div>
                </div>
                <div className="face-id-login">
                  <div className="face-id-login-1 poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText19}</span>
                  </div>
                  <div className="radio">
                    <On bxBxRadioCircleMarked={on1Props.bxBxRadioCircleMarked} spanText={on1Props.spanText} />
                    <On bxBxRadioCircleMarked={on2Props.bxBxRadioCircleMarked} spanText={on2Props.spanText} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings2;
