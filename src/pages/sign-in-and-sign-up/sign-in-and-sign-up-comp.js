import React from "react";

import SignIn from "../../compontents/sign-in/sign-in-comp";
import SignUp from "../../compontents/sign-up/sign-up-comp";

import "./sign-in-and-sign-up-style.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
