import React from "react";
import SideMenu2 from "../SideMenu2";
import User from "../User";
import Text from "../Text";
import Text2 from "../Text2";
import Address2 from "../Address2";
import User2 from "../User2";
import "./Orders.sass";

function Orders(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    overlapGroup,
    spanText6,
    spanText7,
    dropdown1,
    overlapGroup1,
    spanText8,
    spanText9,
    dropdown2,
    overlapGroup2,
    spanText10,
    spanText11,
    dropdown3,
    overlapGroup3,
    spanText12,
    spanText13,
    dropdown4,
    overlapGroup4,
    spanText14,
    spanText15,
    dropdown5,
    overlapGroup5,
    spanText16,
    spanText17,
    dropdown6,
    orderDiscussion,
    overlapGroup6,
    setting,
    spanText18,
    maskGroup1,
    spanText19,
    spanText20,
    spanText21,
    maskGroup2,
    spanText22,
    spanText23,
    spanText24,
    line1,
    line2,
    line3,
    spanText25,
    spanText26,
    spanText27,
    spanText28,
    spanText29,
    spanText30,
    spanText31,
    spanText32,
    spanText33,
    spanText34,
    spanText35,
    overlapGroup7,
    spanText36,
    spanText37,
    sideMenu2Props,
    user1Props,
    user2Props,
    user3Props,
    user4Props,
    user5Props,
    user6Props,
    user7Props,
    user2Props2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="orders-1 screen">
        <SideMenu2
          dashboard2Props={sideMenu2Props.dashboard2Props}
          foodOrder1Props={sideMenu2Props.foodOrder1Props}
          foodOrder2Props={sideMenu2Props.foodOrder2Props}
          foodOrder3Props={sideMenu2Props.foodOrder3Props}
          foodOrder4Props={sideMenu2Props.foodOrder4Props}
        />
        <div className="flex-col">
          <div className="orders poppins-bold-thunder-36px">
            <span className="poppins-bold-thunder-36px">{spanText1}</span>
          </div>
          <div className="overlap-group6">
            <div className="flex-col-1">
              <div className="order-in poppins-bold-thunder-24px">
                <span className="poppins-bold-thunder-24px">{spanText2}</span>
              </div>
              <div className="tab">
                <div className="x02">
                  <div className="title poppins-normal-white-14px">
                    <span className="poppins-normal-white-14px">{spanText3}</span>
                  </div>
                </div>
                <div className="overlap-group-1">
                  <div className="x01">
                    <div className="title-1 poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText4}</span>
                    </div>
                  </div>
                  <div className="x03">
                    <div className="title-2 poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText5}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list poppins-semi-bold-mandy-18px">
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <User spanText1={user1Props.spanText1} />
                  <div className="price">
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText6}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText7}</span>
                  </div>
                  <img className="dropdown" src={dropdown1} alt="dropdown" />
                </div>
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                  <User spanText1={user2Props.spanText1} className={user2Props.className} />
                  <div className="price">
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText8}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText9}</span>
                  </div>
                  <img className="dropdown" src={dropdown2} alt="dropdown" />
                </div>
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                  <User spanText1={user3Props.spanText1} className={user3Props.className} />
                  <div className="price">
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText10}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText11}</span>
                  </div>
                  <img className="dropdown" src={dropdown3} alt="dropdown" />
                </div>
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                  <User spanText1={user4Props.spanText1} className={user4Props.className} />
                  <div className="price">
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText12}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText13}</span>
                  </div>
                  <img className="dropdown" src={dropdown4} alt="dropdown" />
                </div>
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                  <User spanText1={user5Props.spanText1} className={user5Props.className} />
                  <div className="price">
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText14}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText15}</span>
                  </div>
                  <img className="dropdown" src={dropdown5} alt="dropdown" />
                </div>
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup5})` }}>
                  <User spanText1={user6Props.spanText1} />
                  <div className="price">
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText16}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText17}</span>
                  </div>
                  <img className="dropdown" src={dropdown6} alt="dropdown" />
                </div>
              </div>
            </div>
            <div className="scroll-bar">
              <div className="x02-1"></div>
            </div>
          </div>
        </div>
        <div className="flex-col-2">
          <div className="menu">
            <div className="overlap-group1">
              <div className="ellipse-7"></div>
              <img className="order-discussion" src={orderDiscussion} alt="Order Discussion" />
            </div>
            <div className="overlap-group-2" style={{ backgroundImage: `url(${overlapGroup6})` }}>
              <div className="ellipse-7-1"></div>
            </div>
            <img className="setting" src={setting} alt="Setting" />
            <div className="placeholder"></div>
          </div>
          <div className="overlap-group7">
            <div className="order-details poppins-bold-thunder-24px">
              <span className="poppins-bold-thunder-24px">{spanText18}</span>
            </div>
            <div className="overlap-group1-1">
              <div className="menu-1">
                <div className="menu-item">
                  <img className="mask-group" src={maskGroup1} alt="Mask Group" />
                  <Text />
                  <div className="text-2 poppins-semi-bold-thunder-18px">
                    <span className="poppins-semi-bold-thunder-18px">{spanText19}</span>
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText20}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText21}</span>
                  </div>
                </div>
                <div className="menu-item">
                  <img className="mask-group" src={maskGroup2} alt="Mask Group" />
                  <Text2 />
                  <div className="text-1 poppins-semi-bold-thunder-18px">
                    <span className="poppins-semi-bold-thunder-18px">{spanText22}</span>
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText23}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText24}</span>
                  </div>
                </div>
              </div>
              <div className="background"></div>
              <img className="line" src={line1} alt="line" />
              <img className="line-1" src={line2} alt="line" />
              <img className="line-2" src={line3} alt="line" />
              <div className="total">
                <div className="total-1 poppins-medium-thunder-18px">
                  <span className="poppins-medium-thunder-18px">{spanText25}</span>
                </div>
                <div className="price-1 poppins-bold-mandy-24px">
                  <span className="poppins-bold-selective-yellow-24px">{spanText26}</span>
                  <span className="poppins-bold-thunder-24px">{spanText27}</span>
                </div>
              </div>
              <div className="details">
                <Address2 />
                <div className="flex-col-3">
                  <div className="time">
                    <div className="estimation-time poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText28}</span>
                    </div>
                    <div className="address poppins-bold-thunder-14px">
                      <span className="poppins-bold-thunder-14px">{spanText29}</span>
                    </div>
                  </div>
                  <div className="distance">
                    <div className="distance-1 poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText30}</span>
                    </div>
                    <div className="x25-km poppins-bold-thunder-14px">
                      <span className="poppins-bold-thunder-14px">{spanText31}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-col-4">
                  <div className="payment">
                    <div className="payment-1 poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText32}</span>
                    </div>
                    <div className="e-wallet poppins-bold-thunder-14px">
                      <span className="poppins-bold-thunder-14px">{spanText33}</span>
                    </div>
                  </div>
                  <div className="status">
                    <div className="payment-status poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText34}</span>
                    </div>
                    <div className="completed poppins-bold-thunder-14px">
                      <span className="poppins-bold-thunder-14px">{spanText35}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title-3">
                <User spanText1={user7Props.spanText1} className={user7Props.className} />
                <User2 spanText1={user2Props2.spanText1} />
              </div>
            </div>
            <div className="flex-row">
              <div className="overlap-group-3" style={{ backgroundImage: `url(${overlapGroup7})` }}>
                <div className="text poppins-medium-mandy-18px">
                  <span className="poppins-medium-mandy-18px">{spanText36}</span>
                </div>
              </div>
              <div className="accept">
                <div className="text poppins-medium-white-18px">
                  <span className="poppins-medium-white-18px">{spanText37}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
