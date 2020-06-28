import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import _JSXStyle from "styled-jsx/style";
import { login, loginError } from "../actions";
const Login = ({ login, loginError, error }) => {
  const INITIAL_STATE = {
    email: "",
    password: "",
    error: false,
  };
  const [token, setToken] = useState("");
  const [state, setState] = useState(INITIAL_STATE);
  let storeToken = localStorage.getItem("token");

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({ ...state, [name]: value });
  };
  const logInto = async () => {
    await axios
      .post("http://34.206.250.152:3333/api", {
        query: `mutation {
          login(input: { email: "${state.email}", password: "${state.password}" }) {
              user {
                  id
                  name
              }
              token
          }
      ,
      }`,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.data.login.token);
        setToken(res.data.data.login.token);
        login(true, res.data.data.login.token, "Login executado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        setState({ ...state, error: true });
        setTimeout(() => {
          setState({ ...state, error: false });
        }, [5000]);
      });
  };

  if (token) {
    return <Redirect to="/home" />;
  }
  return storeToken ? (
    <Redirect to="/home" />
  ) : (
    <div className="form">
      <h1>LOGOMARCA DA EMPRESA</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="e-mail"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="senha"
          onChange={handleChange}
          required
        />
      </form>
      <button onClick={logInto}>Entrar</button>
      {state.error && (
        <span>[ERRO] Por falvor, verifique os campos e tente novamente!</span>
      )}
      <_JSXStyle id="Login">{`
        
        .form {
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          background-color: aliceblue;
          padding: 60px 40px;
          border-radius: 8px;
          width: 50%;
          max-width: 400px;
        }
        
        .form h1 {
          font-weight: 500;
          font-size: 20px;
        }

        .form form {
          display: flex;
          flex-direction: column;
          margin-top: 25px
        }
        
        .form form input {
          border-radius: 4px;
          border: solid 1px #808080;
          margin-top: 20px; 
          padding: 10px;
          font-size: 16px;
          outline-color: var(--primary-color);
          font-family: Open Sans, Arial;
        }
        
        .form button {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          border: 0;
          border-radius: 4px;
          margin-top: 20px;
          padding: 10px;
          font-size: 16px;
          color: white;
        }
        .form span {
          background-color: #FF0000bb;
          color: white;
          margin-top: 20px;
          padding: 10px;
          border: solid 1px #FF0000;
          border-radius: 4px;
        }
      `}</_JSXStyle>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { error: state.error };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (logged, token, text) => dispatch(login(logged, token, text)),
    loginError: (logged, error) => dispatch(loginError(logged, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
