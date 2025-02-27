import { createContext } from 'react';
import Child from './component/Child.jsx';

export const AuthContext = createContext();

const App = () => {
  return (
    <>
      <AuthContext.Provider value={{email: "nika@gmail.com", password: "1234"}}>
        <Child />
      </AuthContext.Provider>
      <AuthContext.Provider value={{email: "luka@gmail.com", password: "1234"}}>
        <Child />
      </AuthContext.Provider>
      <AuthContext.Provider value={{email: "data@gmail.com", password: "1234"}}>
        <Child />
      </AuthContext.Provider>
    </>
  );
}

export default App;