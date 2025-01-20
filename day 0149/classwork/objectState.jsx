import { useState } from 'react';

const App = () => {
    const [userInfo, setUserInfo] = useState({});

    // შექმენით ფორმა სადაც გექნებათ 4 ინფუთ ელემენტი, თქვენი დავალებაა რომ შექმნათ ერთი მდგომარეობა,
    // რომსელაც გამოიყენებთ 4 ინფუთისთვის + როგორც კი მდგომარეობა შეიცვლება ეგრევე უნდა გამოიტანოთ ამჟამინდელი
    // მნიშვნელობები პარაგრაფებში მაგალითად email: value, pass, firstname და lastname

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUserInfo(prev => ({ ...prev, [name]: value }));
    }

    return (
        <>
            <form>
                <input type="text" name="firstname" value={userInfo.firstname} onChange={handleChange} placeholder="Firstname" />
                <input type="text" name="lastname" value={userInfo.lastname} onChange={handleChange} placeholder="Lastname" />
                <input type="email" name="email" value={userInfo.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={userInfo.password} onChange={handleChange} placeholder="Password" />
            </form>
            <div>
                <p>Firstname: {userInfo.firstname || ""}</p>
                <p>Lastname: {userInfo.lastname || ""}</p>
                <p>Email: {userInfo.email || ""}</p>
                <p>Password: {userInfo.password || ""}</p>
            </div>
        </>
    );

}

export default App;