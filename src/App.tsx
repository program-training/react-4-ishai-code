import "./App.css";
import { Example } from "./components/Example/Example";
import HelloContextProvider from './components/Contexts/textContext'
import GrandPapa from './components/grand/GrandPapa'

function App() {
  return (
    <>
      <Example />{" "}
      <HelloContextProvider>
        <GrandPapa/>
      </HelloContextProvider>
    </>
  );
}

export default App;
