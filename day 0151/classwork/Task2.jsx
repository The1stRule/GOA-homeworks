import { useEffect, useState } from 'react';

// გაუშვით useEffect ის ეფექტი ყოლ ჯერზე როცა კომპონენტი თავიდან დარენდერდება

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("re-render");   
    })

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Click</button>
        </>
    );
}

export default App;