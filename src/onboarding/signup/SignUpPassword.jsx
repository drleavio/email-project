"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { AppWrapper } from "@/context/ContextApi";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUpPassword = ({ step, setStep }) => {
  const [error, setError] = useState("");
  const { info, setInfo } = AppWrapper();
  const [password, setPassword] = useState("");
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({
      ...info,
      [name]: value,
    });
    setPassword(value);
  };
  console.log(info);

  useEffect(() => {
    if (password.length <= 8 && password.length >= 1) {
      setError("password must be of 8 characters");
    } else {
      setError("");
    }
  }, [info.password]);

  const router = useRouter();
  const handlesubmit = async () => {
    try {
      const response = await axios.post("/api/signup", info);
      if (response.data.success) {
        router.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="inside-container">
      <div className="label">Choose your Password</div>
      <div className="input-password">
        <Input
          placeholder="choose your Password"
          name="password"
          onChange={handlechange}
        />
        {error ? <div className="inside-input">{error}</div> : null}
      </div>
      <Button className="btn" onClick={handlesubmit}>
        Signup
      </Button>
    </div>
  );
};

export default SignUpPassword;
