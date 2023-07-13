import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { Header } from "./components/Header";
import { DetailPage } from "./Pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:meetId" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
