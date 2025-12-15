import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form.jsx';
import Result from './components/Result.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
