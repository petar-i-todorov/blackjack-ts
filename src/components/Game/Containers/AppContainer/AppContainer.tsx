import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { showResultModal } from "../../../../redux/modals/slice";
import { setResult } from "../../../../redux/result/slice";
import ShowRulesModalButton from "../../Buttons/RulesButton/ShowRulesModalButton";
import ChipsBalanceComponent from "../../ChipsBalance/ChipsBalanceComponent";
import ErrorModal from "../../Modals/ErrorModal/ErrorModal";
import RulesModal from "../../Modals/RulesModal/RulesModal";
import GameContainer from "../GameContainer/GameContainer";
import "./AppContainer.scss";

export default function AppContainer() {
  const showRulesModal = useAppSelector((state) => state.modal.rulesModal);
  const dispatch = useAppDispatch();

  const { counterUpper, counterLower } = useAppSelector(
    (state) => state.counter
  );

  const showErrorModal = useAppSelector((state) => state.modal.errorModal);

  const checkIfOver21 = () => {
    if (counterUpper > 21) {
      dispatch(setResult("WIN"));
      dispatch(showResultModal(true));
    } else if (counterLower > 21) {
      dispatch(setResult("LOSE"));
      dispatch(showResultModal(true));
    }
  };
  useEffect(() => {
    checkIfOver21();
  }, [counterLower, counterUpper]);
  return (
    <div className="app-container">
      <ChipsBalanceComponent />
      <GameContainer />
      <ShowRulesModalButton />
      {showRulesModal && <RulesModal />}
      {showErrorModal && <ErrorModal />}
    </div>
  );
}
