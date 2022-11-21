import React from "react";
import Dashboard3 from "../Dashboard3";
import FoodOrder from "../FoodOrder";
import FoodOrder3 from "../FoodOrder3";
import "./SideMenu.sass";

function SideMenu(props) {
  const {
    spanText1,
    spanText2,
    maskGroup,
    spanText3,
    vector,
    spanText4,
    dashboard3Props,
    foodOrder1Props,
    foodOrder2Props,
    foodOrder3Props,
    foodOrder3Props2,
    foodOrder4Props,
    foodOrder5Props,
  } = props;

  return (
    <div className="side-menu">
      <div className="overlap-group2">
        <h1 className="title-1 poppins-bold-thunder-40px">
          <span className="poppins-bold-thunder-40px">{spanText1}</span>
          <span className="poppins-bold-selective-yellow-40px">{spanText2}</span>
        </h1>
        <div className="list">
          <Dashboard3 restaurantLocation={dashboard3Props.restaurantLocation} spanText={dashboard3Props.spanText} />
          <FoodOrder deliveryScooter={foodOrder1Props.deliveryScooter} spanText={foodOrder1Props.spanText} />
          <FoodOrder
            deliveryScooter={foodOrder2Props.deliveryScooter}
            spanText={foodOrder2Props.spanText}
            className={foodOrder2Props.className}
          />
          <FoodOrder3 deliveryScooter={foodOrder3Props.deliveryScooter} spanText={foodOrder3Props.spanText} />
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
        <div className="overlap-group-3">
          <div className="shadow"></div>
          <div className="background"></div>
          <img className="mask-group" src={maskGroup} alt="Mask Group" />
          <div className="add-button">
            <div className="upgrade poppins-semi-bold-thunder-14px">
              <span className="poppins-semi-bold-thunder-14px">{spanText3}</span>
            </div>
          </div>
          <img className="vector" src={vector} alt="Vector" />
          <p className="upgrade-your-account poppins-bold-white-18px">
            <span className="poppins-bold-white-18px">{spanText4}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
