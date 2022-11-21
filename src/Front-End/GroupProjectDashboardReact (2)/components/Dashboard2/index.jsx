import React from "react";
import "./Dashboard2.sass";

function Dashboard2(props) {
  const { restaurantLocation } = props;

  return (
    <div className="dashboard">
      <img className="restaurant-location" src={restaurantLocation} alt="Restaurant Location" />
      <div className="dashboard-1 poppins-medium-white-18px">
        <span className="poppins-medium-white-18px">Dashboard</span>
      </div>
    </div>
  );
}

export default Dashboard2;
