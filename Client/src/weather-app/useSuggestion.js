import React, { useState, useEffect } from "react";

export const useSuggestion = () => {
  const city = [
    "cuttack",
    "bangalore",
    "mumbai",
    "patna",
    "kolkata",
    "chennai",
    "hyderabad",
    "delhi",
  ];

  return {
    city,
  };
};
