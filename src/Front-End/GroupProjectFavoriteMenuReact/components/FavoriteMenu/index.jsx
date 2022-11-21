import React from "react";
import Dashboard3 from "../Dashboard3";
import FoodOrder from "../FoodOrder";
import FoodOrder3 from "../FoodOrder3";
import Grid from "../Grid";
import Rate4 from "../Rate4";
import Name from "../Name";
import Name2 from "../Name2";
import Name3 from "../Name3";
import Pagination from "../Pagination";
import "./FavoriteMenu.sass";

function FavoriteMenu(props) {
  const {
    spanText1,
    spanText2,
    maskGroup,
    spanText3,
    spanText4,
    spanText5,
    magnifier,
    spanText6,
    orderDiscussion,
    overlapGroup,
    setting,
    list,
    overlapGroup2,
    image1,
    love1,
    spanText7,
    line1,
    button1,
    overlapGroup4,
    image2,
    love2,
    spanText8,
    line2,
    spanText9,
    spanText10,
    spanText11,
    button2,
    overlapGroup1,
    image3,
    love3,
    spanText12,
    line3,
    button3,
    overlapGroup5,
    image4,
    love4,
    spanText13,
    line4,
    spanText14,
    spanText15,
    spanText16,
    button4,
    overlapGroup22,
    image5,
    love5,
    spanText17,
    line5,
    button5,
    overlapGroup6,
    image6,
    love6,
    spanText18,
    line6,
    spanText19,
    spanText20,
    spanText21,
    button6,
    overlapGroup3,
    image7,
    love7,
    spanText22,
    line7,
    spanText23,
    spanText24,
    spanText25,
    button7,
    overlapGroup7,
    image8,
    love8,
    spanText26,
    line8,
    spanText27,
    spanText28,
    spanText29,
    button8,
    dashboard3Props,
    foodOrder1Props,
    foodOrder3Props,
    foodOrder2Props,
    foodOrder3Props2,
    foodOrder4Props,
    foodOrder5Props,
    gridProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="favorite-menu screen">
        <div className="side-menu">
          <div className="overlap-group1">
            <h1 className="title poppins-bold-thunder-40px">
              <span className="poppins-bold-thunder-40px">{spanText1}</span>
              <span className="poppins-bold-selective-yellow-40px">{spanText2}</span>
            </h1>
            <div className="list">
              <Dashboard3 restaurantLocation={dashboard3Props.restaurantLocation} spanText={dashboard3Props.spanText} />
              <FoodOrder deliveryScooter={foodOrder1Props.deliveryScooter} spanText={foodOrder1Props.spanText} />
              <FoodOrder3 deliveryScooter={foodOrder3Props.deliveryScooter} spanText={foodOrder3Props.spanText} />
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
              <img className="vector" src="/img/vector-3@2x.png" alt="Vector" />
              <p className="upgrade-your-account poppins-bold-white-18px">
                <span className="poppins-bold-white-18px">{spanText4}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col">
          <div className="flex-row-1">
            <div className="flex-col-1">
              <div className="favorite-menu-1 poppins-bold-thunder-36px">
                <span className="poppins-bold-thunder-36px">{spanText5}</span>
              </div>
              <div className="search-bar">
                <img className="magnifier" src={magnifier} alt="magnifier" />
                <p className="what-do-you-want-eat-today poppins-normal-amethyst-smoke-18px">
                  <span className="poppins-normal-amethyst-smoke-18px">{spanText6}</span>
                </p>
              </div>
            </div>
            <div className="flex-col-2">
              <div className="menu">
                <div className="group-355">
                  <div className="overlap-group1-1">
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
              <div className="button-1">
                <div className="list-1">
                  <img className="list-2" src={list} alt="List" />
                </div>
                <Grid src={gridProps.src} />
              </div>
            </div>
          </div>
          <div className="items poppins-medium-thunder-18px">
            <div className="overlap-group-container">
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <div className="flex-row">
                  <img className="image" src={image1} alt="image" />
                  <img className="love" src={love1} alt="Love" />
                </div>
                <div className="fast-food-resto">
                  <span className="poppins-medium-thunder-18px">{spanText7}</span>
                </div>
                <Rate4 />
                <img className="line" src={line1} alt="line" />
                <div className="details">
                  <Name />
                  <img className="button" src={button1} alt="button" />
                </div>
              </div>
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                <div className="flex-row">
                  <img className="image" src={image2} alt="image" />
                  <img className="love" src={love2} alt="Love" />
                </div>
                <div className="fast-food-resto">
                  <span className="poppins-medium-thunder-18px">{spanText8}</span>
                </div>
                <Rate4 />
                <img className="line" src={line2} alt="line" />
                <div className="details-1">
                  <div className="name">
                    <div className="pepperoni-pizza">
                      <span className="poppins-medium-thunder-18px">{spanText9}</span>
                    </div>
                    <div className="price poppins-bold-mandy-24px">
                      <span className="poppins-bold-selective-yellow-24px">{spanText10}</span>
                      <span className="poppins-bold-thunder-24px">{spanText11}</span>
                    </div>
                  </div>
                  <img className="button" src={button2} alt="button" />
                </div>
              </div>
            </div>
            <div className="overlap-group-container">
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <div className="flex-row">
                  <img className="image" src={image3} alt="image" />
                  <img className="love" src={love3} alt="Love" />
                </div>
                <div className="fast-food-resto">
                  <span className="poppins-medium-thunder-18px">{spanText12}</span>
                </div>
                <Rate4 />
                <img className="line" src={line3} alt="line" />
                <div className="details-2">
                  <Name2 />
                  <img className="button" src={button3} alt="button" />
                </div>
              </div>
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup5})` }}>
                <div className="flex-row">
                  <img className="image" src={image4} alt="image" />
                  <img className="love" src={love4} alt="Love" />
                </div>
                <div className="fast-food-resto">
                  <span className="poppins-medium-thunder-18px">{spanText13}</span>
                </div>
                <Rate4 />
                <img className="line" src={line4} alt="line" />
                <div className="details-3">
                  <div className="name-1">
                    <div className="japanese-ramen">
                      <span className="poppins-medium-thunder-18px">{spanText14}</span>
                    </div>
                    <div className="price poppins-bold-mandy-24px">
                      <span className="poppins-bold-selective-yellow-24px">{spanText15}</span>
                      <span className="poppins-bold-thunder-24px">{spanText16}</span>
                    </div>
                  </div>
                  <img className="button" src={button4} alt="button" />
                </div>
              </div>
            </div>
            <div className="overlap-group-container">
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup22})` }}>
                <div className="flex-row">
                  <img className="image" src={image5} alt="image" />
                  <img className="love" src={love5} alt="Love" />
                </div>
                <div className="fast-food-resto">
                  <span className="poppins-medium-thunder-18px">{spanText17}</span>
                </div>
                <Rate4 />
                <img className="line" src={line5} alt="line" />
                <div className="details-4">
                  <Name3 />
                  <img className="button" src={button5} alt="button" />
                </div>
              </div>
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup6})` }}>
                <div className="flex-row">
                  <img className="image" src={image6} alt="image" />
                  <img className="love" src={love6} alt="Love" />
                </div>
                <div className="fast-food-resto">
                  <span className="poppins-medium-thunder-18px">{spanText18}</span>
                </div>
                <Rate4 />
                <img className="line" src={line6} alt="line" />
                <div className="details-5">
                  <div className="name-2">
                    <div className="fried-rice">
                      <span className="poppins-medium-thunder-18px">{spanText19}</span>
                    </div>
                    <div className="price poppins-bold-mandy-24px">
                      <span className="poppins-bold-selective-yellow-24px">{spanText20}</span>
                      <span className="poppins-bold-thunder-24px">{spanText21}</span>
                    </div>
                  </div>
                  <img className="button" src={button6} alt="button" />
                </div>
              </div>
            </div>
            <div className="overlap-group-container">
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                <div className="flex-row">
                  <img className="image" src={image7} alt="image" />
                  <img className="love" src={love7} alt="Love" />
                </div>
                <div className="fast-food-resto">
                  <span className="poppins-medium-thunder-18px">{spanText22}</span>
                </div>
                <Rate4 />
                <img className="line" src={line7} alt="line" />
                <div className="details-6">
                  <div className="name-3">
                    <div className="double-burger">
                      <span className="poppins-medium-thunder-18px">{spanText23}</span>
                    </div>
                    <div className="price poppins-bold-mandy-24px">
                      <span className="poppins-bold-selective-yellow-24px">{spanText24}</span>
                      <span className="poppins-bold-thunder-24px">{spanText25}</span>
                    </div>
                  </div>
                  <img className="button" src={button7} alt="button" />
                </div>
              </div>
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup7})` }}>
                <div className="flex-row">
                  <img className="image" src={image8} alt="image" />
                  <img className="love" src={love8} alt="Love" />
                </div>
                <div className="fast-food-resto">
                  <span className="poppins-medium-thunder-18px">{spanText26}</span>
                </div>
                <Rate4 />
                <img className="line" src={line8} alt="line" />
                <div className="details-7">
                  <div className="name-4">
                    <div className="vegan-pizza">
                      <span className="poppins-medium-thunder-18px">{spanText27}</span>
                    </div>
                    <div className="price poppins-bold-mandy-24px">
                      <span className="poppins-bold-selective-yellow-24px">{spanText28}</span>
                      <span className="poppins-bold-thunder-24px">{spanText29}</span>
                    </div>
                  </div>
                  <img className="button" src={button8} alt="button" />
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

export default FavoriteMenu;
