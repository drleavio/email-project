"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppWrapper } from "@/context/ContextApi";
import { Button } from "@/components/ui/button";

const SignUpGen = ({ step, setStep }) => {
  const { info, setInfo } = AppWrapper();

  const handlechange = (e) => {
    const val = (info.gender = e);
    setInfo({
      ...info,
      val,
    });
    console.log(info);
  };
  console.log(info);

  return (
    <div className="inside-container">
      <div className="label">Your gender</div>
      <Select onValueChange={handlechange} name="gender">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Gender" name="gender" />
        </SelectTrigger>
        <SelectContent name="gender">
          <SelectGroup>
            <SelectLabel>Gender</SelectLabel>
            <SelectItem value="Female">Female</SelectItem>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Others">Others</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
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

export default SignUpGen;
