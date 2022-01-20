
import './App.css';
import Form from './Dovetail/Form';
import Anagram from './Dovetail/Anagram';
import TempTracker from './Dovetail/TempTracker';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let history = createBrowserHistory()
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Form />}/>
        <Route exact path="/anagram" element={<Anagram />} />
        <Route exact path="/temptracker" element={<TempTracker />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
