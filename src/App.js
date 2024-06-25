import "./App.css";
import Day from "./componet/Day";
import DayList from "./componet/DayList";
import EmptyPage from "./componet/EmptyPage";
import Header from "./componet/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
