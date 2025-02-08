import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dasboard from './component/Dashboard.jsx';
import SignUp from './component/SignUp.jsx';
import LogIn from './component/LogIn.jsx';
import ProtectedRoute from './component/ProtectedRote.jsx';
import "./index.css";

const App = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [curUser, setCurUser] = useState(JSON.parse(localStorage.getItem("curUser")) || {});

  useEffect(() => {
    setUsers(prev => {
      const filteredUsers = prev.filter(curValue => curValue.email !== curUser.email);

      localStorage.setItem("users", JSON.stringify([...filteredUsers, curUser]));
      localStorage.setItem("curUser", JSON.stringify(curUser));

      return [...filteredUsers, curUser];
    })
    console.log(curUser);

  }, [curUser])

  useEffect(() => {
    console.log(users);
  }, [users])

  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute curUser={curUser}>
          <Dasboard curUser={curUser} setCurUser={setCurUser} />
        </ProtectedRoute>
        } />
      <Route path="/signup" element={<SignUp users={users} setUsers={setUsers} />} />
      <Route path="/login" element={<LogIn users={users} setCurUser={setCurUser} />} />
    </Routes>
  );
}

export default App;