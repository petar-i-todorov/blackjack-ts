import "./scss/App.scss";
import AppContainer from "./components/Game/Containers/AppContainer/AppContainer";
import ResultModal from "./components/Game/Modals/ResultModal/ResultModal";
import { useState } from "react";
import { useAppSelector } from "./hooks/reduxHooks";
import RulesModal from "./components/Game/Modals/RulesModal/RulesModal";
import ErrorModal from "./components/Game/Modals/ErrorModal/ErrorModal";

function App() {
  const showErrorModal = useAppSelector((state) => state.modal.errorModal);
  const showRulesModal = useAppSelector((state) => state.modal.rulesModal);
  return (
    <div className="App">
      <AppContainer />
      <ResultModal />
      {showRulesModal && <RulesModal />}
      {showErrorModal && <ErrorModal />}
    </div>
  );
}

export default App;
