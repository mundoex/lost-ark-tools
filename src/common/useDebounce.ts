import { useEffect, useState } from "react";

/**
 * useDebounce
 * 
 * @param value - The value to debounce
 * @param delay - The debounce delay in milliseconds
 * @returns The debounced value
 */
export function useDebounce<T>(value: T, delay: number): T {
    // State to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
    useEffect(() => {
      // Set up a timer that updates the debounced value after the delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      // Cleanup the timer if the value changes or the component unmounts
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]); // Only re-run if value or delay changes
  
    return debouncedValue;
}