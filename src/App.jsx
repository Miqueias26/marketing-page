import "./App.css";
import Header from "./components/header/header";
import Central from "./components/central/central";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="headerOf">
        <Header />
      </div>
      <div className="centralOf">
        <Central />
      </div>
      <div className="footerOf">
        <Footer />
      </div>
    </>
  );
}

export default App;
