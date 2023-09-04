import React, { useContext } from "react";
import { HelloContext } from "../Contexts/textContext";

const Child: React.FC = () => {
  const context = useContext(HelloContext);
  if (!context) return null;

  const { str } = context;

  return (
    <div>
      <h4>Child</h4>
      <div>Print data: {str.string}</div>
    </div>
  );
};
export default Child;
