import React from "react";
import { Link } from "react-router-dom";

function Title() {
  return (
    <>
      <Link
        to="/"
        className="nav-title"
        style={{ float: "none", display: "inline-block" }}
      >
        マイライディング
      </Link>
    </>
  );
}

export default Title;
