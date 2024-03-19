/* eslint-disable */
import React, { useState, useEffect } from "react";

export const useResize = () => {
  const [resize, setResize] = useState(window.innerWidth);
  const [deviceType, setDeviceType] = useState("");

  const handleDeviceType = (val) => {
    if (val < "250") {
      return "Mobile";
    } else if (val < "500") {
      return "TAB";
    } else {
      return "PC";
    }
  };

  const handleResize = () => {
    const newSize = window.innerWidth;
    const newDeviceType = handleDeviceType(newSize);
    setDeviceType(newDeviceType);
    setResize(newSize);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });
  return [resize, deviceType];
};
