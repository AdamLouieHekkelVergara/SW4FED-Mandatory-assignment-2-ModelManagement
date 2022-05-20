import React from "react";
import { useState } from "react";
import { postRequest } from "../../api/postRequest";

import classes from "./NewManager.module.css";
const Create_Manager_URL = "api/managers"
const NewManager = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    var object = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    postRequest({object : object, apiEndPoint: Create_Manager_URL});
    alert('Manager has been added');

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

        <div className={classes.actions}>
          <button variant="primary" type="submit">
            Opret
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewManager;
