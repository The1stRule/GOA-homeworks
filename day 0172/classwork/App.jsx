import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register.jsx";
import Authorization from "./components/Authorization.jsx";

const App = () => {
  const [users, setUsers] = useState([]);
  
  return (
    <main>
      <Routes>
        <Route path="/" element={<Register users={users} setUsers={setUsers} />} />
        <Route path="/authorization" element={<Authorization users={users} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </main>
  );
};

export default App;