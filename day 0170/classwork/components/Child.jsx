const Child = ({ error }) => {
    if (error) {
      throw new Error('Error');
    }
    
    return (
      <div>
        <h1>Nika</h1>
      </div>
    )
  }
  
  export default Child;