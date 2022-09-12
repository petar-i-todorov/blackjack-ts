import React from "react";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { showRulesModal } from "../../../../redux/modals/slice";
import "./ShowRulesModalButton.scss";

const ShowRulesModalButton = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="rules-button"
      onClick={() => {
        dispatch(showRulesModal(true));
      }}
    >
      ?
    </div>
  );
};

export default ShowRulesModalButton;
