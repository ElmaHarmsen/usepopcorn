import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  // get item from localstorage with callback function as initial state value (when it depends on computation)
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      // value state is syncronised with localstorage
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}
