import React from "react";
import Dashboard2 from "../Dashboard2";
import FoodOrder from "../FoodOrder";
import "./SideMenu2.sass";

function SideMenu2(props) {
  const { dashboard2Props, foodOrder1Props, foodOrder2Props, foodOrder3Props, foodOrder4Props } = props;

  return (
    <div className="side-menu">
      <div className="overlap-group1-2">
        <h1 className="title-4 poppins-bold-thunder-40px">
          <span className="poppins-bold-thunder-40px">GoMeal</span>
          <span className="poppins-bold-selective-yellow-40px">.</span>
        </h1>
        <div className="list-1">
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
        </div>
        <div className="overlap-group-4">
          <div className="shadow"></div>
          <div className="background-1"></div>
          <img className="mask-group-1" src="/img/mask-group-32@2x.png" alt="Mask Group" />
          <div className="add-button">
            <div className="upgrade poppins-semi-bold-thunder-14px">
              <span className="poppins-semi-bold-thunder-14px">Upgrade</span>
            </div>
          </div>
          <img className="vector" src="/img/vector-14@2x.png" alt="Vector" />
          <p className="upgrade-your-account poppins-bold-white-18px">
            <span className="poppins-bold-white-18px">
              Upgrade your
              <br />
              Account to get more benefits
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideMenu2;
