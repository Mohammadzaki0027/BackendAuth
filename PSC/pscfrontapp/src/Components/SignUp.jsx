import React from "react";
import axios from "axios"
const SignUp = () => {
  const [userdata, setUserData] = React.useState({
    email: "",
    password: "",
    age: 0,
  });
  const handlesubmit = (e) => {
    e.preventDefault();
axios.post("http://localhost:8080/user/signup",userdata).then((r)=>{
  console.log(r);
})
  };
  const handlechange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userdata, [name]: value });
  };
  return (
    <div>
      <form
        action="
      "
      >
        <input
          type="email"
          placeholder="enter email"
          name="email"
          onChange={handlechange}
          required
        />
        <br />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={handlechange}
          required
        />
        <br />
        <input
          type="number"
          placeholder="enter age"
          name="age"
          onChange={handlechange}
          required
        />
        <br />
        <button onClick={handlesubmit}>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
