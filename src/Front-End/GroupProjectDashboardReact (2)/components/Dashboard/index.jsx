import React from "react";
import Dashboard2 from "../Dashboard2";
import FoodOrder from "../FoodOrder";
import Title from "../Title";
import X01 from "../X01";
import Name from "../Name";
import Rate from "../Rate";
import Name2 from "../Name2";
import Name3 from "../Name3";
import Menu from "../Menu";
import Content from "../Content";
import Menu2 from "../Menu2";
import Total from "../Total";
import "./Dashboard.sass";

function Dashboard(props) {
  const {
    spanText1,
    spanText2,
    maskGroup,
    spanText3,
    spanText4,
    spanText5,
    magnifier,
    spanText6,
    banner,
    spanText7,
    spanText8,
    border,
    image1,
    button1,
    love1,
    spanText9,
    x021,
    image2,
    spanText10,
    love2,
    button2,
    x031,
    image3,
    spanText11,
    love3,
    button3,
    x01,
    image4,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    love4,
    x022,
    image5,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    spanText21,
    love5,
    x032,
    image6,
    spanText22,
    spanText23,
    spanText24,
    spanText25,
    spanText26,
    love6,
    spanText27,
    overlapGroup,
    spanText28,
    spanText29,
    income,
    spanText30,
    profit,
    spanText31,
    spanText32,
    spanText33,
    spanText34,
    spanText35,
    spanText36,
    line,
    spanText37,
    spanText38,
    spanText39,
    spanText40,
    coupon,
    spanText41,
    chevronDown,
    spanText42,
    dashboard2Props,
    foodOrder1Props,
    foodOrder2Props,
    foodOrder3Props,
    foodOrder4Props,
    foodOrder5Props,
    foodOrder6Props,
    title1Props,
    x011Props,
    x012Props,
    x013Props,
    x014Props,
    x015Props,
    x016Props,
    title2Props,
    rate1Props,
    rate2Props,
    title3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashboard-2 screen">
        <div className="side-menu">
          <div className="overlap-group1">
            <h1 className="title poppins-bold-thunder-40px">
              <span className="poppins-bold-thunder-40px">{spanText1}</span>
              <span className="poppins-bold-selective-yellow-40px">{spanText2}</span>
            </h1>
            <div className="list">
              <Dashboard2 restaurantLocation={dashboard2Props.restaurantLocation} />
              <FoodOrder deliveryScooter={foodOrder1Props.deliveryScooter} spanText={foodOrder1Props.spanText} />
              <FoodOrder
                deliveryScooter={foodOrder2Props.deliveryScooter}
                spanText={foodOrder2Props.spanText}
                className={foodOrder2Props.className}
              />
              <FoodOrder
                deliveryScooter={foodOrder3Props.deliveryScooter}
                spanText={foodOrder3Props.spanText}
                className={foodOrder3Props.className}
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
              <FoodOrder
                deliveryScooter={foodOrder6Props.deliveryScooter}
                spanText={foodOrder6Props.spanText}
                className={foodOrder6Props.className}
              />
            </div>
            <div className="overlap-group-2">
              <div className="shadow"></div>
              <div className="background"></div>
              <img className="mask-group" src={maskGroup} alt="Mask Group" />
              <div className="add-button">
                <div className="upgrade poppins-semi-bold-thunder-14px">
                  <span className="poppins-semi-bold-thunder-14px">{spanText3}</span>
                </div>
              </div>
              <img className="vector" src="/img/vector-1@2x.png" alt="Vector" />
              <p className="upgrade-your-account poppins-bold-white-18px">
                <span className="poppins-bold-white-18px">{spanText4}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col-2">
          <div className="flex-row-1">
            <div className="hello-samantha poppins-bold-thunder-36px">
              <span className="poppins-bold-thunder-36px">{spanText5}</span>
            </div>
            <div className="search-bar">
              <img className="magnifier" src={magnifier} alt="magnifier" />
              <p className="what-do-you-want-eat-today poppins-normal-amethyst-smoke-18px">
                <span className="poppins-normal-amethyst-smoke-18px">{spanText6}</span>
              </p>
            </div>
          </div>
          <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
            <p className="get-discount-voucher-up-to-20 poppins-bold-white-32px">
              <span className="poppins-bold-white-32px">{spanText7}</span>
            </p>
            <p className="lorem-ipsum-dolor-si poppins-normal-white-14px">
              <span className="poppins-normal-white-14px">{spanText8}</span>
            </p>
          </div>
          <div className="category">
            <Title spanText1={title1Props.spanText1} />
            <div className="items">
              <X01 baked={x011Props.baked} spanText={x011Props.spanText} />
              <X01 baked={x012Props.baked} spanText={x012Props.spanText} />
              <X01 baked={x013Props.baked} spanText={x013Props.spanText} />
              <X01 baked={x014Props.baked} spanText={x014Props.spanText} />
              <X01 baked={x015Props.baked} spanText={x015Props.spanText} />
              <X01 baked={x016Props.baked} spanText={x016Props.spanText} />
            </div>
          </div>
          <div className="popular-dish">
            <Title spanText1={title2Props.spanText1} className={title2Props.className} />
            <div className="items-1">
              <div className="overlap-group1-1">
                <img className="border" src={border} alt="border" />
                <img className="image-2" src={image1} alt="image" />
                <Name />
                <Rate />
                <img className="button-1" src={button1} alt="button" />
                <img className="love-2" src={love1} alt="Love" />
                <div className="overlap-group-3">
                  <div className="x15-off poppins-normal-white-18px">
                    <span className="poppins-normal-white-18px">{spanText9}</span>
                  </div>
                </div>
              </div>
              <div className="items-item" style={{ backgroundImage: `url(${x021})` }}>
                <div className="flex-row">
                  <div className="flex-col">
                    <div className="overlap-group">
                      <img className="image" src={image2} alt="image" />
                      <div className="overlap-group-1">
                        <div className="x15-off poppins-normal-white-18px">
                          <span className="poppins-normal-white-18px">{spanText10}</span>
                        </div>
                      </div>
                    </div>
                    <Rate className={rate1Props.className} />
                  </div>
                  <img className="love" src={love2} alt="Love" />
                </div>
                <div className="flex-row-2">
                  <Name2 />
                  <img className="button" src={button2} alt="button" />
                </div>
              </div>
              <div className="items-item" style={{ backgroundImage: `url(${x031})` }}>
                <div className="flex-row">
                  <div className="flex-col">
                    <div className="overlap-group">
                      <img className="image" src={image3} alt="image" />
                      <div className="overlap-group-1">
                        <div className="x15-off poppins-normal-white-18px">
                          <span className="poppins-normal-white-18px">{spanText11}</span>
                        </div>
                      </div>
                    </div>
                    <Rate className={rate2Props.className} />
                  </div>
                  <img className="love" src={love3} alt="Love" />
                </div>
                <div className="flex-row-3">
                  <Name3 />
                  <img className="button" src={button3} alt="button" />
                </div>
              </div>
            </div>
          </div>
          <div className="recent-order">
            <Title spanText1={title3Props.spanText1} className={title3Props.className} />
            <div className="items-2">
              <div className="items-item-1" style={{ backgroundImage: `url(${x01})` }}>
                <div className="flex-col-1">
                  <img className="image-1" src={image4} alt="image" />
                  <div className="name">
                    <div className="fish-burger poppins-medium-thunder-18px">
                      <span className="poppins-medium-thunder-18px">{spanText12}</span>
                    </div>
                    <div className="price poppins-bold-mandy-24px">
                      <span className="poppins-bold-selective-yellow-24px">{spanText13}</span>
                      <span className="poppins-bold-thunder-24px">{spanText14}</span>
                    </div>
                  </div>
                  <div className="rate poppins-normal-amethyst-smoke-18px">
                    <div className="x497-km">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText15}</span>
                    </div>
                    <div className="ellipse-29"></div>
                    <div className="address">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText16}</span>
                    </div>
                  </div>
                </div>
                <img className="love-1" src={love4} alt="Love" />
              </div>
              <div className="items-item-1" style={{ backgroundImage: `url(${x022})` }}>
                <div className="flex-col-1">
                  <img className="image-1" src={image5} alt="image" />
                  <div className="name-1">
                    <div className="japan-ramen poppins-medium-thunder-18px">
                      <span className="poppins-medium-thunder-18px">{spanText17}</span>
                    </div>
                    <div className="price poppins-bold-mandy-24px">
                      <span className="poppins-bold-selective-yellow-24px">{spanText18}</span>
                      <span className="poppins-bold-thunder-24px">{spanText19}</span>
                    </div>
                  </div>
                  <div className="rate poppins-normal-amethyst-smoke-18px">
                    <div className="x497-km">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText20}</span>
                    </div>
                    <div className="ellipse-29"></div>
                    <div className="address">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText21}</span>
                    </div>
                  </div>
                </div>
                <img className="love-1" src={love5} alt="Love" />
              </div>
              <div className="items-item-1" style={{ backgroundImage: `url(${x032})` }}>
                <div className="flex-col-1">
                  <img className="image-1" src={image6} alt="image" />
                  <div className="name-2">
                    <div className="fried-rice poppins-medium-thunder-18px">
                      <span className="poppins-medium-thunder-18px">{spanText22}</span>
                    </div>
                    <div className="price poppins-bold-mandy-24px">
                      <span className="poppins-bold-selective-yellow-24px">{spanText23}</span>
                      <span className="poppins-bold-thunder-24px">{spanText24}</span>
                    </div>
                  </div>
                  <div className="rate poppins-normal-amethyst-smoke-18px">
                    <div className="x497-km">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText25}</span>
                    </div>
                    <div className="ellipse-29"></div>
                    <div className="address">
                      <span className="poppins-normal-amethyst-smoke-18px">{spanText26}</span>
                    </div>
                  </div>
                </div>
                <img className="love-1" src={love6} alt="Love" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-menu">
          <Menu />
          <div className="balance">
            <div className="your-balance poppins-bold-thunder-24px">
              <span className="poppins-bold-thunder-24px">{spanText27}</span>
            </div>
            <div className="overlap-group-4" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <div className="balance-1">
                <div className="balance-2 poppins-normal-thunder-14px">
                  <span className="poppins-normal-thunder-14px">{spanText28}</span>
                </div>
                <div className="price-1 poppins-bold-thunder-32px">
                  <span className="poppins-bold-thunder-32px">{spanText29}</span>
                </div>
              </div>
              <div className="flex-col-3">
                <div className="icon">
                  <img className="income" src={income} alt="Income" />
                </div>
                <div className="top-up poppins-normal-white-14px">
                  <span className="poppins-normal-white-14px">{spanText30}</span>
                </div>
              </div>
              <div className="flex-col-4">
                <div className="icon-1">
                  <img className="profit" src={profit} alt="Profit" />
                </div>
                <div className="place poppins-normal-white-14px">
                  <span className="poppins-normal-white-14px">{spanText31}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="address-1">
            <div className="flex-row-4">
              <div className="flex-col-5">
                <div className="your-address poppins-normal-amethyst-smoke-18px">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText32}</span>
                </div>
                <Content />
              </div>
              <div className="overlap-group-5">
                <div className="place-1 poppins-normal-selective-yellow-14px">
                  <span className="poppins-normal-selective-yellow-14px">{spanText33}</span>
                </div>
                <div className="rectangle"></div>
              </div>
            </div>
            <p className="lorem-ipsum-dolor-si-1 poppins-normal-amethyst-smoke-14px">
              <span className="poppins-normal-amethyst-smoke-14px">{spanText34}</span>
            </p>
            <div className="overlap-group-container">
              <div className="overlap-group1-2">
                <div className="add-details poppins-normal-thunder-14px">
                  <span className="poppins-normal-thunder-14px">{spanText35}</span>
                </div>
                <div className="rectangle-1"></div>
              </div>
              <div className="overlap-group2">
                <div className="add-note poppins-normal-thunder-14px">
                  <span className="poppins-normal-thunder-14px">{spanText36}</span>
                </div>
                <div className="rectangle-2"></div>
              </div>
            </div>
          </div>
          <div className="order-menu">
            <Menu2 />
            <img className="line" src={line} alt="line" />
            <div className="service">
              <div className="service-1 poppins-medium-amethyst-smoke-14px">
                <span className="poppins-medium-amethyst-smoke-14px">{spanText37}</span>
              </div>
              <div className="text-4 poppins-medium-thunder-18px">
                <span className="poppins-medium-thunder-18px">{spanText38}</span>
                <span className="poppins-medium-selective-yellow-18px">{spanText39}</span>
                <span className="poppins-medium-thunder-18px">{spanText40}</span>
              </div>
            </div>
            <Total />
            <div className="coupon">
              <div className="icon-2">
                <img className="coupon-1" src={coupon} alt="Coupon" />
              </div>
              <div className="have-a-coupon-code poppins-medium-thunder-14px">
                <span className="poppins-medium-thunder-14px">{spanText41}</span>
              </div>
              <img className="chevron-down" src={chevronDown} alt="chevron-down" />
            </div>
            <div className="checkout-button">
              <div className="checkout poppins-medium-white-18px">
                <span className="poppins-medium-white-18px">{spanText42}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
