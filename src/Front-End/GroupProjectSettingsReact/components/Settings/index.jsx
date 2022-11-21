import React from "react";
import SideMenu from "../SideMenu";
import Background from "../Background";
import Items from "../Items";
import ID from "../ID";
import Location from "../Location";
import Details from "../Details";
import SaveSetting from "../SaveSetting";
import "./Settings.sass";

function Settings(props) {
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
    form,
    sideMenuProps,
    itemsProps,
    iD1Props,
    iD2Props,
    iD3Props,
    location1Props,
    location2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="settings-1 screen">
        <SideMenu
          dashboard3Props={sideMenuProps.dashboard3Props}
          foodOrder1Props={sideMenuProps.foodOrder1Props}
          foodOrder2Props={sideMenuProps.foodOrder2Props}
          foodOrder3Props={sideMenuProps.foodOrder3Props}
          foodOrder3Props2={sideMenuProps.foodOrder3Props2}
          foodOrder4Props={sideMenuProps.foodOrder4Props}
          foodOrder5Props={sideMenuProps.foodOrder5Props}
        />
        <div className="flex-col">
          <div className="flex-row">
            <div className="settings poppins-bold-thunder-36px">
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
          <div className="overlap-group4">
            <Background />
            <div className="background"></div>
            <Items
              x0151Props={itemsProps.x0151Props}
              x0152Props={itemsProps.x0152Props}
              x0153Props={itemsProps.x0153Props}
              x0154Props={itemsProps.x0154Props}
              x0155Props={itemsProps.x0155Props}
              x0156Props={itemsProps.x0156Props}
            />
            <div className="form">
              <div className="account inter-bold-thunder-24px">
                <span className="inter-bold-thunder-24px">{spanText2}</span>
              </div>
              <div className="photo">
                <div className="flex-col-1">
                  <div className="photo-profile poppins-normal-amethyst-smoke-18px">
                    <span className="poppins-normal-amethyst-smoke-18px">{spanText3}</span>
                  </div>
                  <div className="placeholder-1"></div>
                </div>
                <div className="overlap-group-1">
                  <div className="change-photo poppins-medium-thunder-18px">
                    <span className="poppins-medium-thunder-18px">{spanText4}</span>
                  </div>
                </div>
                <div className="remove poppins-medium-thunder-18px">
                  <span className="poppins-medium-thunder-18px">{spanText5}</span>
                </div>
              </div>
              <div className="flex-row-1">
                <ID spanText1={iD1Props.spanText1} spanText2={iD1Props.spanText2} />
                <ID spanText1={iD2Props.spanText1} spanText2={iD2Props.spanText2} className={iD2Props.className} />
              </div>
              <div className="flex-row-2">
                <ID spanText1={iD3Props.spanText1} spanText2={iD3Props.spanText2} className={iD3Props.className} />
                <div className="password">
                  <div className="password-1 poppins-normal-amethyst-smoke-18px">
                    <span className="poppins-normal-amethyst-smoke-18px">{spanText6}</span>
                  </div>
                  <div className="overlap-group-2">
                    <div className="text-1 inter-bold-thunder-24px">
                      <span className="inter-bold-thunder-24px">{spanText7}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="address">
                <div className="location">
                  <div className="your-locatiom poppins-normal-amethyst-smoke-18px">
                    <span className="poppins-normal-amethyst-smoke-18px">{spanText8}</span>
                  </div>
                  <div className="overlap-group-3">
                    <img className="form-1" src={form} alt="form" />
                    <Location src={location1Props.src} />
                  </div>
                </div>
                <Details />
              </div>
              <SaveSetting />
            </div>
            <Location src={location2Props.src} className={location2Props.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
