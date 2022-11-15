import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import ConnectWalletModal from "./components/ConnectWalletModal/ConnectWalletModal";

function App() {
  return (
    <div className="App">
      <Layout>
        <TopNavigation />
        <MainContent />
        <Footer />
      </Layout>
      <ConnectWalletModal />
    </div>
  );
}

export default App;
