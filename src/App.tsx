import "./scss/App.scss";
import AppContainer from "./components/Game/Containers/AppContainer/AppContainer";
import ResultModal from "./components/Game/Modals/ResultModal/ResultModal";
import { useState } from "react";

function App() {
  const [showResultModal, setShowResultModal] = useState(false);
  return (
    <div className="App">
      <AppContainer />
      <ResultModal
        showResultModal={showResultModal}
        setShowResultModal={setShowResultModal}
      />
    </div>
  );
}

export default App;
