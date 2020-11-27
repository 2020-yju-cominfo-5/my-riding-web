import { useCallback, useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    validator(value);
    // if (typeof validator === "function") {
    //   willUpdate = validator(value);
    // }
    if (willUpdate) {
      setValue(value);
    }
  };
  const reset = useCallback(() => setValue(initialValue), [initialValue]);
  return { value, onChange, reset };
};

export default useInput;
