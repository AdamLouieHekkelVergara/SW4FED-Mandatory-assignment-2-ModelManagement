import classes from "./AuthForm.module.css";
import { Redirect } from "react-router-dom";
import { useRef, useState, useEffect} from "react";
import { loginRequest } from "../../api/loginRequest";
import useAuth from "../../hooks/useAuth";


const LOGIN_URL = "/api/Account/login";

const AuthForm = () => {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [email, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    var object = {
      email: email,
      password: password
    }

    var response = loginRequest({
      object: object
    }).then(response => {
      if (response.ok) {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role")
        setAuth({email, password, role, token});
        setSuccess(true);
      }
      else if (response.status === 400) {
        setErrMsg("Unauthorized");
      } else if (response.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    });




  };


  return (
    <>
      {success ? (
        <section>
          <Redirect to="/" />
        </section>
      ) : (
        <section className={classes.auth}>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Log Ind Her..</h1>

          <form onSubmit={handleSubmit}>
            <div className={classes.control}>
              <label htmlFor="username">E-mail:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="on"
                onChange={(e) => setUser(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Kode:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={password}
                required
              />
            </div>
            <div className={classes.actions}>
              <button>Log Ind</button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};
export default AuthForm;
