import "./App.css";
import MainMenu from "./components/MainMenu";
import Sidebar from "./components/Sidebar";
import CatalogList from "./components/CatalogList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <MainMenu />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <CatalogList />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
