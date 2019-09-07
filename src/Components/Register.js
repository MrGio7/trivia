import React, { useState } from "react";
import axios from "axios";

import "../Assets/SCSS/Register.scss";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    img:
      "https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png",
    repeat: ""
  });

  const changeHandler = ev => {
    ev.persist();
    setUser(user => ({
      ...user,
      [ev.target.name]: ev.target.value
    }));
  };

  const registerHandler = ev => {
    ev.preventDefault();

    if (user.password === user.repeat || user.password) {
      axios
        .post(`http://localhost:5000/api/users/register`, {
          username: user.username,
          password: user.password,
          img: user.img
        })
        .then(res => {
          console.log(res.data);
          setUser({
            username: "",
            password: "",
            img:
              "https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png",
            repeat: ""
          });
          alert(
            `Congrats U have succesfully registered, please log in and enjoy the game`
          );
        })
        .catch(err => {
          if (!user.username || !user.password || !user.img) {
            alert("Please compleate all fields");
          } else {
            alert("user with this name already exists");
          }
        });
    } else {
      alert(`Passwords don't match`);
    }
  };

  return (
    <div className="registerPage">
      <div>
        <h1>Sign Up</h1>
        <h2>It’s quick and easy.</h2>
      </div>

      <form onSubmit={registerHandler}>
        <input
          type="text"
          placeholder="UserName"
          name="username"
          value={user.username}
          onChange={changeHandler}
        />

        <input
          type="text"
          placeholder="User image address"
          name="img"
          value={user.img}
          onChange={changeHandler}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={changeHandler}
        />

        <input
          type="password"
          placeholder="Repeat password"
          name="repeat"
          value={user.repeat}
          onChange={changeHandler}
        />

        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Register;
