import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setResult } from "../../../store/resultSlice";
import ShowRulesModalButton from "../Buttons/ShowRulesModalButton";
import ChipsBalanceComponent from "../ChipsBalanceComponent";
import ErrorModal from "../Modals/ErrorModal";
import ResultModal from "../Modals/ResultModal";
import RulesModal from "../Modals/RulesModal";
import GameContainer from "./GameContainer";

export default function AppContainer() {
  const [showResultModal, setShowResultModal] = useState(false);
  const showRulesModal = useAppSelector((state) => state.modal.rulesModal);
  const dispatch = useAppDispatch();

  const { counterUpper, counterLower } = useAppSelector(
    (state) => state.counter
  );

  const showErrorModal = useAppSelector((state) => state.modal.errorModal);

  const checkIfOver21 = () => {
    if (counterUpper > 21) {
      dispatch(setResult("WIN"));
      setShowResultModal(true);
    } else if (counterLower > 21) {
      dispatch(setResult("LOSE"));
      setShowResultModal(true);
    }
  };
  useEffect(() => {
    checkIfOver21();
  }, [counterLower, counterUpper]);
  return (
    <div className="app-container">
      <ChipsBalanceComponent />
      <GameContainer setShowResultModal={setShowResultModal} />
      <ShowRulesModalButton />
      {showRulesModal && <RulesModal />}
      <ResultModal
        showResultModal={showResultModal}
        setShowResultModal={setShowResultModal}
      />
      {showErrorModal && <ErrorModal />}
    </div>
  );
}
