import React from "react";
import SideMenu from "../SideMenu";
import Status from "../Status";
import X014 from "../X014";
import X022 from "../X022";
import Rate2 from "../Rate2";
import Time from "../Time";
import Distance from "../Distance";
import X04 from "../X04";
import Pagination2 from "../Pagination2";
import "./Bills.sass";

function Bills(props) {
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
    spanText9,
    spanText10,
    spanText11,
    location1,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    dropdown1,
    spanText17,
    spanText18,
    spanText19,
    location2,
    spanText20,
    spanText21,
    spanText22,
    spanText23,
    spanText24,
    dropdown2,
    spanText25,
    line1,
    spanText26,
    line2,
    spanText27,
    spanText28,
    spanText29,
    spanText30,
    line3,
    spanText31,
    spanText32,
    spanText33,
    spanText34,
    spanText35,
    location3,
    spanText36,
    spanText37,
    spanText38,
    spanText39,
    spanText40,
    dropdown3,
    spanText41,
    spanText42,
    location4,
    spanText43,
    spanText44,
    spanText45,
    spanText46,
    spanText47,
    dropdown4,
    sideMenuProps,
    x041Props,
    x042Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="bills screen">
        <SideMenu {...sideMenuProps} />
        <div className="flex-col">
          <div className="flex-row">
            <div className="flex-col-1">
              <div className="bills-1 poppins-bold-thunder-36px">
                <span className="poppins-bold-thunder-36px">{spanText1}</span>
              </div>
              <div className="search-bar">
                <img className="magnifier" src={magnifier} alt="magnifier" />
                <div className="search-bills poppins-normal-amethyst-smoke-18px">
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
                  <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup})` }}>
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
              <div className="overlap-group6 poppins-semi-bold-thunder-18px">
                <div className="ic-check"></div>
                <div className="menu-1">
                  <span className="poppins-semi-bold-thunder-18px">{spanText4}</span>
                </div>
                <div className="status">
                  <span className="poppins-semi-bold-thunder-18px">{spanText5}</span>
                </div>
                <div className="place">
                  <span className="poppins-semi-bold-thunder-18px">{spanText6}</span>
                </div>
                <div className="address-1">
                  <span className="poppins-semi-bold-thunder-18px">{spanText7}</span>
                </div>
                <div className="total">
                  <span className="poppins-semi-bold-thunder-18px">{spanText8}</span>
                </div>
                <div className="payment-method">
                  <span className="poppins-semi-bold-thunder-18px">{spanText9}</span>
                </div>
              </div>
              <div className="border-bot"></div>
            </div>
            <div className="overlap-group7">
              <div className="overlap-group3">
                <div className="square"></div>
                <div className="inv-0001234 poppins-medium-thunder-18px">
                  <span className="poppins-medium-thunder-18px">{spanText10}</span>
                </div>
                <Status />
                <p className="name poppins-normal-amethyst-smoke-18px">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText11}</span>
                </p>
                <div className="address">
                  <img className="location" src={location1} alt="Location" />
                  <div className="elm-street-23-yogyakarta poppins-semi-bold-thunder-18px">
                    <span className="poppins-semi-bold-thunder-18px">{spanText12}</span>
                  </div>
                </div>
                <div className="price poppins-semi-bold-selective-yellow-18px">
                  <span className="poppins-semi-bold-selective-yellow-18px">{spanText13}</span>
                  <span className="poppins-semi-bold-selective-yellow-18px">{spanText14}</span>
                  <span className="poppins-semi-bold-thunder-18px">{spanText15}</span>
                </div>
                <div className="name-1 poppins-medium-thunder-18px">
                  <span className="poppins-medium-thunder-18px">{spanText16}</span>
                </div>
                <img className="dropdown" src={dropdown1} alt="dropdown" />
              </div>
              <div className="x04">
                <div className="overlap-group-2">
                  <div className="square-1"></div>
                  <div className="inv-0001234-1 poppins-medium-white-18px">
                    <span className="poppins-medium-white-18px">{spanText17}</span>
                  </div>
                  <div className="status-1">
                    <div className="completed poppins-semi-bold-white-14px">
                      <span className="poppins-semi-bold-white-14px">{spanText18}</span>
                    </div>
                  </div>
                  <p className="name-2 poppins-normal-white-18px">
                    <span className="poppins-normal-white-18px">{spanText19}</span>
                  </p>
                  <div className="content-1">
                    <img className="location" src={location2} alt="Location" />
                    <div className="elm-street-23-yogyakarta-1 poppins-semi-bold-white-18px">
                      <span className="poppins-semi-bold-white-18px">{spanText20}</span>
                    </div>
                  </div>
                  <div className="price-1 poppins-semi-bold-white-18px">
                    <span className="poppins-semi-bold-white-18px">{spanText21}</span>
                    <span className="poppins-semi-bold-white-18px">{spanText22}</span>
                    <span className="poppins-semi-bold-white-18px">{spanText23}</span>
                  </div>
                  <div className="name-3 poppins-medium-white-18px">
                    <span className="poppins-medium-white-18px">{spanText24}</span>
                  </div>
                  <img className="dropdown" src={dropdown2} alt="dropdown" />
                </div>
                <div className="bottom-content">
                  <div className="menu-2">
                    <div className="order-menu poppins-medium-thunder-18px">
                      <span className="poppins-medium-thunder-18px">{spanText25}</span>
                    </div>
                    <X014 />
                    <X022 />
                  </div>
                  <img className="line" src={line1} alt="line" />
                  <div className="restaurant">
                    <div className="fast-food-resto poppins-medium-thunder-18px">
                      <span className="poppins-medium-thunder-18px">{spanText26}</span>
                    </div>
                    <Rate2 />
                    <Time />
                    <Distance />
                  </div>
                  <img className="line" src={line2} alt="line" />
                  <div className="details">
                    <div className="flex-col-3">
                      <div className="x01">
                        <div className="status-2 poppins-normal-amethyst-smoke-14px">
                          <span className="poppins-normal-amethyst-smoke-14px">{spanText27}</span>
                        </div>
                        <div className="completed-1 poppins-medium-thunder-18px">
                          <span className="poppins-medium-thunder-18px">{spanText28}</span>
                        </div>
                      </div>
                      <div className="x02">
                        <div className="bills-2 poppins-normal-amethyst-smoke-14px">
                          <span className="poppins-normal-amethyst-smoke-14px">{spanText29}</span>
                        </div>
                        <div className="order-1 poppins-medium-thunder-18px">
                          <span className="poppins-medium-thunder-18px">{spanText30}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col-4">
                      <X04 spanText1={x041Props.spanText1} />
                      <X04 spanText1={x042Props.spanText1} className={x042Props.className} />
                    </div>
                  </div>
                  <img className="line-1" src={line3} alt="line" />
                  <div className="total-1">
                    <div className="total-2 poppins-medium-amethyst-smoke-18px">
                      <span className="poppins-medium-amethyst-smoke-18px">{spanText31}</span>
                    </div>
                    <div className="price-2 poppins-bold-mandy-24px">
                      <span className="poppins-bold-selective-yellow-24px">{spanText32}</span>
                      <span className="poppins-bold-thunder-24px">{spanText33}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group">
              <div className="square"></div>
              <div className="inv-0001234 poppins-medium-thunder-18px">
                <span className="poppins-medium-thunder-18px">{spanText34}</span>
              </div>
              <Status />
              <p className="name poppins-normal-amethyst-smoke-18px">
                <span className="poppins-normal-amethyst-smoke-18px">{spanText35}</span>
              </p>
              <div className="address">
                <img className="location" src={location3} alt="Location" />
                <div className="elm-street-23-yogyakarta-2 poppins-semi-bold-thunder-18px">
                  <span className="poppins-semi-bold-thunder-18px">{spanText36}</span>
                </div>
              </div>
              <div className="price poppins-semi-bold-selective-yellow-18px">
                <span className="poppins-semi-bold-selective-yellow-18px">{spanText37}</span>
                <span className="poppins-semi-bold-selective-yellow-18px">{spanText38}</span>
                <span className="poppins-semi-bold-thunder-18px">{spanText39}</span>
              </div>
              <div className="name-1 poppins-medium-thunder-18px">
                <span className="poppins-medium-thunder-18px">{spanText40}</span>
              </div>
              <img className="dropdown" src={dropdown3} alt="dropdown" />
            </div>
            <div className="overlap-group">
              <div className="square"></div>
              <div className="inv-0001234 poppins-medium-thunder-18px">
                <span className="poppins-medium-thunder-18px">{spanText41}</span>
              </div>
              <Status />
              <p className="name poppins-normal-amethyst-smoke-18px">
                <span className="poppins-normal-amethyst-smoke-18px">{spanText42}</span>
              </p>
              <div className="address">
                <img className="location" src={location4} alt="Location" />
                <div className="elm-street-23-yogyakarta-3 poppins-semi-bold-thunder-18px">
                  <span className="poppins-semi-bold-thunder-18px">{spanText43}</span>
                </div>
              </div>
              <div className="price poppins-semi-bold-selective-yellow-18px">
                <span className="poppins-semi-bold-selective-yellow-18px">{spanText44}</span>
                <span className="poppins-semi-bold-selective-yellow-18px">{spanText45}</span>
                <span className="poppins-semi-bold-thunder-18px">{spanText46}</span>
              </div>
              <div className="name-1 poppins-medium-thunder-18px">
                <span className="poppins-medium-thunder-18px">{spanText47}</span>
              </div>
              <img className="dropdown" src={dropdown4} alt="dropdown" />
            </div>
            <Pagination2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bills;
