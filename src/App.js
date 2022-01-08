import "./App.css";
import { Routes, Route } from "react-router-dom";
import BasicDocument from "./components/BasicDocument";
import FormClinica from "./components/FormClinica";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormClinica />} />
        <Route path="document" element={<BasicDocument />} />
      </Routes>
    </div>
  );
}

export default App;
