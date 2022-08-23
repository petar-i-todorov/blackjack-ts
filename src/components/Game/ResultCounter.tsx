import React from "react";
import { useAppSelector } from "../../hooks/reduxHooks";

const ResultCounter: React.FC<{ side: "upper" | "lower" }> = ({ side }) => {
  const { counterUpper, counterLower } = useAppSelector(
    (state) => state.counter
  );

  return (
    <div className="sidebar__result-counter">
      <h1 className="counter__text">
        Points: {side === "upper" ? counterUpper : counterLower}
      </h1>
    </div>
  );
};

export default ResultCounter;
