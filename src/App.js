import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import TopNavigation from "./components/MainHeader/TopNavigation";

function App() {
  return (
    <div className="App">
      <TopNavigation />
      <MainContent />
    </div>
  );
}

export default App;
