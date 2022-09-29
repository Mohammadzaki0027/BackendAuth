import React from "react";
import axios from "axios";
const Login = () => {

const [userdata, setUserData] = React.useState({
    email: "",
    password: "",

  });
  const handlesubmit = (e) => {
    e.preventDefault();
axios.post("http://localhost:8080/user/login",userdata).then((r)=>{
  console.log(r.data.token);

  localStorage.setItem("token",r.data.token)
})
  };
  const handlechange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userdata, [name]: value });
  };
  return (
    <div style={{ width: "50%", margin: "auto" }}>
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
      
        <button onClick={handlesubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
