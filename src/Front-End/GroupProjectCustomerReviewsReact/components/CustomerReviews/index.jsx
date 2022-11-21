import React from "react";
import SideMenu2 from "../SideMenu2";
import Grid from "../Grid";
import User3 from "../User3";
import Item from "../Item";
import User4 from "../User4";
import Rate6 from "../Rate6";
import Pagination from "../Pagination";
import "./CustomerReviews.sass";

function CustomerReviews(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    polygon31,
    arrow1,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    orderDiscussion,
    overlapGroup,
    setting,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    spanText21,
    spanText22,
    spanText23,
    polygon32,
    arrow2,
    spanText24,
    spanText25,
    spanText26,
    spanText27,
    spanText28,
    spanText29,
    spanText30,
    spanText31,
    spanText32,
    magnifier,
    spanText33,
    list,
    overlapGroup2,
    line1,
    spanText34,
    spanText35,
    overlapGroup4,
    line2,
    image1,
    spanText36,
    spanText37,
    spanText38,
    overlapGroup1,
    line3,
    spanText39,
    spanText40,
    overlapGroup5,
    spanText41,
    spanText42,
    line4,
    spanText43,
    spanText44,
    overlapGroup22,
    line5,
    image2,
    spanText45,
    spanText46,
    spanText47,
    overlapGroup6,
    spanText48,
    spanText49,
    line6,
    spanText50,
    spanText51,
    overlapGroup3,
    spanText52,
    spanText53,
    line7,
    image3,
    spanText54,
    spanText55,
    spanText56,
    overlapGroup7,
    spanText57,
    spanText58,
    line8,
    image4,
    spanText59,
    spanText60,
    spanText61,
    sideMenu2Props,
    gridProps,
    user31Props,
    item1Props,
    user41Props,
    user42Props,
    item2Props,
    item3Props,
    user32Props,
    item4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="customer-reviews screen">
        <SideMenu2
          dashboard2Props={sideMenu2Props.dashboard2Props}
          foodOrder1Props={sideMenu2Props.foodOrder1Props}
          foodOrder2Props={sideMenu2Props.foodOrder2Props}
          foodOrder3Props={sideMenu2Props.foodOrder3Props}
          foodOrder4Props={sideMenu2Props.foodOrder4Props}
        />
        <div className="flex-col-1">
          <div className="flex-row-1">
            <div className="flex-col-2">
              <div className="customer-reviews-1 poppins-bold-thunder-36px">
                <span className="poppins-bold-thunder-36px">{spanText1}</span>
              </div>
              <div className="flex-col">
                <div className="flex-row-2">
                  <div className="flex-col-3">
                    <div className="tive-review poppins-bold-thunder-24px">
                      <span className="poppins-bold-thunder-24px">{spanText2}</span>
                    </div>
                    <p className="name poppins-normal-amethyst-smoke-18px">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText3}</span>
                    </p>
                    <div className="this-month poppins-normal-thunder-18px">
                      <span className="poppins-normal-thunder-18px">{spanText4}</span>
                    </div>
                    <div className="flex-row-3">
                      <div className="text-1-1 poppins-bold-thunder-36px">
                        <span className="poppins-bold-thunder-36px">{spanText5}</span>
                      </div>
                      <div className="reviews poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText6}</span>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group1">
                    <div className="overlap-group-2">
                      <div className="text">
                        <div className="number poppins-semi-bold-cultured-pearl-18px">
                          <span className="poppins-semi-bold-cultured-pearl-18px">{spanText7}</span>
                        </div>
                        <div className="reviews-1 poppins-normal-white-14px">
                          <span className="poppins-normal-white-14px">{spanText8}</span>
                        </div>
                      </div>
                      <img className="polygon-3" src={polygon31} alt="Polygon 3" />
                    </div>
                    <div className="chart">
                      <div className="bar"></div>
                      <div className="bar-1"></div>
                      <div className="bar-2"></div>
                      <div className="bar-3"></div>
                      <div className="bar-4"></div>
                      <div className="bar-5"></div>
                      <div className="bar-6"></div>
                    </div>
                  </div>
                </div>
                <div className="flex-row">
                  <img className="arrow" src={arrow1} alt="arrow" />
                  <div className="text-1 poppins-semi-bold-peridot-18px">
                    <span className="poppins-semi-bold-peridot-18px">{spanText9}</span>
                  </div>
                  <div className="navbar poppins-semi-bold-amethyst-smoke-14px">
                    <div className="navbar-link-mon">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText10}</span>
                    </div>
                    <div className="navbar-link-tue">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText11}</span>
                    </div>
                    <div className="navbar-link-wed">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText12}</span>
                    </div>
                    <div className="navbar-link-thu">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText13}</span>
                    </div>
                    <div className="navbar-link-fri">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText14}</span>
                    </div>
                    <div className="navbar-link-sat">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText15}</span>
                    </div>
                    <div className="navbar-link-place">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText16}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col-4">
              <div className="menu">
                <div className="overlap-group1-1">
                  <div className="ellipse-7"></div>
                  <img className="order-discussion" src={orderDiscussion} alt="Order Discussion" />
                </div>
                <div className="overlap-group-3" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <div className="ellipse-7-1"></div>
                </div>
                <img className="setting" src={setting} alt="Setting" />
                <div className="placeholder-1"></div>
              </div>
              <div className="flex-col">
                <div className="flex-row-4">
                  <div className="flex-col-5">
                    <div className="tive-review poppins-bold-thunder-24px">
                      <span className="poppins-bold-thunder-24px">{spanText17}</span>
                    </div>
                    <p className="name poppins-normal-amethyst-smoke-18px">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText18}</span>
                    </p>
                    <div className="this-month poppins-normal-thunder-18px">
                      <span className="poppins-normal-thunder-18px">{spanText19}</span>
                    </div>
                    <div className="flex-row-5">
                      <div className="text-3 poppins-bold-thunder-36px">
                        <span className="poppins-bold-thunder-36px">{spanText20}</span>
                      </div>
                      <div className="reviews poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText21}</span>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group1-2">
                    <div className="overlap-group-4">
                      <div className="text">
                        <div className="number-1 poppins-semi-bold-cultured-pearl-18px">
                          <span className="poppins-semi-bold-cultured-pearl-18px">{spanText22}</span>
                        </div>
                        <div className="reviews-1 poppins-normal-white-14px">
                          <span className="poppins-normal-white-14px">{spanText23}</span>
                        </div>
                      </div>
                      <img className="polygon-3" src={polygon32} alt="Polygon 3" />
                    </div>
                    <div className="chart-1">
                      <div className="bar-7"></div>
                      <div className="bar-8"></div>
                      <div className="bar-9"></div>
                      <div className="bar-10"></div>
                      <div className="bar-11"></div>
                      <div className="bar-12"></div>
                      <div className="bar-13"></div>
                    </div>
                  </div>
                </div>
                <div className="flex-row">
                  <img className="arrow" src={arrow2} alt="arrow" />
                  <div className="text-1 poppins-semi-bold-mandy-18px">
                    <span className="poppins-semi-bold-mandy-18px">{spanText24}</span>
                  </div>
                  <div className="navbar poppins-semi-bold-amethyst-smoke-14px">
                    <div className="navbar-link-mon">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText25}</span>
                    </div>
                    <div className="navbar-link-tue">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText26}</span>
                    </div>
                    <div className="navbar-link-wed">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText27}</span>
                    </div>
                    <div className="navbar-link-thu">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText28}</span>
                    </div>
                    <div className="navbar-link-fri">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText29}</span>
                    </div>
                    <div className="navbar-link-sat">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText30}</span>
                    </div>
                    <div className="navbar-link-place">
                      <span className="poppins-semi-bold-amethyst-smoke-14px">{spanText31}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recent-reviews">
            <div className="recent-reviews-1 poppins-bold-thunder-24px">
              <span className="poppins-bold-thunder-24px">{spanText32}</span>
            </div>
            <div className="flex-row-6">
              <div className="search-bar">
                <img className="magnifier" src={magnifier} alt="magnifier" />
                <div className="search poppins-normal-amethyst-smoke-18px">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText33}</span>
                </div>
              </div>
              <div className="button">
                <div className="list">
                  <img className="list-1" src={list} alt="List" />
                </div>
                <Grid src={gridProps.src} />
              </div>
            </div>
            <div className="items">
              <div className="overlap-group-container">
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                  <User3 spanText1={user31Props.spanText1} />
                  <img className="line" src={line1} alt="line" />
                  <Item spanText={item1Props.spanText} />
                  <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText34}</span>
                  </p>
                  <div className="ordered-june-21-2020 poppins-normal-thunder-14px">
                    <span className="poppins-normal-thunder-14px">{spanText35}</span>
                  </div>
                </div>
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                  <User4 spanText1={user41Props.spanText1} />
                  <img className="line" src={line2} alt="line" />
                  <div className="item">
                    <img className="image" src={image1} alt="image" />
                    <div className="rate">
                      <div className="pepperoni-pizza poppins-medium-thunder-18px">
                        <span className="poppins-medium-thunder-18px">{spanText36}</span>
                      </div>
                      <Rate6 />
                    </div>
                  </div>
                  <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText37}</span>
                  </p>
                  <div className="ordered-june-21-2020 poppins-normal-thunder-14px">
                    <span className="poppins-normal-thunder-14px">{spanText38}</span>
                  </div>
                </div>
              </div>
              <div className="overlap-group-container">
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                  <User4 spanText1={user42Props.spanText1} />
                  <img className="line" src={line3} alt="line" />
                  <Item spanText={item2Props.spanText} className={item2Props.className} />
                  <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText39}</span>
                  </p>
                  <div className="ordered-june-21-2020 poppins-normal-thunder-14px">
                    <span className="poppins-normal-thunder-14px">{spanText40}</span>
                  </div>
                </div>
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup5})` }}>
                  <div className="user">
                    <div className="placeholder"></div>
                    <div className="flex-col-6">
                      <div className="dani-ahmad poppins-medium-thunder-18px">
                        <span className="poppins-medium-thunder-18px">{spanText41}</span>
                      </div>
                      <div className="user-since-2020 poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText42}</span>
                      </div>
                    </div>
                  </div>
                  <img className="line" src={line4} alt="line" />
                  <Item spanText={item3Props.spanText} className={item3Props.className} />
                  <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText43}</span>
                  </p>
                  <div className="ordered-june-21-2020 poppins-normal-thunder-14px">
                    <span className="poppins-normal-thunder-14px">{spanText44}</span>
                  </div>
                </div>
              </div>
              <div className="overlap-group-container">
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup22})` }}>
                  <User3 spanText1={user32Props.spanText1} className={user32Props.className} />
                  <img className="line" src={line5} alt="line" />
                  <div className="item-1">
                    <img className="image" src={image2} alt="image" />
                    <div className="rate-1">
                      <div className="cheese-burger poppins-medium-thunder-18px">
                        <span className="poppins-medium-thunder-18px">{spanText45}</span>
                      </div>
                      <Rate6 />
                    </div>
                  </div>
                  <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText46}</span>
                  </p>
                  <div className="ordered-june-21-2020 poppins-normal-thunder-14px">
                    <span className="poppins-normal-thunder-14px">{spanText47}</span>
                  </div>
                </div>
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup6})` }}>
                  <div className="user-1">
                    <div className="placeholder"></div>
                    <div className="flex-col-7">
                      <div className="name-1 poppins-medium-thunder-18px">
                        <span className="poppins-medium-thunder-18px">{spanText48}</span>
                      </div>
                      <div className="user-since-2020 poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText49}</span>
                      </div>
                    </div>
                  </div>
                  <img className="line" src={line6} alt="line" />
                  <Item spanText={item4Props.spanText} className={item4Props.className} />
                  <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText50}</span>
                  </p>
                  <div className="ordered-june-21-2020 poppins-normal-thunder-14px">
                    <span className="poppins-normal-thunder-14px">{spanText51}</span>
                  </div>
                </div>
              </div>
              <div className="overlap-group-container">
                <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                  <div className="user-2">
                    <div className="placeholder"></div>
                    <div className="flex-col-8">
                      <div className="name-2 poppins-medium-thunder-18px">
                        <span className="poppins-medium-thunder-18px">{spanText52}</span>
                      </div>
                      <div className="user-since-2020 poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText53}</span>
                      </div>
                    </div>
                  </div>
                  <img className="line" src={line7} alt="line" />
                  <div className="item-2">
                    <img className="image" src={image3} alt="image" />
                    <div className="rate-2">
                      <div className="double-burger poppins-medium-thunder-18px">
                        <span className="poppins-medium-thunder-18px">{spanText54}</span>
                      </div>
                      <Rate6 />
                    </div>
                  </div>
                  <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText55}</span>
                  </p>
                  <div className="ordered-june-21-2020 poppins-normal-thunder-14px">
                    <span className="poppins-normal-thunder-14px">{spanText56}</span>
                  </div>
                </div>
                <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup7})` }}>
                  <div className="user-3">
                    <div className="placeholder"></div>
                    <div className="flex-col-9">
                      <div className="salsabile-tango poppins-medium-thunder-18px">
                        <span className="poppins-medium-thunder-18px">{spanText57}</span>
                      </div>
                      <div className="user-since-2020 poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText58}</span>
                      </div>
                    </div>
                  </div>
                  <img className="line" src={line8} alt="line" />
                  <div className="item-3">
                    <img className="image" src={image4} alt="image" />
                    <div className="rate-3">
                      <div className="japanese-ramen poppins-medium-thunder-18px">
                        <span className="poppins-medium-thunder-18px">{spanText59}</span>
                      </div>
                      <Rate6 />
                    </div>
                  </div>
                  <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText60}</span>
                  </p>
                  <div className="ordered-june-21-2020 poppins-normal-thunder-14px">
                    <span className="poppins-normal-thunder-14px">{spanText61}</span>
                  </div>
                </div>
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
