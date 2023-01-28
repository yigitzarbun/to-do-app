import React, { useState, useEffect } from "react";

function getLocalStorage(key, initialValue) {
  const existingValue = Array.from(JSON.parse(localStorage.getItem(key)));
  if (existingValue) return existingValue;
  return initialValue;
}

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getLocalStorage(key, initialValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
};
