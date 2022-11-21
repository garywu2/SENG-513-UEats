import React from "react";
import SideMenu3 from "../SideMenu3";
import User2 from "../User2";
import Address2 from "../Address2";
import X014 from "../X014";
import X022 from "../X022";
import Rate2 from "../Rate2";
import Time from "../Time";
import Distance from "../Distance";
import Group455 from "../Group455";
import X0110 from "../X0110";
import User from "../User";
import Total3 from "../Total3";
import Restaurant2 from "../Restaurant2";
import Address3 from "../Address3";
import Status2 from "../Status2";
import Status3 from "../Status3";
import Pagination from "../Pagination";
import "./Orders2.sass";

function Orders2(props) {
  const {
    spanText1,
    orderDiscussion,
    overlapGroup,
    setting,
    spanText2,
    dots,
    spanText3,
    spanText4,
    line1,
    spanText5,
    line2,
    spanText6,
    spanText7,
    line3,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    x02,
    dropdown1,
    x04,
    dropdown2,
    sideMenu3Props,
    user21Props,
    x01101Props,
    user1Props,
    user22Props,
    x01102Props,
    user2Props,
    user23Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="orders screen">
        <SideMenu3
          dashboard2Props={sideMenu3Props.dashboard2Props}
          foodOrder1Props={sideMenu3Props.foodOrder1Props}
          foodOrder2Props={sideMenu3Props.foodOrder2Props}
          foodOrder3Props={sideMenu3Props.foodOrder3Props}
        />
        <div className="flex-col">
          <div className="flex-row">
            <div className="orders-1 poppins-bold-thunder-36px">
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
          <div className="flex-col-1">
            <div className="flex-row-1">
              <div className="ongoing-order poppins-bold-thunder-24px">
                <span className="poppins-bold-thunder-24px">{spanText2}</span>
              </div>
              <img className="dots" src={dots} alt="Dots" />
            </div>
            <div className="flex-row-2">
              <div className="user">
                <div className="flex-row-3">
                  <div className="order-number">
                    <div className="order-1 poppins-bold-thunder-18px">
                      <span className="poppins-bold-thunder-18px">{spanText3}</span>
                    </div>
                    <p className="name poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText4}</span>
                    </p>
                  </div>
                  <User2 spanText1={user21Props.spanText1} />
                </div>
                <Address2 />
              </div>
              <img className="line" src={line1} alt="line" />
              <div className="menu-1">
                <div className="order-menu poppins-medium-thunder-18px">
                  <span className="poppins-medium-thunder-18px">{spanText5}</span>
                </div>
                <div className="group-459">
                  <X014 />
                  <X022 />
                </div>
              </div>
              <img className="line-1" src={line2} alt="line" />
              <div className="restaurant">
                <div className="fast-food-resto poppins-medium-thunder-18px">
                  <span className="poppins-medium-thunder-18px">{spanText6}</span>
                </div>
                <Rate2 />
                <p className="lorem-ipsum-dolor-si poppins-normal-thunder-14px">
                  <span className="poppins-normal-thunder-14px">{spanText7}</span>
                </p>
                <Time />
                <Distance />
              </div>
              <img className="line-2" src={line3} alt="line" />
              <div className="flex-col-2">
                <div className="method">
                  <div className="payment-method poppins-medium-amethyst-smoke-18px">
                    <span className="poppins-medium-amethyst-smoke-18px">{spanText8}</span>
                  </div>
                  <div className="name-1 poppins-bold-thunder-24px">
                    <span className="poppins-bold-thunder-24px">{spanText9}</span>
                  </div>
                </div>
                <div className="total">
                  <div className="total-1 poppins-medium-amethyst-smoke-18px">
                    <span className="poppins-medium-amethyst-smoke-18px">{spanText10}</span>
                  </div>
                  <div className="price poppins-bold-mandy-24px">
                    <span className="poppins-bold-selective-yellow-24px">{spanText11}</span>
                    <span className="poppins-bold-thunder-24px">{spanText12}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="history">
            <div className="title">
              <div className="order-history poppins-bold-thunder-24px">
                <span className="poppins-bold-thunder-24px">{spanText13}</span>
              </div>
              <Group455 />
            </div>
            <div className="list">
              <X0110 userProps={x01101Props.userProps} user2Props={x01101Props.user2Props} />
              <div className="list-item" style={{ backgroundImage: `url(${x02})` }}>
                <User spanText1={user1Props.spanText1} className={user1Props.className} />
                <User2 spanText1={user22Props.spanText1} className={user22Props.className} />
                <Total3 />
                <Restaurant2 />
                <Address3 />
                <Status2 />
                <img className="dropdown" src={dropdown1} alt="dropdown" />
              </div>
              <X0110
                className={x01102Props.className}
                userProps={x01102Props.userProps}
                user2Props={x01102Props.user2Props}
              />
              <div className="list-item" style={{ backgroundImage: `url(${x04})` }}>
                <User spanText1={user2Props.spanText1} className={user2Props.className} />
                <User2 spanText1={user23Props.spanText1} className={user23Props.className} />
                <Total3 />
                <Restaurant2 />
                <Address3 />
                <Status3 />
                <img className="dropdown" src={dropdown2} alt="dropdown" />
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Orders2;
