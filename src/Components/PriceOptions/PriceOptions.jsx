import React from "react";
import PropTypes from "prop-types";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = (props) => {
  const priceOptions = [
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

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-5xl font-bold text-center">Best Prices in Town</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

PriceOptions.propTypes = {};

export default PriceOptions;
