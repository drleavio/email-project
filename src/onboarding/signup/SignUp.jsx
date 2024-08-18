"use client";
import React, { useState } from "react";
import { obSteps } from "@/constants";
import SignUpName from "./SignUpName";
import SignUpGen from "./SignUpGen";
import SignUpMail from "./SignUpMail";
import SignUpPassword from "./SignUpPassword";

const SignUp = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="signup-container">
      {obSteps[step] == "name" ? (
        <SignUpName step={step} setStep={setStep} />
      ) : obSteps[step] == "gender" ? (
        <SignUpGen step={step} setStep={setStep} />
      ) : obSteps[step] == "mail" ? (
        <SignUpMail step={step} setStep={setStep} />
      ) : obSteps[step] == "password" ? (
        <SignUpPassword step={step} setStep={setStep} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SignUp;
