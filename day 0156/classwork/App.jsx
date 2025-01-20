import { useEffect, useState } from 'react';

// შექმენით პროექტი:

// შექმენით Book Library App პროექტი
// თქვენი დავალებაა წამოიღოთ წიგნები შემდეგი api-დან

// https://www.googleapis.com/books/v1/volumes?q={searchTerm}

// წამოღებული წიგნები უნდა დაარენდეროთ ისე, რომ თითოეულ წიგნს ჰქონდეს თავისი ღილაკი.
// ამ ღილაკზე დაკლიკებისას კონკრეტული წიგნი უნდა ჩაემატოს MyLibrary სექციაში(განათავსეთ სასურველ ადგილას)

const App = () => {
  const [book, setBook] = useState([]);
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=roman");
        const data = await response.json();
        console.log([...data.items])
        setBook([...data.items]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()
  }, [])

  const handleClick = (item) => {
    setLibrary(prev => [...prev, item]);
  }

  return (
    <>
      <h1>Book Library</h1>
      <div>
        {
          book.length === 0 ? <p>Pending...</p> :
          book.map(curValue => {
            return (
              <div key={curValue.id}>
                <p>{curValue.volumeInfo.title}</p>
                <button onClick={() => handleClick(curValue)}>Add to library</button>
              </div>
            );
          })
        }
      </div>
      <h2>Library</h2>
      <div>
        {
          library.length === 0 ? <p>Nothing</p> :
          library.map(curValue => {
            return (
              <div key={curValue.id}>
                <p>{curValue.volumeInfo.title}</p>
              </div>
            );
          })
        }
      </div>
    </>
  );


}

export default App;