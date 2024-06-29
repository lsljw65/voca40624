import "./App.css";
import CreateDay from "./componet/CreateDay";
import CreateWord from "./componet/CreateWord";
import Day from "./componet/Day";
import DayList from "./componet/DayList";
import EmptyPage from "./componet/EmptyPage";
import Header from "./componet/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/voca">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="/*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
