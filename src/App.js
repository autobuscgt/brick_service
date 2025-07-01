import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import './utils/styles/styles.css'
import Footer from "./components/Footer";

function App() {
  return (
  <BrowserRouter className="main-container"> {/* Добавляем класс */}
    <NavBar/>
    <div className="content">
      <AppRouter/>
    </div>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
