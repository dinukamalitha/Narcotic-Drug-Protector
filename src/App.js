import './App.css';
import { Routes, Route } from "react-router-dom";
import { Authentication } from './pages/Authentication';
import { Home } from './pages/Home';
import { Error } from './pages/Error';
import { Dashboard } from './pages/Dashboard';
import PrivateRoutesLayout from './layouts/PrivateRoutesLayout';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/authenticate" element={<Authentication />} />
      <Route path="*" element={<Error />} />

      <Route element={<PrivateRoutesLayout />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
