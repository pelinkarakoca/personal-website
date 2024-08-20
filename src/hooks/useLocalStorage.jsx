import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [localValue, setLocalValue] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue === null) {
      const defaultValueStringified = JSON.stringify(defaultValue);
      localStorage.setItem(key, defaultValueStringified);
      return defaultValue;
    }
    return storedValue;
  });

  const setLocalStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocalValue(value);
  };

  return [localValue, setLocalStorage];
}
