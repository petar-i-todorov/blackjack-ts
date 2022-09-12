import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { showErrorModal } from "../../../../redux/modals/slice";
import "./ErrorModal.scss";

const ErrorModal = () => {
  const dispatch = useAppDispatch();

  const textError = useAppSelector((state) => state.textError);

  return (
    <div
      className="modal modal-result"
      onClick={() => dispatch(showErrorModal(false))}
    >
      <div className="modal__blank"></div>
      <div
        className="modal__window modal-result__window"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="modal__window__text">
          <h1>{textError}</h1>
        </div>
        <button
          className="button modal__window__button"
          onClick={() => {
            dispatch(showErrorModal(false));
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
