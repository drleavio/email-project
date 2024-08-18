"use client";
import React from "react";
import darkmode from "../../../public/images/darkmode.svg";
import lightmode from "../../../public/images/lightmode.svg";
import { AppWrapper } from "@/context/ContextApi";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { mode, togglemode } = AppWrapper();
  return (
    <div
      className={clsx({
        "header-container-dark": mode == "dark",
        "header-container": mode == "light",
      })}
    >
      <div className="brand-name">X-Mail</div>
      <div className="right-container">
        <div className="mode-img" onClick={togglemode}>
          {mode == "light" ? (
            <img className="inside-mode-img" src={lightmode.src} alt="" />
          ) : (
            <img className="inside-mode-img" src={darkmode.src} alt="" />
          )}
        </div>
        <div className="btn">
          <Button className="inside-btn">SignIn</Button>
        </div>
        <div className="btn">
          <Button className="inside-btn">SignUp</Button>
        </div>
        <div className="btn">
          <Button className="inside-btn">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
