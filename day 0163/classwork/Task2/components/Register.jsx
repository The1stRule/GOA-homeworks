import useForm from "../hooks/useForm.js";

const Register = () => {
  const [inputInfo, handleSubmit] = useForm(null);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" placeholder="Enter your fullname" required />
        <input type="email" name="email" placeholder="Enter your email" required />
        <input type="password" name="password" placeholder="Enter your password" required />
        <button>Sign up</button>
      </form>
      {
        inputInfo ? (
          <div>
            <p>Fullname: {inputInfo.fullname}</p>
            <p>Fullname: {inputInfo.email}</p>
            <p>Fullname: {inputInfo.password}</p>
          </div>
        ) : <p>Please enter your info</p>
      }
    </div>
  );
};

export default Register;