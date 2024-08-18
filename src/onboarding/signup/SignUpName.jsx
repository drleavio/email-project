"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AppWrapper } from "@/context/ContextApi";
import clsx from "clsx";

const SignUpName = ({ step, setStep }) => {
  const { mode, info, setInfo } = AppWrapper();
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  console.log(info);
  console.log(step);

  return (
    <div
      className={clsx("inside-container", {
        dark: mode == "light",
      })}
    >
      <Label
        className={clsx({
          label: mode == "dark",
          "label-dark": mode == "light",
        })}
        htmlFor="name"
      >
        Your name
      </Label>
      <Input
        className="inp-container"
        name="name"
        placeholder="enter your name"
        onChange={handlechange}
      />
      <Button
        onClick={() => {
          setStep((val) => val + 1);
        }}
        className="btn"
      >
        Continue
      </Button>
    </div>
  );
};

export default SignUpName;
