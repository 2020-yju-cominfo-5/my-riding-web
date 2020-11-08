import React from "react";
import { Link } from "react-router-dom";
import "./Title.css";

function Title() {
  return (
    <div className="title">
      <Link to="/">マイライディング</Link>
    </div>
  );
}

export default Title;
