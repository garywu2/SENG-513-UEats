import React from "react";
import SideMenu3 from "../SideMenu3";
import Grid from "../Grid";
import Icon3 from "../Icon3";
import SortBy from "../SortBy";
import X019 from "../X019";
import "./Dashboard5.sass";

function Dashboard5(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    star1,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    dots1,
    doubleCheck,
    spanText8,
    spanText9,
    icon,
    spanText10,
    spanText11,
    alert,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    line,
    spanText18,
    spanText19,
    spanText20,
    spanText21,
    spanText22,
    spanText23,
    overlapGroup1,
    spanText24,
    spanText25,
    spanText26,
    dropdown,
    orderDiscussion,
    overlapGroup,
    setting,
    spanText27,
    spanText28,
    spanText29,
    spanText30,
    averageStatistic,
    spanText31,
    spanText32,
    spanText33,
    dots2,
    spanText34,
    spanText35,
    overlapGroup2,
    spanText36,
    spanText37,
    spanText38,
    spanText39,
    spanText40,
    spanText41,
    spanText42,
    polygon1,
    spanText43,
    spanText44,
    spanText45,
    spanText46,
    spanText47,
    spanText48,
    spanText49,
    spanText50,
    sideMenu3Props,
    grid1Props,
    grid2Props,
    grid3Props,
    icon31Props,
    icon32Props,
    x0191Props,
    x0192Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashboard screen">
        <SideMenu3
          dashboard2Props={sideMenu3Props.dashboard2Props}
          foodOrder1Props={sideMenu3Props.foodOrder1Props}
          foodOrder2Props={sideMenu3Props.foodOrder2Props}
          foodOrder3Props={sideMenu3Props.foodOrder3Props}
        />
        <div className="flex-col">
          <div className="hello-driver poppins-bold-thunder-36px">
            <span className="poppins-bold-thunder-36px">{spanText1}</span>
          </div>
          <div className="overlap-group7">
            <div className="profile poppins-bold-thunder-24px">
              <span className="poppins-bold-thunder-24px">{spanText2}</span>
            </div>
            <div className="user">
              <div className="placeholder"></div>
              <div className="flex-col-1">
                <div className="name poppins-bold-thunder-24px">
                  <span className="poppins-bold-thunder-24px">{spanText3}</span>
                </div>
                <div className="rate">
                  <div className="rate-1">
                    <img className="star-1" src={star1} alt="Star 1" />
                    <div className="text-1 poppins-normal-amethyst-smoke-18px">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText4}</span>
                    </div>
                  </div>
                  <div className="ellipse-33"></div>
                  <div className="wishlist">
                    <div className="x1k-reviews poppins-normal-amethyst-smoke-18px">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText5}</span>
                    </div>
                  </div>
                </div>
                <div className="join-june-2020 poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText6}</span>
                </div>
                <div className="overlap-group">
                  <div className="edit-profile poppins-normal-amethyst-smoke-18px">
                    <span className="poppins-normal-amethyst-smoke-18px">{spanText7}</span>
                  </div>
                </div>
              </div>
              <img className="dots" src={dots1} alt="Dots" />
            </div>
            <div className="overview">
              <div className="x01">
                <img className="double-check" src={doubleCheck} alt="Double Check" />
                <div className="text">
                  <div className="number poppins-bold-thunder-32px">
                    <span className="poppins-bold-thunder-32px">{spanText8}</span>
                  </div>
                  <div className="finished-order poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText9}</span>
                  </div>
                </div>
              </div>
              <div className="x02">
                <img className="icon" src={icon} alt="icon" />
                <div className="text-2">
                  <div className="text-2-1 poppins-bold-thunder-32px">
                    <span className="poppins-bold-thunder-32px">{spanText10}</span>
                  </div>
                  <div className="order-delivered poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText11}</span>
                  </div>
                </div>
              </div>
              <div className="x03">
                <img className="alert" src={alert} alt="Alert" />
                <div className="text-3">
                  <div className="number-1 poppins-bold-thunder-32px">
                    <span className="poppins-bold-thunder-32px">{spanText12}</span>
                  </div>
                  <div className="order-canceled poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText13}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="earnings">
              <div className="flex-row">
                <div className="x01-1">
                  <Grid src={grid1Props.src} />
                  <div className="flex-col-2">
                    <div className="x-earnings poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText14}</span>
                    </div>
                    <div className="price poppins-bold-thunder-32px">
                      <span className="poppins-bold-thunder-32px">{spanText15}</span>
                    </div>
                  </div>
                </div>
                <div className="x02-1">
                  <Grid src={grid2Props.src} className={grid2Props.className} />
                  <div className="flex-col-3">
                    <div className="x-earnings poppins-normal-amethyst-smoke-14px">
                      <span className="poppins-normal-amethyst-smoke-14px">{spanText16}</span>
                    </div>
                    <div className="price poppins-bold-thunder-32px">
                      <span className="poppins-bold-thunder-32px">{spanText17}</span>
                    </div>
                  </div>
                </div>
              </div>
              <img className="line" src={line} alt="Line" />
              <div className="details">
                <div className="trip">
                  <div className="total-trip poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText18}</span>
                  </div>
                  <div className="number-2 poppins-bold-thunder-18px">
                    <span className="poppins-bold-thunder-18px">{spanText19}</span>
                  </div>
                </div>
                <div className="distance">
                  <div className="total-distance poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText20}</span>
                  </div>
                  <div className="address poppins-bold-thunder-18px">
                    <span className="poppins-bold-thunder-18px">{spanText21}</span>
                  </div>
                </div>
                <div className="time">
                  <div className="total-time poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText22}</span>
                  </div>
                  <div className="address-1 poppins-bold-thunder-18px">
                    <span className="poppins-bold-thunder-18px">{spanText23}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <Grid src={grid3Props.src} className={grid3Props.className} />
              <div className="user-1">
                <div className="my-points poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText24}</span>
                </div>
                <div className="number-3 poppins-bold-thunder-24px">
                  <span className="poppins-bold-thunder-24px">{spanText25}</span>
                </div>
              </div>
              <div className="see-reward poppins-normal-amethyst-smoke-14px">
                <span className="poppins-normal-amethyst-smoke-14px">{spanText26}</span>
              </div>
              <img className="dropdown" src={dropdown} alt="dropdown" />
            </div>
          </div>
        </div>
        <div className="flex-col-4">
          <div className="menu">
            <div className="overlap-group1-1">
              <div className="ellipse-7"></div>
              <img className="order-discussion" src={orderDiscussion} alt="Order Discussion" />
            </div>
            <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <div className="ellipse-7-1"></div>
            </div>
            <img className="setting" src={setting} alt="Setting" />
            <div className="placeholder-1"></div>
          </div>
          <div className="overview-1">
            <div className="overview-item">
              <Icon3 src={icon31Props.src} />
              <div className="text">
                <div className="percent poppins-bold-thunder-32px">
                  <span className="poppins-bold-thunder-32px">{spanText27}</span>
                </div>
                <div className="performance poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText28}</span>
                </div>
              </div>
            </div>
            <div className="overview-item">
              <Icon3 src={icon32Props.src} />
              <div className="text-4">
                <div className="percent poppins-bold-thunder-32px">
                  <span className="poppins-bold-thunder-32px">{spanText29}</span>
                </div>
                <div className="min-performance poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText30}</span>
                </div>
              </div>
            </div>
            <div className="x03-1">
              <div className="overlap-group-2">
                <img className="average-statistic" src={averageStatistic} alt="Average Statistic" />
                <div className="border"></div>
              </div>
              <div className="text-5">
                <div className="percent-1 poppins-bold-thunder-32px">
                  <span className="poppins-bold-thunder-32px">{spanText31}</span>
                </div>
                <div className="avg-performance poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText32}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group6">
            <div className="flex-row-1">
              <div className="performance-statistic poppins-bold-thunder-24px">
                <span className="poppins-bold-thunder-24px">{spanText33}</span>
              </div>
              <SortBy />
              <img className="dots-1" src={dots2} alt="Dots" />
            </div>
            <div className="flex-row-2">
              <div className="hint">
                <X019 spanText1={x0191Props.spanText1} spanText2={x0191Props.spanText2} />
                <X019
                  spanText1={x0192Props.spanText1}
                  spanText2={x0192Props.spanText2}
                  className={x0192Props.className}
                />
              </div>
              <div className="total">
                <div className="flex-row-3">
                  <div className="avg-performance poppins-normal-amethyst-smoke-14px">
                    <span className="poppins-normal-amethyst-smoke-14px">{spanText34}</span>
                  </div>
                  <div className="percent-2 poppins-bold-thunder-18px">
                    <span className="poppins-bold-thunder-18px">{spanText35}</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
            <div className="overlap-group5">
              <div className="overlap-group4">
                <div className="lines">
                  <div className="overlap-group2">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                    <div className="line-4"></div>
                    <div className="line-5"></div>
                    <div className="line-6"></div>
                    <div className="line-7"></div>
                    <div className="group-272">
                      <div className="ellipse-6"></div>
                      <div className="ellipse-7-2"></div>
                      <div className="overlap-group-3" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                        <div className="ellipse-8"></div>
                      </div>
                      <div className="ellipse-9"></div>
                      <div className="ellipse-10"></div>
                    </div>
                    <div className="group-273">
                      <div className="ellipse-11"></div>
                      <div className="ellipse-12"></div>
                      <div className="overlap-group1-2">
                        <img className="vector" src="/img/vector-19@2x.png" alt="Vector" />
                        <div className="ellipse-8-1"></div>
                      </div>
                      <div className="ellipse-10-1"></div>
                      <div className="ellipse-9-1"></div>
                    </div>
                  </div>
                </div>
                <div className="x-info">
                  <div className="mon poppins-normal-amethyst-smoke-18px">
                    <span className="poppins-normal-amethyst-smoke-18px">{spanText36}</span>
                  </div>
                  <div className="x-info-item poppins-normal-amethyst-smoke-18px">
                    <span className="poppins-normal-amethyst-smoke-18px">{spanText37}</span>
                  </div>
                  <div className="wed poppins-normal-thunder-18px">
                    <span className="poppins-normal-thunder-18px">{spanText38}</span>
                  </div>
                  <div className="x-info-item poppins-normal-amethyst-smoke-18px">
                    <span className="poppins-normal-amethyst-smoke-18px">{spanText39}</span>
                  </div>
                  <div className="fri poppins-normal-amethyst-smoke-18px">
                    <span className="poppins-normal-amethyst-smoke-18px">{spanText40}</span>
                  </div>
                  <div className="sat poppins-normal-amethyst-smoke-18px">
                    <span className="poppins-normal-amethyst-smoke-18px">{spanText41}</span>
                  </div>
                  <div className="place poppins-normal-amethyst-smoke-18px">
                    <span className="poppins-normal-amethyst-smoke-18px">{spanText42}</span>
                  </div>
                </div>
                <div className="overlap-group3">
                  <div className="rectangle-25"></div>
                  <img className="polygon-1" src={polygon1} alt="Polygon 1" />
                  <div className="percent-3 poppins-bold-white-18px">
                    <span className="poppins-bold-white-18px">{spanText43}</span>
                  </div>
                  <div className="address-2 poppins-normal-white-14px">
                    <span className="poppins-normal-white-14px">{spanText44}</span>
                  </div>
                </div>
              </div>
              <div className="y-info poppins-normal-amethyst-smoke-18px">
                <div className="number-4">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText45}</span>
                </div>
                <div className="number-5">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText46}</span>
                </div>
                <div className="number-6">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText47}</span>
                </div>
                <div className="number-7">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText48}</span>
                </div>
                <div className="number-8">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText49}</span>
                </div>
                <div className="number-9">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText50}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard5;
