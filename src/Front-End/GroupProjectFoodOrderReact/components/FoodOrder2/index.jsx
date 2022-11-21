import React from "react";
import Dashboard3 from "../Dashboard3";
import FoodOrder3 from "../FoodOrder3";
import FoodOrder from "../FoodOrder";
import Rate2 from "../Rate2";
import Time from "../Time";
import Distance from "../Distance";
import Menu3 from "../Menu3";
import Total2 from "../Total2";
import CheckoutButton from "../CheckoutButton";
import Menu from "../Menu";
import Content from "../Content";
import Menu2 from "../Menu2";
import Total from "../Total";
import "./FoodOrder2.sass";

function FoodOrder2(props) {
  const {
    spanText1,
    spanText2,
    maskGroup,
    spanText3,
    spanText4,
    spanText5,
    magnifier,
    spanText6,
    spanText7,
    spanText8,
    line1,
    spanText9,
    line2,
    line3,
    line4,
    spanText10,
    spanText11,
    line5,
    spanText12,
    line6,
    line7,
    line8,
    spanText13,
    spanText14,
    line9,
    spanText15,
    line10,
    line11,
    line12,
    spanText16,
    spanText17,
    spanText18,
    line13,
    spanText19,
    line14,
    line15,
    line16,
    spanText20,
    spanText21,
    line17,
    spanText22,
    line18,
    line19,
    line20,
    spanText23,
    spanText24,
    spanText25,
    line21,
    spanText26,
    line22,
    line23,
    line24,
    spanText27,
    overlapGroup2,
    line25,
    cursor,
    spanText28,
    spanText29,
    line26,
    spanText30,
    dashboard3Props,
    foodOrder3Props,
    foodOrder1Props,
    foodOrder2Props,
    foodOrder3Props2,
    foodOrder4Props,
    foodOrder5Props,
    rate2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="food-order screen">
        <div className="side-menu">
          <div className="overlap-group1">
            <h1 className="title poppins-bold-thunder-40px">
              <span className="poppins-bold-thunder-40px">{spanText1}</span>
              <span className="poppins-bold-selective-yellow-40px">{spanText2}</span>
            </h1>
            <div className="list">
              <Dashboard3 restaurantLocation={dashboard3Props.restaurantLocation} spanText={dashboard3Props.spanText} />
              <FoodOrder3 deliveryScooter={foodOrder3Props.deliveryScooter} spanText={foodOrder3Props.spanText} />
              <FoodOrder deliveryScooter={foodOrder1Props.deliveryScooter} spanText={foodOrder1Props.spanText} />
              <FoodOrder
                deliveryScooter={foodOrder2Props.deliveryScooter}
                spanText={foodOrder2Props.spanText}
                className={foodOrder2Props.className}
              />
              <FoodOrder
                deliveryScooter={foodOrder3Props2.deliveryScooter}
                spanText={foodOrder3Props2.spanText}
                className={foodOrder3Props2.className}
              />
              <FoodOrder
                deliveryScooter={foodOrder4Props.deliveryScooter}
                spanText={foodOrder4Props.spanText}
                className={foodOrder4Props.className}
              />
              <FoodOrder
                deliveryScooter={foodOrder5Props.deliveryScooter}
                spanText={foodOrder5Props.spanText}
                className={foodOrder5Props.className}
              />
            </div>
            <div className="overlap-group-1">
              <div className="shadow"></div>
              <div className="background"></div>
              <img className="mask-group" src={maskGroup} alt="Mask Group" />
              <div className="add-button">
                <div className="upgrade poppins-semi-bold-thunder-14px">
                  <span className="poppins-semi-bold-thunder-14px">{spanText3}</span>
                </div>
              </div>
              <img className="vector" src="/img/vector-2@2x.png" alt="Vector" />
              <p className="upgrade-your-account poppins-bold-white-18px">
                <span className="poppins-bold-white-18px">{spanText4}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col">
          <div className="flex-row">
            <div className="food-order-1 poppins-bold-thunder-36px">
              <span className="poppins-bold-thunder-36px">{spanText5}</span>
            </div>
            <div className="search-bar">
              <img className="magnifier" src={magnifier} alt="magnifier" />
              <div className="search-order poppins-normal-amethyst-smoke-18px">
                <span className="poppins-normal-amethyst-smoke-18px">{spanText6}</span>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="overlap-group-container">
              <div className="overlap-group">
                <div className="order-1-1 poppins-bold-thunder-18px">
                  <span className="poppins-bold-thunder-18px">{spanText7}</span>
                </div>
                <p className="nov-11-2021-1838-pm poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText8}</span>
                </p>
                <img className="line" src={line1} alt="line" />
                <div className="fast-food-resto poppins-medium-thunder-18px">
                  <span className="poppins-medium-thunder-18px">{spanText9}</span>
                </div>
                <Rate2 />
                <img className="line-1" src={line2} alt="line" />
                <Time />
                <Distance />
                <img className="line-1" src={line3} alt="line" />
                <div className="order">
                  <Menu3 />
                  <img className="line-1" src={line4} alt="Line" />
                  <Total2 />
                  <CheckoutButton />
                </div>
              </div>
              <div className="overlap-group">
                <div className="order-4 poppins-bold-thunder-18px">
                  <span className="poppins-bold-thunder-18px">{spanText10}</span>
                </div>
                <p className="nov-11-2021-1838-pm poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText11}</span>
                </p>
                <img className="line" src={line5} alt="line" />
                <div className="fast-food-resto poppins-medium-thunder-18px">
                  <span className="poppins-medium-thunder-18px">{spanText12}</span>
                </div>
                <Rate2 />
                <img className="line-1" src={line6} alt="line" />
                <Time />
                <Distance />
                <img className="line-1" src={line7} alt="line" />
                <div className="order">
                  <Menu3 />
                  <img className="line-1" src={line8} alt="Line" />
                  <Total2 />
                  <CheckoutButton />
                </div>
              </div>
            </div>
            <div className="overlap-group-container">
              <div className="overlap-group1-1">
                <div className="order-2 poppins-bold-thunder-18px">
                  <span className="poppins-bold-thunder-18px">{spanText13}</span>
                </div>
                <p className="nov-11-2021-1838-pm-1 poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText14}</span>
                </p>
                <img className="line-3" src={line9} alt="line" />
                <div className="fast-food-resto-1 poppins-medium-thunder-18px">
                  <span className="poppins-medium-thunder-18px">{spanText15}</span>
                </div>
                <Rate2 className={rate2Props.className} />
                <img className="line-2" src={line10} alt="line" />
                <Time />
                <Distance />
                <img className="line-2" src={line11} alt="line" />
                <div className="order-3">
                  <Menu3 />
                  <img className="line-1" src={line12} alt="Line" />
                  <Total2 />
                  <div className="checkout-button">
                    <div className="delivering-to-you poppins-medium-selective-yellow-14px">
                      <span className="poppins-medium-selective-yellow-14px">{spanText16}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group">
                <div className="order-1 poppins-bold-thunder-18px">
                  <span className="poppins-bold-thunder-18px">{spanText17}</span>
                </div>
                <p className="nov-11-2021-1838-pm poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText18}</span>
                </p>
                <img className="line" src={line13} alt="line" />
                <div className="fast-food-resto poppins-medium-thunder-18px">
                  <span className="poppins-medium-thunder-18px">{spanText19}</span>
                </div>
                <Rate2 />
                <img className="line-1" src={line14} alt="line" />
                <Time />
                <Distance />
                <img className="line-1" src={line15} alt="line" />
                <div className="order">
                  <Menu3 />
                  <img className="line-1" src={line16} alt="Line" />
                  <Total2 />
                  <CheckoutButton />
                </div>
              </div>
            </div>
            <div className="overlap-group-container">
              <div className="overlap-group">
                <div className="order-3-1 poppins-bold-thunder-18px">
                  <span className="poppins-bold-thunder-18px">{spanText20}</span>
                </div>
                <p className="nov-11-2021-1838-pm poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText21}</span>
                </p>
                <img className="line" src={line17} alt="line" />
                <div className="fast-food-resto poppins-medium-thunder-18px">
                  <span className="poppins-medium-thunder-18px">{spanText22}</span>
                </div>
                <Rate2 />
                <img className="line-1" src={line18} alt="line" />
                <Time />
                <Distance />
                <img className="line-1" src={line19} alt="line" />
                <div className="order">
                  <Menu3 />
                  <img className="line-1" src={line20} alt="Line" />
                  <Total2 />
                  <div className="checkout-button-1">
                    <div className="order-being-prepared poppins-medium-curious-blue-14px">
                      <span className="poppins-medium-curious-blue-14px">{spanText23}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group">
                <div className="order-1 poppins-bold-thunder-18px">
                  <span className="poppins-bold-thunder-18px">{spanText24}</span>
                </div>
                <p className="nov-11-2021-1838-pm poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText25}</span>
                </p>
                <img className="line" src={line21} alt="line" />
                <div className="fast-food-resto poppins-medium-thunder-18px">
                  <span className="poppins-medium-thunder-18px">{spanText26}</span>
                </div>
                <Rate2 />
                <img className="line-1" src={line22} alt="line" />
                <Time />
                <Distance />
                <img className="line-1" src={line23} alt="line" />
                <div className="order">
                  <Menu3 />
                  <img className="line-1" src={line24} alt="Line" />
                  <Total2 />
                  <CheckoutButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-menu">
          <Menu />
          <div className="maps">
            <div className="order-tracker poppins-bold-thunder-24px">
              <span className="poppins-bold-thunder-24px">{spanText27}</span>
            </div>
            <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <img className="line-4" src={line25} alt="line" />
              <div className="tracker">
                <img className="cursor" src={cursor} alt="Cursor" />
              </div>
              <div className="ellipse-container">
                <div className="ellipse"></div>
                <div className="ellipse-1"></div>
                <div className="ellipse-2"></div>
              </div>
            </div>
          </div>
          <div className="address">
            <div className="your-address poppins-normal-amethyst-smoke-18px">
              <span className="poppins-normal-amethyst-smoke-18px">{spanText28}</span>
            </div>
            <Content />
            <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
              <span className="poppins-normal-amethyst-smoke-14px">{spanText29}</span>
            </p>
          </div>
          <div className="order-5">
            <Menu2 />
            <img className="line-5" src={line26} alt="Line" />
            <Total />
            <div className="checkout-button-2">
              <div className="delivering-to-you-1 poppins-medium-selective-yellow-18px">
                <span className="poppins-medium-selective-yellow-18px">{spanText30}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodOrder2;
