import React from "react";
import "./Dashboard3.sass";

function Dashboard3(props) {
  const { restaurantLocation } = props;

  return (
    <div className="dashboard">
      <img className="restaurant-location" src={restaurantLocation} alt="Restaurant Location" />
      <div className="dashboard-1 poppins-medium-amethyst-smoke-18px">
        <span className="poppins-medium-amethyst-smoke-18px">Dashboard</span>
      </div>
    </div>
  );
}

export default Dashboard3;
