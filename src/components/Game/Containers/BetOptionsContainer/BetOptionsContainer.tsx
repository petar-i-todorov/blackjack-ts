import React from "react";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import {
  choose100,
  choose250,
  choose50,
} from "../../../../redux/bettingOptions/slice";
import BetOption from "../../BetOption/BetOption";
import "./BetOptionsContainer.scss";

const BetOptionsContainer = () => {
  const { hundredStatus, fiftyStatus, twoHundredFiftyStatus } = useAppSelector(
    (state) => state.bettingOptions
  );
  return (
    <div className="bet-options-container">
      <BetOption value={50} toUnlock={choose50} state={fiftyStatus} />
      <BetOption value={100} toUnlock={choose100} state={hundredStatus} />
      <BetOption
        value={250}
        toUnlock={choose250}
        state={twoHundredFiftyStatus}
      />
    </div>
  );
};

export default BetOptionsContainer;
