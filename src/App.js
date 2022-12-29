import "./App.css";
import Buy from "./components/buy/Buy";
import IntroBody from "./components/IntroBody";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <IntroBody />
      <Buy />
    </div>
  );
}

export default App;
