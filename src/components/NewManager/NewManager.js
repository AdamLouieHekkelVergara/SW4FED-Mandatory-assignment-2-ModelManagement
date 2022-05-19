import React from "react";
import axios from "../../api/axios";
import { useRef, useState, useEffect, useContext } from "react";

import classes from "./NewManager.module.css";
const Create_Manager_URL = "api/managers"
const NewManager = () => {
  const [errMsg, setErrMsg] = useState("");
  const [checked] = React.useState(true);

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [manager, setManager] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        Create_Manager_URL,
        JSON.stringify(
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                manager: manager,
                password: password
              }
        ),
        {
          headers: { 
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
              "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));

    } catch (err) {     
     
    }
  };

  return (
    <section className={classes.newManager}>
      <h2>Tilføj en ny manager</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="firstName">Firstname</label>
          <input
            type="text"
            id="firstname"
            autoComplete="on"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstName}
            
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="lastName">Lastname</label>
          <input
            type="text"
            id="lastname"
            autoComplete="on"
            onChange={(e) => setLastname(e.target.value)}
            value={lastName}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="on"
            onChange={(e) => setPwd(e.target.value)}
            value={password}
            
          />
        </div>

        
        <div className={classes.control}>
          <label htmlFor="manager">Manager</label>
          <input 
          type="checkbox"
          checked={checked}
          />
        </div>
        
        <div className={classes.actions}>
          <button>Opret</button>
        </div>
      </form>
    </section>
  );
};

export default NewManager;
