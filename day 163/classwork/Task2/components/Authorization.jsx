import useForm from "../hooks/useForm.js";

const Authorization = () => {
  const [inputInfo, handleSubmit] = useForm(null);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter your email" required />
        <input type="password" name="password" placeholder="Enter your password" required />
        <button>Sign up</button>
      </form>
      {
        inputInfo ? (
          <div>
            <p>Fullname: {inputInfo.email}</p>
            <p>Fullname: {inputInfo.password}</p>
          </div>
        ) : <p>Please enter your info</p>
      }
    </div>
  );
};

export default Authorization;