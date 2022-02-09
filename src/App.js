
import './App.css';
import Form from './Dovetail/Form';
import Anagram from './Dovetail/Anagram';
import TempTracker from './Dovetail/TempTracker';
import { Routes, Route } from "react-router-dom";
import FirstForm from './AA/FirstForm';
import SecondForm from './AA/SecondForm';
import ResultForm from './AA/ResultForm';
import React from 'react';
import { historyData } from './AA/history';
import { StateProvider } from './AA/Context';


function App() {
  


    
  
  return (
    <>
    <StateProvider>
      <Routes>
        <Route exact path="/" element={<FirstForm/>} />
        <Route exact path="/second" element={<SecondForm />} />
        <Route exact path="/result" element={<ResultForm />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/anagram" element={<Anagram />} />
        <Route exact path="/temptracker" element={<TempTracker />} />
      </Routes>
      </StateProvider>
    </>
  );
}

export default App;
