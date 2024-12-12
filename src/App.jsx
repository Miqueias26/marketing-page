import "./App.css";
import Header from "./components/header/header";
import Central from "./components/central/central";

function App() {
  return (
    <>
      <div className="headerOf">
        <Header />
      </div>
      <div className="CentralOf">
        <Central />
      </div>
    </>
  );
}

export default App;
