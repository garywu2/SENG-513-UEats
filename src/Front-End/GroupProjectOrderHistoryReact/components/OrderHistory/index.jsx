import React from "react";
import SideMenu from "../SideMenu";
import Name4 from "../Name4";
import Address from "../Address";
import Status from "../Status";
import Status2 from "../Status2";
import IcChecked from "../IcChecked";
import Status3 from "../Status3";
import Pagination2 from "../Pagination2";
import "./OrderHistory.sass";

function OrderHistory(props) {
  const {
    spanText1,
    magnifier,
    spanText2,
    orderDiscussion,
    overlapGroup,
    setting,
    spanText3,
    chevronDown,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    image1,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    dots1,
    image2,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    dots2,
    image3,
    spanText19,
    spanText20,
    spanText21,
    spanText22,
    spanText23,
    dots3,
    image4,
    spanText24,
    spanText25,
    spanText26,
    spanText27,
    spanText28,
    dots4,
    image5,
    spanText29,
    spanText30,
    spanText31,
    spanText32,
    spanText33,
    dots5,
    image6,
    spanText34,
    spanText35,
    spanText36,
    spanText37,
    spanText38,
    dots6,
    sideMenuProps,
    name41Props,
    name42Props,
    name43Props,
    name44Props,
    name45Props,
    name46Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="order-history screen">
        <SideMenu {...sideMenuProps} />
        <div className="flex-col">
          <div className="flex-row">
            <div className="flex-col-1">
              <div className="order-history-1 poppins-bold-thunder-36px">
                <span className="poppins-bold-thunder-36px">{spanText1}</span>
              </div>
              <div className="search-bar">
                <img className="magnifier" src={magnifier} alt="magnifier" />
                <div className="search poppins-normal-amethyst-smoke-18px">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText2}</span>
                </div>
              </div>
            </div>
            <div className="flex-col-2">
              <div className="menu">
                <div className="group-355">
                  <div className="overlap-group1">
                    <div className="ellipse-7"></div>
                    <img className="order-discussion" src={orderDiscussion} alt="Order Discussion" />
                  </div>
                  <div className="overlap-group-2" style={{ backgroundImage: `url(${overlapGroup})` }}>
                    <div className="ellipse-7-1"></div>
                  </div>
                  <img className="setting" src={setting} alt="Setting" />
                </div>
                <div className="placeholder"></div>
              </div>
              <div className="sort-by">
                <div className="recently poppins-normal-thunder-18px">
                  <span className="poppins-normal-thunder-18px">{spanText3}</span>
                </div>
                <img className="chevron-down" src={chevronDown} alt="chevron-down" />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="title">
              <div className="overlap-group7 poppins-semi-bold-thunder-18px">
                <div className="ic-check"></div>
                <div className="menu-1">
                  <span className="poppins-semi-bold-thunder-18px">{spanText4}</span>
                </div>
                <div className="place">
                  <span className="poppins-semi-bold-thunder-18px">{spanText5}</span>
                </div>
                <div className="address">
                  <span className="poppins-semi-bold-thunder-18px">{spanText6}</span>
                </div>
                <div className="total">
                  <span className="poppins-semi-bold-thunder-18px">{spanText7}</span>
                </div>
                <div className="status">
                  <span className="poppins-semi-bold-thunder-18px">{spanText8}</span>
                </div>
              </div>
              <div className="border-bot-1"></div>
            </div>
            <div className="overlap-group8">
              <div className="items">
                <div className="overlap-group">
                  <div className="square"></div>
                  <img className="image" src={image1} alt="image" />
                  <Name4 spanText1={name41Props.spanText1} />
                  <p className="name poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText9}</span>
                  </p>
                  <Address />
                  <div className="price poppins-semi-bold-selective-yellow-18px">
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText10}</span>
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText11}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText12}</span>
                  </div>
                  <Status />
                  <div className="overlap-group-1">
                    <div className="order-again poppins-normal-selective-yellow-14px">
                      <span className="poppins-normal-selective-yellow-14px">{spanText13}</span>
                    </div>
                  </div>
                  <img className="dots" src={dots1} alt="Dots" />
                </div>
                <div className="overlap-group">
                  <div className="square"></div>
                  <img className="image" src={image2} alt="image" />
                  <Name4 spanText1={name42Props.spanText1} />
                  <p className="name poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText14}</span>
                  </p>
                  <Address />
                  <div className="price poppins-semi-bold-selective-yellow-18px">
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText15}</span>
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText16}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText17}</span>
                  </div>
                  <Status2 />
                  <div className="overlap-group-1">
                    <div className="order-again poppins-normal-selective-yellow-14px">
                      <span className="poppins-normal-selective-yellow-14px">{spanText18}</span>
                    </div>
                  </div>
                  <img className="dots" src={dots2} alt="Dots" />
                </div>
                <div className="overlap-group">
                  <IcChecked />
                  <img className="image" src={image3} alt="image" />
                  <Name4 spanText1={name43Props.spanText1} />
                  <p className="name poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText19}</span>
                  </p>
                  <Address />
                  <div className="price poppins-semi-bold-selective-yellow-18px">
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText20}</span>
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText21}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText22}</span>
                  </div>
                  <Status />
                  <div className="overlap-group-1">
                    <div className="order-again poppins-normal-selective-yellow-14px">
                      <span className="poppins-normal-selective-yellow-14px">{spanText23}</span>
                    </div>
                  </div>
                  <img className="dots" src={dots3} alt="Dots" />
                </div>
                <div className="overlap-group">
                  <div className="square"></div>
                  <img className="image" src={image4} alt="image" />
                  <Name4 spanText1={name44Props.spanText1} />
                  <p className="name poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText24}</span>
                  </p>
                  <Address />
                  <div className="price poppins-semi-bold-selective-yellow-18px">
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText25}</span>
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText26}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText27}</span>
                  </div>
                  <Status />
                  <div className="overlap-group-1">
                    <div className="order-again poppins-normal-selective-yellow-14px">
                      <span className="poppins-normal-selective-yellow-14px">{spanText28}</span>
                    </div>
                  </div>
                  <img className="dots" src={dots4} alt="Dots" />
                </div>
                <div className="overlap-group">
                  <IcChecked />
                  <img className="image" src={image5} alt="image" />
                  <Name4 spanText1={name45Props.spanText1} className={name45Props.className} />
                  <p className="name-1 poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText29}</span>
                  </p>
                  <Address />
                  <div className="price poppins-semi-bold-selective-yellow-18px">
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText30}</span>
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText31}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText32}</span>
                  </div>
                  <Status2 />
                  <div className="overlap-group-1">
                    <div className="order-again poppins-normal-selective-yellow-14px">
                      <span className="poppins-normal-selective-yellow-14px">{spanText33}</span>
                    </div>
                  </div>
                  <img className="dots" src={dots5} alt="Dots" />
                </div>
                <div className="overlap-group">
                  <div className="square"></div>
                  <img className="image" src={image6} alt="image" />
                  <Name4 spanText1={name46Props.spanText1} />
                  <p className="name poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText34}</span>
                  </p>
                  <Address />
                  <div className="price poppins-semi-bold-selective-yellow-18px">
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText35}</span>
                    <span className="poppins-semi-bold-selective-yellow-18px">{spanText36}</span>
                    <span className="poppins-semi-bold-thunder-18px">{spanText37}</span>
                  </div>
                  <Status3 />
                  <div className="overlap-group-1">
                    <div className="order-again poppins-normal-selective-yellow-14px">
                      <span className="poppins-normal-selective-yellow-14px">{spanText38}</span>
                    </div>
                  </div>
                  <img className="dots" src={dots6} alt="Dots" />
                </div>
              </div>
              <div className="line">
                <div className="border-bot"></div>
                <div className="border-bot"></div>
                <div className="border-bot"></div>
                <div className="border-bot"></div>
                <div className="border-bot"></div>
                <div className="border-bot"></div>
              </div>
            </div>
            <Pagination2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
