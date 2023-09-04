import React, { useContext, useState } from "react";
import { HelloContext } from "../Contexts/textContext";
import Child from "../child/Child";


const Father: React.FC = () => {
  const context = useContext(HelloContext);
  const [inputValue, setInputValue] = useState("");
  
  if (!context) return null;
  
  const { setData } = context;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleButtonClick = () => {
    if (setData && inputValue.trim() !== "") { // Add validation to ensure non-empty input
      setData({ string : inputValue });
      setInputValue(""); // Clear input after update
    }
  };
  
  return (
    <div>
      <Child />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter new value"
      />
      <button onClick={handleButtonClick}>Change</button>
    </div>
  );
};

export default Father;

