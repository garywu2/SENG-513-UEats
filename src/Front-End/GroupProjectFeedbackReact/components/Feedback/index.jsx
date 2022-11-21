import React from "react";
import SideMenu3 from "../SideMenu3";
import X03 from "../X03";
import X05 from "../X05";
import X07 from "../X07";
import X09 from "../X09";
import X11 from "../X11";
import SortBy from "../SortBy";
import Group455 from "../Group455";
import Rate6 from "../Rate6";
import Pagination from "../Pagination";
import "./Feedback.sass";

function Feedback(props) {
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
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    polygon2,
    polygon1,
    spanText21,
    spanText22,
    spanText23,
    spanText24,
    spanText25,
    spanText26,
    arrow1,
    spanText27,
    spanText28,
    spanText29,
    spanText30,
    arrow2,
    spanText31,
    spanText32,
    dots,
    spanText33,
    overlapGroup2,
    spanText34,
    spanText35,
    line1,
    spanText36,
    spanText37,
    overlapGroup22,
    spanText38,
    spanText39,
    line2,
    spanText40,
    spanText41,
    overlapGroup1,
    spanText42,
    spanText43,
    line3,
    spanText44,
    spanText45,
    overlapGroup3,
    spanText46,
    spanText47,
    line4,
    spanText48,
    spanText49,
    sideMenu3Props,
    x03Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="feedback screen">
        <SideMenu3
          dashboard2Props={sideMenu3Props.dashboard2Props}
          foodOrder1Props={sideMenu3Props.foodOrder1Props}
          foodOrder2Props={sideMenu3Props.foodOrder2Props}
          foodOrder3Props={sideMenu3Props.foodOrder3Props}
        />
        <div className="flex-col-1">
          <div className="flex-row">
            <div className="feedback-1 poppins-bold-thunder-36px">
              <span className="poppins-bold-thunder-36px">{spanText1}</span>
            </div>
            <div className="menu">
              <div className="overlap-group1">
                <div className="ellipse-7"></div>
                <img className="order-discussion" src={orderDiscussion} alt="Order Discussion" />
              </div>
              <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup})` }}>
                <div className="ellipse-7-1"></div>
              </div>
              <img className="setting" src={setting} alt="Setting" />
              <div className="placeholder-1"></div>
            </div>
          </div>
          <div className="overlap-group3">
            <div className="flex-col-2">
              <div className="statistic poppins-bold-thunder-24px">
                <span className="poppins-bold-thunder-24px">{spanText2}</span>
              </div>
              <div className="chart">
                <div className="number-1 poppins-normal-amethyst-smoke-14px">
                  <div className="number-2">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText3}</span>
                  </div>
                  <div className="number">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText4}</span>
                  </div>
                  <div className="number">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText5}</span>
                  </div>
                  <div className="number">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText6}</span>
                  </div>
                  <div className="number-3">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText7}</span>
                  </div>
                  <div className="number-4">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText8}</span>
                  </div>
                </div>
                <div className="overlap-group1-1">
                  <div className="month">
                    <div className="line-2">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                    <div className="flex-row-1">
                      <div className="name-1 poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText9}</span>
                      </div>
                      <div className="feb poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText10}</span>
                      </div>
                      <div className="place poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText11}</span>
                      </div>
                      <div className="apr poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText12}</span>
                      </div>
                      <div className="name-2 poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText13}</span>
                      </div>
                      <div className="jun poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText14}</span>
                      </div>
                      <div className="jul poppins-normal-thunder-14px">
                        <span className="poppins-normal-thunder-14px">{spanText15}</span>
                      </div>
                      <div className="aug poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText16}</span>
                      </div>
                      <div className="sep poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText17}</span>
                      </div>
                      <div className="oct poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText18}</span>
                      </div>
                      <div className="nov poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText19}</span>
                      </div>
                      <div className="dec poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText20}</span>
                      </div>
                    </div>
                  </div>
                  <div className="chart-1">
                    <div className="x01">
                      <div className="bar"></div>
                      <div className="bar-1"></div>
                    </div>
                    <div className="x02">
                      <div className="bar-2"></div>
                      <div className="bar-3"></div>
                    </div>
                    <X03 />
                    <X05 />
                    <X07 />
                    <X09 />
                    <X11 />
                    <X03 className={x03Props.className} />
                    <X05 />
                    <X07 />
                    <X09 />
                    <X11 />
                  </div>
                  <div className="details">
                    <img className="polygon-2" src={polygon2} alt="Polygon 2" />
                    <div className="overlap-group-2">
                      <div className="rectangle-25"></div>
                      <img className="polygon-1" src={polygon1} alt="Polygon 1" />
                      <div className="rectangle-26"></div>
                      <div className="july poppins-normal-white-14px">
                        <span className="poppins-normal-white-14px">{spanText21}</span>
                      </div>
                      <div className="text-1 poppins-semi-bold-white-18px">
                        <span className="poppins-semi-bold-white-18px">{spanText22}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details-1">
              <SortBy />
              <div className="list">
                <div className="male">
                  <div className="dot"></div>
                  <div className="positive poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText23}</span>
                  </div>
                </div>
                <div className="female">
                  <div className="dot-1"></div>
                  <div className="bad poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText24}</span>
                  </div>
                </div>
              </div>
              <div className="overlap-group2">
                <div className="income">
                  <div className="inv-0001234 poppins-normal-thunder-18px">
                    <span className="poppins-normal-thunder-18px">{spanText25}</span>
                  </div>
                  <div className="text-2 poppins-bold-thunder-24px">
                    <span className="poppins-bold-thunder-24px">{spanText26}</span>
                  </div>
                  <div className="growth">
                    <img className="arrow" src={arrow1} alt="arrow" />
                    <div className="text-3 poppins-semi-bold-selective-yellow-18px">
                      <span className="poppins-semi-bold-selective-yellow-18px">{spanText27}</span>
                    </div>
                  </div>
                </div>
                <div className="inv-0001234-1 poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText28}</span>
                </div>
              </div>
              <div className="expense">
                <div className="inv-0001234-2 poppins-normal-thunder-18px">
                  <span className="poppins-normal-thunder-18px">{spanText29}</span>
                </div>
                <div className="text-4 poppins-bold-thunder-24px">
                  <span className="poppins-bold-thunder-24px">{spanText30}</span>
                </div>
                <div className="flex-row-2">
                  <div className="growth-1">
                    <img className="arrow" src={arrow2} alt="arrow" />
                    <div className="text-5 poppins-semi-bold-mandy-18px">
                      <span className="poppins-semi-bold-mandy-18px">{spanText31}</span>
                    </div>
                  </div>
                  <div className="inv-0001234-3 poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText32}</span>
                  </div>
                </div>
              </div>
            </div>
            <img className="dots" src={dots} alt="Dots" />
          </div>
          <div className="recent-feedback">
            <div className="flex-row-3">
              <div className="recent-feedback-1 poppins-bold-thunder-24px">
                <span className="poppins-bold-thunder-24px">{spanText33}</span>
              </div>
              <Group455 />
            </div>
            <div className="items">
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <Rate6 />
                <p className="lorem-ipsum-dolor-sit-amet poppins-semi-bold-thunder-14px">
                  <span className="poppins-semi-bold-thunder-14px">{spanText34}</span>
                </p>
                <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText35}</span>
                </p>
                <img className="line-1" src={line1} alt="line" />
                <div className="user">
                  <div className="placeholder"></div>
                  <div className="flex-col">
                    <div className="name poppins-medium-thunder-18px">
                      <span className="poppins-medium-thunder-18px">{spanText36}</span>
                    </div>
                    <div className="ordered-june-21-2020 poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText37}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup22})` }}>
                <Rate6 />
                <p className="lorem-ipsum-dolor-sit-amet poppins-semi-bold-thunder-14px">
                  <span className="poppins-semi-bold-thunder-14px">{spanText38}</span>
                </p>
                <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText39}</span>
                </p>
                <img className="line-1" src={line2} alt="line" />
                <div className="user">
                  <div className="placeholder"></div>
                  <div className="flex-col">
                    <div className="name poppins-medium-thunder-18px">
                      <span className="poppins-medium-thunder-18px">{spanText40}</span>
                    </div>
                    <div className="ordered-june-21-2020 poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText41}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <Rate6 />
                <p className="lorem-ipsum-dolor-sit-amet poppins-semi-bold-thunder-14px">
                  <span className="poppins-semi-bold-thunder-14px">{spanText42}</span>
                </p>
                <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText43}</span>
                </p>
                <img className="line-1" src={line3} alt="line" />
                <div className="user">
                  <div className="placeholder"></div>
                  <div className="flex-col">
                    <div className="name poppins-medium-thunder-18px">
                      <span className="poppins-medium-thunder-18px">{spanText44}</span>
                    </div>
                    <div className="ordered-june-21-2020 poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText45}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                <Rate6 />
                <p className="lorem-ipsum-dolor-sit-amet poppins-semi-bold-thunder-14px">
                  <span className="poppins-semi-bold-thunder-14px">{spanText46}</span>
                </p>
                <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText47}</span>
                </p>
                <img className="line-1" src={line4} alt="line" />
                <div className="user">
                  <div className="placeholder"></div>
                  <div className="flex-col">
                    <div className="name poppins-medium-thunder-18px">
                      <span className="poppins-medium-thunder-18px">{spanText48}</span>
                    </div>
                    <div className="ordered-june-21-2020 poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText49}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
