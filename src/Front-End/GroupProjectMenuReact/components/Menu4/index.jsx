import React from "react";
import SideMenu2 from "../SideMenu2";
import Title2 from "../Title2";
import X017 from "../X017";
import Rate3 from "../Rate3";
import Rate5 from "../Rate5";
import X018 from "../X018";
import Rate2 from "../Rate2";
import "./Menu4.sass";

function Menu4(props) {
  const {
    spanText1,
    magnifier,
    spanText2,
    orderDiscussion,
    overlapGroup,
    setting,
    spanText3,
    burger,
    spanText4,
    spanText5,
    spanText6,
    chevronDown,
    overlapGroup2,
    image1,
    spanText7,
    spanText8,
    spanText9,
    dots1,
    spanText10,
    spanText11,
    overlapGroup11,
    image2,
    spanText12,
    spanText13,
    spanText14,
    dots2,
    spanText15,
    spanText16,
    overlapGroup22,
    image3,
    spanText17,
    spanText18,
    spanText19,
    dots3,
    spanText20,
    spanText21,
    overlapGroup31,
    image4,
    spanText22,
    spanText23,
    spanText24,
    dots4,
    spanText25,
    spanText26,
    x01,
    overlapGroup4,
    dots5,
    spanText27,
    spanText28,
    spanText29,
    x021,
    overlapGroup12,
    dots6,
    spanText30,
    spanText31,
    spanText32,
    x03,
    overlapGroup23,
    dots7,
    spanText33,
    spanText34,
    spanText35,
    x041,
    overlapGroup32,
    dots8,
    spanText36,
    spanText37,
    spanText38,
    x05,
    overlapGroup42,
    dots9,
    spanText39,
    spanText40,
    spanText41,
    x06,
    overlapGroup5,
    dots10,
    spanText42,
    spanText43,
    spanText44,
    x022,
    spanText45,
    spanText46,
    spanText47,
    spanText48,
    spanText49,
    image5,
    x042,
    spanText50,
    spanText51,
    spanText52,
    spanText53,
    spanText54,
    image6,
    sideMenu2Props,
    title21Props,
    x0171Props,
    x0172Props,
    x0173Props,
    x0174Props,
    x0175Props,
    x0176Props,
    x0177Props,
    title22Props,
    title23Props,
    x0181Props,
    x0182Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu screen">
        <SideMenu2
          dashboard2Props={sideMenu2Props.dashboard2Props}
          foodOrder1Props={sideMenu2Props.foodOrder1Props}
          foodOrder2Props={sideMenu2Props.foodOrder2Props}
          foodOrder3Props={sideMenu2Props.foodOrder3Props}
          foodOrder4Props={sideMenu2Props.foodOrder4Props}
        />
        <div className="flex-col-2">
          <div className="flex-row-1">
            <div className="flex-col-3">
              <div className="menu-1 poppins-bold-thunder-36px">
                <span className="poppins-bold-thunder-36px">{spanText1}</span>
              </div>
              <div className="search-bar">
                <img className="magnifier" src={magnifier} alt="magnifier" />
                <div className="search poppins-normal-amethyst-smoke-18px">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText2}</span>
                </div>
              </div>
            </div>
            <div className="flex-col-4">
              <div className="menu-2">
                <div className="overlap-group1">
                  <div className="ellipse-7"></div>
                  <img className="order-discussion" src={orderDiscussion} alt="Order Discussion" />
                </div>
                <div className="overlap-group-3" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <div className="ellipse-7-1"></div>
                </div>
                <img className="setting" src={setting} alt="Setting" />
                <div className="placeholder"></div>
              </div>
              <div className="save-setting">
                <div className="text-1 poppins-medium-white-18px">
                  <span className="poppins-medium-white-18px">{spanText3}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="category">
            <Title2 spanText1={title21Props.spanText1} />
            <div className="items">
              <X017 baked={x0171Props.baked} spanText={x0171Props.spanText} />
              <div className="x02">
                <img className="burger" src={burger} alt="Burger" />
                <div className="burger-1 poppins-normal-amethyst-smoke-18px">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText4}</span>
                </div>
              </div>
              <X017 baked={x0172Props.baked} spanText={x0172Props.spanText} />
              <X017 baked={x0173Props.baked} spanText={x0173Props.spanText} />
              <X017 baked={x0174Props.baked} spanText={x0174Props.spanText} />
              <X017 baked={x0175Props.baked} spanText={x0175Props.spanText} />
              <X017 baked={x0176Props.baked} spanText={x0176Props.spanText} />
              <X017 baked={x0177Props.baked} spanText={x0177Props.spanText} />
            </div>
          </div>
          <div className="popular">
            <div className="title">
              <div className="popular-this-week poppins-bold-thunder-24px">
                <span className="poppins-bold-thunder-24px">{spanText5}</span>
              </div>
              <div className="view-all poppins-normal-selective-yellow-18px">
                <span className="poppins-normal-selective-yellow-18px">{spanText6}</span>
              </div>
              <img className="chevron-down" src={chevronDown} alt="chevron-down" />
            </div>
            <div className="overlap-group-container">
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <div className="flex-row">
                  <img className="image" src={image1} alt="image" />
                  <div className="flex-col">
                    <div className="flex-row-2">
                      <div className="flex-col-5">
                        <div className="fish-burger poppins-medium-thunder-18px">
                          <span className="poppins-medium-thunder-18px">{spanText7}</span>
                        </div>
                        <div className="price-3 poppins-bold-mandy-18px">
                          <span className="poppins-bold-selective-yellow-18px">{spanText8}</span>
                          <span className="poppins-bold-thunder-18px">{spanText9}</span>
                        </div>
                      </div>
                      <img className="dots" src={dots1} alt="Dots" />
                    </div>
                    <div className="rate">
                      <Rate3 />
                      <div className="ellipse-33"></div>
                      <div className="wishlist">
                        <div className="x1k-user-reviews poppins-normal-amethyst-smoke-14px">
                          <span className="poppins-normal-amethyst-smoke-14px">{spanText10}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText11}</span>
                </p>
              </div>
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup11})` }}>
                <div className="flex-row">
                  <img className="image" src={image2} alt="image" />
                  <div className="flex-col">
                    <div className="flex-row-3">
                      <div className="flex-col-6">
                        <div className="double-burger poppins-medium-thunder-18px">
                          <span className="poppins-medium-thunder-18px">{spanText12}</span>
                        </div>
                        <div className="price-4 poppins-bold-mandy-18px">
                          <span className="poppins-bold-selective-yellow-18px">{spanText13}</span>
                          <span className="poppins-bold-thunder-18px">{spanText14}</span>
                        </div>
                      </div>
                      <img className="dots" src={dots2} alt="Dots" />
                    </div>
                    <div className="rate">
                      <Rate3 />
                      <div className="ellipse-33"></div>
                      <div className="wishlist">
                        <div className="x1k-user-reviews poppins-normal-amethyst-smoke-14px">
                          <span className="poppins-normal-amethyst-smoke-14px">{spanText15}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText16}</span>
                </p>
              </div>
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup22})` }}>
                <div className="flex-row">
                  <img className="image" src={image3} alt="image" />
                  <div className="flex-col">
                    <div className="flex-row-4">
                      <div className="flex-col-7">
                        <div className="beef-burger poppins-medium-thunder-18px">
                          <span className="poppins-medium-thunder-18px">{spanText17}</span>
                        </div>
                        <div className="price-5 poppins-bold-mandy-18px">
                          <span className="poppins-bold-selective-yellow-18px">{spanText18}</span>
                          <span className="poppins-bold-thunder-18px">{spanText19}</span>
                        </div>
                      </div>
                      <img className="dots" src={dots3} alt="Dots" />
                    </div>
                    <div className="rate">
                      <Rate3 />
                      <div className="ellipse-33"></div>
                      <div className="wishlist">
                        <div className="x1k-user-reviews poppins-normal-amethyst-smoke-14px">
                          <span className="poppins-normal-amethyst-smoke-14px">{spanText20}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText21}</span>
                </p>
              </div>
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup31})` }}>
                <div className="flex-row">
                  <img className="image" src={image4} alt="image" />
                  <div className="flex-col">
                    <div className="flex-row-5">
                      <div className="flex-col-8">
                        <div className="cheese-burger poppins-medium-thunder-18px">
                          <span className="poppins-medium-thunder-18px">{spanText22}</span>
                        </div>
                        <div className="price-6 poppins-bold-mandy-18px">
                          <span className="poppins-bold-selective-yellow-18px">{spanText23}</span>
                          <span className="poppins-bold-thunder-18px">{spanText24}</span>
                        </div>
                      </div>
                      <img className="dots" src={dots4} alt="Dots" />
                    </div>
                    <div className="rate">
                      <Rate3 />
                      <div className="ellipse-33"></div>
                      <div className="wishlist">
                        <div className="x1k-user-reviews poppins-normal-amethyst-smoke-14px">
                          <span className="poppins-normal-amethyst-smoke-14px">{spanText25}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
                  <span className="poppins-normal-amethyst-smoke-14px">{spanText26}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="best-seller">
            <Title2 spanText1={title22Props.spanText1} className={title22Props.className} />
            <div className="flex-row-6">
              <div className="flex-row-item" style={{ backgroundImage: `url(${x01})` }}>
                <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                  <img className="dots-1" src={dots5} alt="Dots" />
                </div>
                <div className="name">
                  <div className="pepperoni-pizza poppins-medium-thunder-18px">
                    <span className="poppins-medium-thunder-18px">{spanText27}</span>
                  </div>
                  <div className="price poppins-bold-mandy-24px">
                    <span className="poppins-bold-selective-yellow-24px">{spanText28}</span>
                    <span className="poppins-bold-thunder-24px">{spanText29}</span>
                  </div>
                </div>
                <Rate5 />
              </div>
              <div className="flex-row-item" style={{ backgroundImage: `url(${x021})` }}>
                <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup12})` }}>
                  <img className="dots-1" src={dots6} alt="Dots" />
                </div>
                <div className="name-1">
                  <div className="japanese-ramen poppins-medium-thunder-18px">
                    <span className="poppins-medium-thunder-18px">{spanText30}</span>
                  </div>
                  <div className="price poppins-bold-mandy-24px">
                    <span className="poppins-bold-selective-yellow-24px">{spanText31}</span>
                    <span className="poppins-bold-thunder-24px">{spanText32}</span>
                  </div>
                </div>
                <Rate5 />
              </div>
              <div className="flex-row-item" style={{ backgroundImage: `url(${x03})` }}>
                <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup23})` }}>
                  <img className="dots-1" src={dots7} alt="Dots" />
                </div>
                <div className="name-2">
                  <div className="fried-rice poppins-medium-thunder-18px">
                    <span className="poppins-medium-thunder-18px">{spanText33}</span>
                  </div>
                  <div className="price poppins-bold-mandy-24px">
                    <span className="poppins-bold-selective-yellow-24px">{spanText34}</span>
                    <span className="poppins-bold-thunder-24px">{spanText35}</span>
                  </div>
                </div>
                <Rate5 />
              </div>
              <div className="flex-row-item" style={{ backgroundImage: `url(${x041})` }}>
                <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup32})` }}>
                  <img className="dots-1" src={dots8} alt="Dots" />
                </div>
                <div className="name-3">
                  <div className="vegan-pizza poppins-medium-thunder-18px">
                    <span className="poppins-medium-thunder-18px">{spanText36}</span>
                  </div>
                  <div className="price poppins-bold-mandy-24px">
                    <span className="poppins-bold-selective-yellow-24px">{spanText37}</span>
                    <span className="poppins-bold-thunder-24px">{spanText38}</span>
                  </div>
                </div>
                <Rate5 />
              </div>
              <div className="flex-row-item" style={{ backgroundImage: `url(${x05})` }}>
                <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup42})` }}>
                  <img className="dots-1" src={dots9} alt="Dots" />
                </div>
                <div className="name-4">
                  <div className="beef-burger-1 poppins-medium-thunder-18px">
                    <span className="poppins-medium-thunder-18px">{spanText39}</span>
                  </div>
                  <div className="price poppins-bold-mandy-24px">
                    <span className="poppins-bold-selective-yellow-24px">{spanText40}</span>
                    <span className="poppins-bold-thunder-24px">{spanText41}</span>
                  </div>
                </div>
                <Rate5 />
              </div>
              <div className="flex-row-item" style={{ backgroundImage: `url(${x06})` }}>
                <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup5})` }}>
                  <img className="dots-1" src={dots10} alt="Dots" />
                </div>
                <div className="name-5">
                  <div className="fish-burger-1 poppins-medium-thunder-18px">
                    <span className="poppins-medium-thunder-18px">{spanText42}</span>
                  </div>
                  <div className="price poppins-bold-mandy-24px">
                    <span className="poppins-bold-selective-yellow-24px">{spanText43}</span>
                    <span className="poppins-bold-thunder-24px">{spanText44}</span>
                  </div>
                </div>
                <Rate5 />
              </div>
            </div>
          </div>
          <div className="promo">
            <Title2 spanText1={title23Props.spanText1} className={title23Props.className} />
            <div className="flex-row-7">
              <X018 spanText2={x0181Props.spanText2} />
              <div className="flex-row-item-1" style={{ backgroundImage: `url(${x022})` }}>
                <div className="flex-col-1">
                  <div className="overlap-group-2">
                    <div className="x15-off poppins-normal-white-18px">
                      <span className="poppins-normal-white-18px">{spanText45}</span>
                    </div>
                  </div>
                  <div className="text">
                    <div className="name-6">
                      <div className="e-burger poppins-medium-thunder-18px">
                        <span className="poppins-medium-thunder-18px">{spanText46}</span>
                      </div>
                      <div className="price-container">
                        <div className="price-1 poppins-bold-mandy-24px">
                          <span className="poppins-bold-selective-yellow-24px">{spanText47}</span>
                          <span className="poppins-bold-thunder-24px">{spanText48}</span>
                        </div>
                        <div className="price-2 poppins-medium-amethyst-smoke-18px">
                          <span className="poppins-medium-amethyst-smoke-18px">{spanText49}</span>
                        </div>
                      </div>
                    </div>
                    <Rate2 />
                  </div>
                </div>
                <img className="image-1" src={image5} alt="image" />
              </div>
              <X018 spanText2={x0182Props.spanText2} className={x0182Props.className} />
              <div className="flex-row-item-1" style={{ backgroundImage: `url(${x042})` }}>
                <div className="flex-col-1">
                  <div className="overlap-group-2">
                    <div className="x15-off poppins-normal-white-18px">
                      <span className="poppins-normal-white-18px">{spanText50}</span>
                    </div>
                  </div>
                  <div className="text">
                    <div className="name-7">
                      <div className="e-burger poppins-medium-thunder-18px">
                        <span className="poppins-medium-thunder-18px">{spanText51}</span>
                      </div>
                      <div className="price-container">
                        <div className="price-1 poppins-bold-mandy-24px">
                          <span className="poppins-bold-selective-yellow-24px">{spanText52}</span>
                          <span className="poppins-bold-thunder-24px">{spanText53}</span>
                        </div>
                        <div className="price-2 poppins-medium-amethyst-smoke-18px">
                          <span className="poppins-medium-amethyst-smoke-18px">{spanText54}</span>
                        </div>
                      </div>
                    </div>
                    <Rate2 />
                  </div>
                </div>
                <img className="image-1" src={image6} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu4;
