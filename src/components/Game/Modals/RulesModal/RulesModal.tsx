import React from "react";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { showRulesModal } from "../../../../redux/modals/slice";
import "./RulesModal.scss";

const RulesModal = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="modal" onClick={() => dispatch(showRulesModal(false))}>
      <div className="modal__blank"></div>

      <div
        className="modal__window rules"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="rules__text">
          <h1 className="rules__heading">Rules</h1>
          <hr />
          <p>
            Your task is to win against the AI by points, up to 21. If you reach
            more than 21 points, you lose. The AI is programmed to draw cards
            until it reaches at least 17 points, then it stops. Your task is to
            make the right decisions and have more points than the AI in the
            end. The value of all cards with numbers (2 to 10) is their normal
            value. The cards with pictures on them (Jack, Queen and King) have
            value of 10 points. The value of the Ace can be 1 or 11 points
            depending on the other drawn cards.
          </p>
        </div>
        <button
          className="button rules__button"
          onClick={() => dispatch(showRulesModal(false))}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default RulesModal;
