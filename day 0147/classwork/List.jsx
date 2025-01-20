// import { useState } from "react";

// const List = () => {
//   const [list, setList] = useState([]);
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     const item = e.target.item.value;
//     e.target.reset();
//     setList((prevItem) => [...prevItem, item]);
//   };
  
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="item" placeholder="Add item" required />
//         <button>Submit</button>
//       </form>
//       <ul>
//         {list.map((curValue, index) => (
//           <li key={`item-${index}`}>{curValue}</li>
//         ))}
//       </ul>
//     </>
//   );
// };
  
// export default List;