import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <TopNavigation />
        <MainContent />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
