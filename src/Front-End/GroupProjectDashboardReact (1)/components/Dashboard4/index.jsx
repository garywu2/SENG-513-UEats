import React from "react";
import SideMenu2 from "../SideMenu2";
import Icon2 from "../Icon2";
import X016 from "../X016";
import Completed from "../Completed";
import "./Dashboard4.sass";

function Dashboard4(props) {
  const {
    spanText1,
    magnifier,
    spanText2,
    orderDiscussion,
    overlapGroup,
    setting,
    spanText3,
    spanText4,
    separator,
    spanText5,
    spanText6,
    arrow1,
    spanText7,
    spanText8,
    spanText9,
    arrow2,
    spanText10,
    spanText11,
    sent,
    chart1,
    spanText12,
    spanText13,
    spanText14,
    arrow3,
    spanText15,
    ellipse35,
    ellipse36,
    spanText16,
    spanText17,
    spanText18,
    chevronDown,
    user,
    spanText19,
    spanText20,
    spanText21,
    spanText22,
    spanText23,
    spanText24,
    spanText25,
    spanText26,
    spanText27,
    spanText28,
    spanText29,
    spanText30,
    spanText31,
    chart2,
    line1,
    line2,
    chartChocolate,
    overlapGroup2,
    spanText32,
    spanText33,
    spanText34,
    spanText35,
    spanText36,
    spanText37,
    spanText38,
    spanText39,
    spanText40,
    spanText41,
    spanText42,
    spanText43,
    spanText44,
    spanText45,
    spanText46,
    spanText47,
    spanText48,
    spanText49,
    spanText50,
    spanText51,
    spanText52,
    spanText53,
    spanText54,
    dots,
    spanText55,
    spanText56,
    spanText57,
    spanText58,
    spanText59,
    spanText60,
    spanText61,
    spanText62,
    spanText63,
    spanText64,
    spanText65,
    spanText66,
    spanText67,
    spanText68,
    spanText69,
    spanText70,
    spanText71,
    spanText72,
    spanText73,
    spanText74,
    spanText75,
    spanText76,
    spanText77,
    spanText78,
    spanText79,
    spanText80,
    spanText81,
    spanText82,
    sideMenu2Props,
    icon21Props,
    icon22Props,
    icon23Props,
    icon24Props,
    x0161Props,
    x0162Props,
    completed1Props,
    completed2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashboard screen">
        <SideMenu2
          dashboard2Props={sideMenu2Props.dashboard2Props}
          foodOrder1Props={sideMenu2Props.foodOrder1Props}
          foodOrder2Props={sideMenu2Props.foodOrder2Props}
          foodOrder3Props={sideMenu2Props.foodOrder3Props}
          foodOrder4Props={sideMenu2Props.foodOrder4Props}
        />
        <div className="flex-col">
          <div className="flex-row">
            <div className="dashboard-1 poppins-bold-thunder-36px">
              <span className="poppins-bold-thunder-36px">{spanText1}</span>
            </div>
            <div className="search-bar">
              <img className="magnifier" src={magnifier} alt="magnifier" />
              <div className="search poppins-normal-amethyst-smoke-18px">
                <span className="poppins-normal-amethyst-smoke-18px">{spanText2}</span>
              </div>
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
          <div className="flex-row-1">
            <div className="flex-col-1">
              <div className="income">
                <div className="total">
                  <div className="inv-0001234 poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText3}</span>
                  </div>
                  <div className="price-1 poppins-bold-thunder-36px">
                    <span className="poppins-bold-thunder-36px">{spanText4}</span>
                  </div>
                </div>
                <img className="separator" src={separator} alt="separator" />
                <div className="income-1">
                  <div className="inv-0001234-1 poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText5}</span>
                  </div>
                  <div className="price inter-bold-thunder-24px">
                    <span className="inter-bold-thunder-24px">{spanText6}</span>
                  </div>
                  <div className="growth">
                    <img className="arrow" src={arrow1} alt="arrow" />
                    <div className="text cairo-semi-bold-peridot-14px">
                      <span className="cairo-semi-bold-peridot-14px">{spanText7}</span>
                    </div>
                  </div>
                </div>
                <div className="expense">
                  <div className="inv-0001234-2 poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText8}</span>
                  </div>
                  <div className="price inter-bold-thunder-24px">
                    <span className="inter-bold-thunder-24px">{spanText9}</span>
                  </div>
                  <div className="growth-1">
                    <img className="arrow" src={arrow2} alt="arrow" />
                    <div className="text cairo-semi-bold-mandy-14px">
                      <span className="cairo-semi-bold-mandy-14px">{spanText10}</span>
                    </div>
                  </div>
                </div>
                <div className="button">
                  <div className="title poppins-medium-white-18px">
                    <span className="poppins-medium-white-18px">{spanText11}</span>
                  </div>
                  <img className="sent" src={sent} alt="Sent" />
                </div>
              </div>
              <div className="flex-row-2">
                <div className="chart">
                  <img className="chart-1" src={chart1} alt="chart" />
                  <div className="time inter-normal-amethyst-smoke-14px">
                    <div className="text-8">
                      <span className="inter-normal-amethyst-smoke-14px">{spanText12}</span>
                    </div>
                    <div className="text-9">
                      <span className="inter-normal-amethyst-smoke-14px">{spanText13}</span>
                    </div>
                  </div>
                </div>
                <div className="overlap-group8">
                  <div className="performance poppins-bold-thunder-18px">
                    <span className="poppins-bold-thunder-18px">{spanText14}</span>
                  </div>
                  <div className="flex-row-3">
                    <div className="overlap-group-1">
                      <div className="growth-2">
                        <img className="arrow" src={arrow3} alt="arrow" />
                        <div className="text-10 poppins-semi-bold-thunder-36px">
                          <span className="poppins-semi-bold-thunder-36px">{spanText15}</span>
                        </div>
                      </div>
                      <img className="ellipse-35" src={ellipse35} alt="Ellipse 35" />
                      <img className="ellipse-36" src={ellipse36} alt="Ellipse 36" />
                    </div>
                    <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText16}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="overlap-group4">
                <div className="flex-row-4">
                  <div className="order-rate poppins-bold-thunder-18px">
                    <span className="poppins-bold-thunder-18px">{spanText17}</span>
                  </div>
                  <div className="sort-by">
                    <div className="month poppins-normal-thunder-14px">
                      <span className="poppins-normal-thunder-14px">{spanText18}</span>
                    </div>
                    <img className="chevron-down" src={chevronDown} alt="chevron-down" />
                  </div>
                </div>
                <div className="total-1">
                  <div className="total-2">
                    <img className="user" src={user} alt="User" />
                    <div className="x01">
                      <div className="order-total poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText19}</span>
                      </div>
                      <div className="text-2 poppins-semi-bold-thunder-18px">
                        <span className="poppins-semi-bold-thunder-18px">{spanText20}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="flex-row-5">
                      <div className="target poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText21}</span>
                      </div>
                      <div className="text-3 poppins-bold-thunder-18px">
                        <span className="poppins-bold-thunder-18px">{spanText22}</span>
                      </div>
                    </div>
                    <div className="progress-bar">
                      <div className="progress"></div>
                    </div>
                  </div>
                  <div className="overlap-group-2">
                    <div className="x02">
                      <div className="ellipse"></div>
                      <div className="x-month poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText23}</span>
                      </div>
                    </div>
                    <div className="number poppins-semi-bold-thunder-18px">
                      <span className="poppins-semi-bold-thunder-18px">{spanText24}</span>
                    </div>
                  </div>
                  <div className="overlap-group1-1">
                    <div className="x01-1">
                      <div className="ellipse-1"></div>
                      <div className="x-month poppins-normal-amethyst-smoke-14px">
                        <span className="poppins-normal-amethyst-smoke-14px">{spanText25}</span>
                      </div>
                    </div>
                    <div className="number poppins-semi-bold-thunder-18px">
                      <span className="poppins-semi-bold-thunder-18px">{spanText26}</span>
                    </div>
                  </div>
                </div>
                <div className="chart-2">
                  <div className="number-1 poppins-normal-amethyst-smoke-18px">
                    <div className="number-2">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText27}</span>
                    </div>
                    <div className="number-3">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText28}</span>
                    </div>
                    <div className="number-4">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText29}</span>
                    </div>
                    <div className="number-5">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText30}</span>
                    </div>
                    <div className="number-6">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText31}</span>
                    </div>
                  </div>
                  <div className="flex-col-2">
                    <div className="overlap-group3">
                      <div className="chart-3" style={{ backgroundImage: `url(${chart2})` }}>
                        <div className="overlap-group1-2">
                          <div className="overlap-group-3">
                            <img className="line-1" src={line1} alt="line" />
                            <img className="line-2" src={line2} alt="line" />
                            <div className="ellipse-6"></div>
                          </div>
                          <img className="chart-chocolate" src={chartChocolate} alt="chart chocolate" />
                        </div>
                      </div>
                      <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                        <div className="july poppins-normal-white-14px">
                          <span className="poppins-normal-white-14px">{spanText32}</span>
                        </div>
                        <div className="text-1 poppins-semi-bold-white-18px">
                          <span className="poppins-semi-bold-white-18px">{spanText33}</span>
                        </div>
                      </div>
                    </div>
                    <div className="month-1">
                      <div className="name poppins-normal-amethyst-smoke-18px">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText34}</span>
                      </div>
                      <div className="month-item poppins-normal-amethyst-smoke-18px">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText35}</span>
                      </div>
                      <div className="month-item-1 poppins-normal-amethyst-smoke-18px">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText36}</span>
                      </div>
                      <div className="month-item-2 poppins-normal-amethyst-smoke-18px">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText37}</span>
                      </div>
                      <div className="name-1 poppins-normal-amethyst-smoke-18px">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText38}</span>
                      </div>
                      <div className="month-item poppins-normal-amethyst-smoke-18px">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText39}</span>
                      </div>
                      <div className="jul poppins-normal-thunder-18px">
                        <span className="poppins-normal-thunder-18px">{spanText40}</span>
                      </div>
                      <div className="aug poppins-normal-amethyst-smoke-18px">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText41}</span>
                      </div>
                      <div className="sep poppins-normal-amethyst-smoke-18px">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText42}</span>
                      </div>
                      <div className="month-item-2 poppins-normal-amethyst-smoke-18px">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText43}</span>
                      </div>
                      <div className="month-item-1 poppins-normal-amethyst-smoke-18px">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText44}</span>
                      </div>
                      <div className="dec poppins-normal-amethyst-smoke-18px">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText45}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group-container">
              <div className="overlap-group6">
                <div className="x01-2">
                  <Icon2 src={icon21Props.src} />
                  <div className="text-4">
                    <div className="total-order-complete poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText46}</span>
                    </div>
                    <div className="text-6 poppins-bold-thunder-24px">
                      <span className="poppins-bold-thunder-24px">{spanText47}</span>
                    </div>
                  </div>
                </div>
                <div className="x02-1">
                  <Icon2 src={icon22Props.src} className={icon22Props.className} />
                  <div className="text-5">
                    <div className="total-order-delivered poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText48}</span>
                    </div>
                    <div className="text-7 poppins-bold-thunder-24px">
                      <span className="poppins-bold-thunder-24px">{spanText49}</span>
                    </div>
                  </div>
                </div>
                <div className="x03">
                  <Icon2 src={icon23Props.src} className={icon23Props.className} />
                  <div className="text-11">
                    <div className="total-order-canceled poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText50}</span>
                    </div>
                    <div className="number-7 poppins-bold-thunder-24px">
                      <span className="poppins-bold-thunder-24px">{spanText51}</span>
                    </div>
                  </div>
                </div>
                <div className="x04">
                  <Icon2 src={icon24Props.src} className={icon24Props.className} />
                  <div className="text-12">
                    <div className="order-pending poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText52}</span>
                    </div>
                    <div className="number-8 poppins-bold-thunder-24px">
                      <span className="poppins-bold-thunder-24px">{spanText53}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group7">
                <div className="flex-row-6">
                  <div className="popular-food poppins-bold-thunder-18px">
                    <span className="poppins-bold-thunder-18px">{spanText54}</span>
                  </div>
                  <img className="dots" src={dots} alt="Dots" />
                </div>
                <img className="circle" src="/img/circle@1x.png" alt="circle" />
                <div className="legend">
                  <div className="legend-1 poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText55}</span>
                  </div>
                  <div className="item-1">
                    <div className="dot"></div>
                    <div className="asian-food-27 poppins-normal-thunder-14px">
                      <span className="poppins-normal-thunder-14px">{spanText56}</span>
                    </div>
                    <div className="number-9 poppins-semi-bold-thunder-18px">
                      <span className="poppins-semi-bold-thunder-18px">{spanText57}</span>
                    </div>
                  </div>
                  <div className="item">
                    <div className="dot-1"></div>
                    <div className="fast-food-50 poppins-normal-thunder-14px">
                      <span className="poppins-normal-thunder-14px">{spanText58}</span>
                    </div>
                    <div className="number-10 poppins-semi-bold-thunder-18px">
                      <span className="poppins-semi-bold-thunder-18px">{spanText59}</span>
                    </div>
                  </div>
                  <div className="item">
                    <div className="dot-2"></div>
                    <div className="western-food-23 poppins-normal-thunder-14px">
                      <span className="poppins-normal-thunder-14px">{spanText60}</span>
                    </div>
                    <div className="number-11 poppins-semi-bold-thunder-18px">
                      <span className="poppins-semi-bold-thunder-18px">{spanText61}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group9">
            <div className="flex-col-3">
              <div className="activity poppins-bold-thunder-18px">
                <span className="poppins-bold-thunder-18px">{spanText62}</span>
              </div>
              <div className="overlap-group1-3">
                <div className="details">
                  <div className="total-3 poppins-normal-amethyst-smoke-18px">
                    <div className="number-12">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText63}</span>
                    </div>
                    <div className="number-13">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText64}</span>
                    </div>
                    <div className="number-14">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText65}</span>
                    </div>
                    <div className="number-15">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText66}</span>
                    </div>
                    <div className="number-16">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText67}</span>
                    </div>
                    <div className="number-17">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText68}</span>
                    </div>
                  </div>
                  <div className="flex-col-4">
                    <div className="overlap-group-4">
                      <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                      </div>
                      <div className="number-18 cairo-bold-white-18px">
                        <span className="cairo-bold-white-18px">{spanText69}</span>
                      </div>
                      <div className="task cairo-normal-white-14px">
                        <span className="cairo-normal-white-14px">{spanText70}</span>
                      </div>
                    </div>
                    <div className="month-2 poppins-normal-amethyst-smoke-18px">
                      <div className="name-2">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText71}</span>
                      </div>
                      <div className="feb">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText72}</span>
                      </div>
                      <div className="place">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText73}</span>
                      </div>
                      <div className="apr">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText74}</span>
                      </div>
                      <div className="name-3">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText75}</span>
                      </div>
                      <div className="jun">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText76}</span>
                      </div>
                      <div className="jul-1">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText77}</span>
                      </div>
                      <div className="aug-1">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText78}</span>
                      </div>
                      <div className="sep-1">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText79}</span>
                      </div>
                      <div className="oct">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText80}</span>
                      </div>
                      <div className="nov">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText81}</span>
                      </div>
                      <div className="dec-1">
                        <span className="poppins-normal-amethyst-smoke-18px">{spanText82}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chart-4">
                  <X016 />
                  <div className="chart-item">
                    <div className="bar-1"></div>
                    <div className="bar-2"></div>
                  </div>
                  <div className="chart-item">
                    <div className="bar-3"></div>
                    <div className="bar-4"></div>
                  </div>
                  <div className="chart-item">
                    <div className="bar-5"></div>
                    <div className="bar-6"></div>
                  </div>
                  <div className="chart-item">
                    <div className="bar-7"></div>
                    <div className="bar-8"></div>
                  </div>
                  <div className="x06">
                    <div className="bar-9"></div>
                    <div className="bar-10"></div>
                  </div>
                  <div className="chart-item">
                    <div className="bar-11"></div>
                    <div className="bar-12"></div>
                  </div>
                  <X016 className={x0161Props.className} />
                  <div className="chart-item">
                    <div className="bar-13"></div>
                    <div className="bar-14"></div>
                  </div>
                  <div className="chart-item">
                    <div className="bar-15"></div>
                    <div className="bar-16"></div>
                  </div>
                  <div className="chart-item">
                    <div className="bar-17"></div>
                    <div className="bar-18"></div>
                  </div>
                  <X016 className={x0162Props.className} />
                </div>
              </div>
            </div>
            <div className="performance-1">
              <Completed spanText1={completed1Props.spanText1} spanText2={completed1Props.spanText2} />
              <Completed
                spanText1={completed2Props.spanText1}
                spanText2={completed2Props.spanText2}
                className={completed2Props.className}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard4;
