import React, { useState } from "react";
import SignupForm from "./items/SignupForm";
import "./Signup.css";
import SignupImg from "./items/SignupImg";

const Signup = () => {
  const [imgFile, setImgFile] = useState(null);

  return (
    <div className="signup">
      <SignupImg setImgFile={setImgFile} />
      <SignupForm imgFile={imgFile} />
    </div>
  );
};

export default Signup;
