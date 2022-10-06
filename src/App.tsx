import "./scss/App.scss";
import AppContainer from "./components/Game/Containers/AppContainer/AppContainer";
import ResultModal from "./components/Game/Modals/ResultModal/ResultModal";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <AppContainer />
      <ResultModal />
    </div>
  );
}

export default App;
