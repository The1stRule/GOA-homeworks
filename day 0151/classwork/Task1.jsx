import { useState, useEffect } from "react";

// შექმენით პრეოქტი სადაც გამოიყენებთ useEffects და useState, გამოიყენეთ API,
// რომ გააგზავნოთ მოთხოვნა იმის შემდეგ რაც პირველად დარენდერდება კომპონენტი და გამოიტანეთ ეკარნზე მიღებული მონაცემები

const fetchData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const App = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setProductsList(data);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Products</h1>
          <ul>
            {productsList.map((curValue) => (
              <li key={curValue.id}>
                {curValue.title} - {curValue.price}
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default App;