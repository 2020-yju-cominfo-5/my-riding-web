import React from "react";
import "./Title.css";

const Title = (props) => {
  const { title } = props;
  return <div className="menu-title">{title}</div>;
};

export default Title;
