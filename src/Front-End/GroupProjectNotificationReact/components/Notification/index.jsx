import React from "react";
import SideMenu from "../SideMenu";
import X013 from "../X013";
import Icon from "../Icon";
import "./Notification.sass";

function Notification(props) {
  const {
    spanText1,
    orderDiscussion,
    overlapGroup,
    setting,
    spanText2,
    spanText3,
    spanText4,
    chevronDown,
    dots,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    sideMenuProps,
    x0131Props,
    x0132Props,
    iconProps,
    x0133Props,
    x0134Props,
    x0135Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="notification screen">
        <SideMenu {...sideMenuProps} />
        <div className="flex-col">
          <div className="flex-row">
            <div className="notification-1 poppins-bold-thunder-36px">
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
          <div className="content">
            <div className="menu-1">
              <div className="tab">
                <div className="button">
                  <div className="title poppins-normal-white-14px">
                    <span className="poppins-normal-white-14px">{spanText2}</span>
                  </div>
                </div>
                <div className="button-1">
                  <div className="title poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText3}</span>
                  </div>
                </div>
              </div>
              <div className="sort-by">
                <div className="recently poppins-normal-thunder-14px">
                  <span className="poppins-normal-thunder-14px">{spanText4}</span>
                </div>
                <img className="chevron-down" src={chevronDown} alt="chevron-down" />
              </div>
              <img className="dots" src={dots} alt="Dots" />
            </div>
            <div className="today">
              <div className="today-1 poppins-bold-thunder-24px">
                <span className="poppins-bold-thunder-24px">{spanText5}</span>
              </div>
              <div className="items">
                <X013
                  spanText1={x0131Props.spanText1}
                  spanText2={x0131Props.spanText2}
                  spanText4={x0131Props.spanText4}
                  iconProps={x0131Props.iconProps}
                />
                <X013
                  spanText1={x0132Props.spanText1}
                  spanText2={x0132Props.spanText2}
                  spanText4={x0132Props.spanText4}
                  className={x0132Props.className}
                  iconProps={x0132Props.iconProps}
                />
                <div className="divider"></div>
                <div className="x04">
                  <Icon src={iconProps.src} className={iconProps.className} />
                  <div className="flex-col-1">
                    <div className="update poppins-bold-thunder-18px">
                      <span className="poppins-bold-thunder-18px">{spanText6}</span>
                    </div>
                    <div className="weekly-maintenance-schedule poppins-bold-thunder-14px">
                      <span className="poppins-bold-thunder-14px">{spanText7}</span>
                    </div>
                    <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText8}</span>
                    </p>
                  </div>
                  <div className="monday-june-31-2020 poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText9}</span>
                  </div>
                </div>
                <X013
                  spanText1={x0133Props.spanText1}
                  spanText2={x0133Props.spanText2}
                  spanText4={x0133Props.spanText4}
                  className={x0133Props.className}
                  iconProps={x0133Props.iconProps}
                />
              </div>
            </div>
            <div className="yesterday">
              <div className="yesterday-1 poppins-bold-thunder-24px">
                <span className="poppins-bold-thunder-24px">{spanText10}</span>
              </div>
              <div className="item">
                <X013
                  spanText1={x0134Props.spanText1}
                  spanText2={x0134Props.spanText2}
                  spanText4={x0134Props.spanText4}
                  iconProps={x0134Props.iconProps}
                />
                <div className="divider-1"></div>
                <X013
                  spanText1={x0135Props.spanText1}
                  spanText2={x0135Props.spanText2}
                  spanText4={x0135Props.spanText4}
                  className={x0135Props.className}
                  iconProps={x0135Props.iconProps}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
