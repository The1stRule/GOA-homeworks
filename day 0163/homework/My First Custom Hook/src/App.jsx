// შექმენით პროექტი სადაც მომხმარებელს შეეძლება რეგისტრაცია და ავტორიზაცია,
// უნდა გამოიყენოთ custoom hooks, მონაცემები შეინახეთ ლოკალურ ბაზაში,
// ავტორიზაციის შემდეგ შექმენით პანელი სადაც მომხმარებელს შეეძლება პროდუქტების დამატება ისევ ფორმით,
// დამატების შემდეგ უნდა მოხდეს მათი ცხრილის სახით გამოტანა,
// ცხრილში იქონიეთ ერთი ღილაკი delete რომელზეც დაკლიკების შემთხვევაში წაიშლება პროდუქტი,
// პროდუქტები უნდ აინახებოდეს ყოველი განახლების შემდეგ ლოკალლურ ბაზაში

import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.js";
import { Route, Routes } from "react-router-dom";
import ProtectedRote from "./components/ProtectedRote.jsx";
import Products from "./components/Products.jsx";
import Register from "./components/Register.jsx";
import Authorization from "./components/Authorization.jsx";

const App = () => {
    const [users, setUsers] = useState(getLocalStorage("users") || []);
    const [curUser, setCurUser] = useState(getLocalStorage("curUser") || {});

    useEffect(() => {
        if(Object.keys(curUser).length > 0) {
            setUsers(prev => {
                const filteredUsers = prev.filter(curValue => curValue.email !== curUser.email);
                setLocalStorage("users", [...filteredUsers, curUser]);
                return [...filteredUsers, curUser];
            })
        }
    }, [curUser])

    return (
        <main>
            <Routes>
                <Route path="/" element={
                    <ProtectedRote>
                        <Products />
                    </ProtectedRote>
                } />
                <Route path="/register" element={<Register />} />
                <Route path="/authorization" element={<Authorization />} />
            </Routes>
        </main>
    );
}

export default App;