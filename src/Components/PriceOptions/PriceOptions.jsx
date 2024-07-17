import React from "react";
import PropTypes from "prop-types";

const PriceOptions = (props) => {
  const priceOptions=[
    {
      id: 1,
      name: "Basic Membership",
      price: 39.99,
      features: [
        "Access to all cardio and weight training equipment",
        "Locker room access",
        "Free Wi-Fi",
        "Limited group fitness classes (1 per week)",
        "Basic cardiovascular screening",
        "Access to workout schedule app",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 59.99,
      features: [
        "All features of Basic Membership",
        "Unlimited group fitness classes",
        "Discounted personal training sessions (10% off)",
        "10% off on gym merchandise",
        "Free monthly fitness consultation",
        "Access to on-demand workout videos",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 79.99,
      features: [
        "All features of Standard Membership",
        "Unlimited access to personal training sessions",
        "Free towel service",
        "Access to exclusive members' lounge with smoothie bar",
        "Priority booking for popular classes",
        "Nutritional guidance consultation",
        "Free heart rate monitor",
      ],
    },
  ];

  return (<div></div>);
};

PriceOptions.propTypes = {};

export default PriceOptions;
