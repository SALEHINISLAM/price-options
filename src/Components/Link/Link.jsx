import React from "react";
import PropTypes from "prop-types";

const Link = ({route}) => {
  return (
    <li className="mr-4 hover:border-b-red-300 hover:border">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
    route: PropTypes.object,
};

export default Link;
