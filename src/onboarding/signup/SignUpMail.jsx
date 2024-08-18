"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { AppWrapper } from "@/context/ContextApi";
import { Button } from "@/components/ui/button";

const SignUpMail = ({ step, setStep }) => {
  const [error, setError] = useState("");
  const { info, setInfo } = AppWrapper();
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [name]: value + "@xmail.com",
    });
  };
  console.log(info);

  return (
    <div className="inside-container">
      <div className="label">Choose your email</div>
      <div className="input">
        <Input
          placeholder="choose your email"
          name="email"
          onChange={handlechange}
        />
        @xmail.com
      </div>
      <Button
        onClick={() => {
          setStep((val) => val + 1);
          console.log(step);
        }}
        className="btn"
      >
        Continue
      </Button>
    </div>
  );
};

export default SignUpMail;
