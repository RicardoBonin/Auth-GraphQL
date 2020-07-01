import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions";
import _JSXStyle from "styled-jsx/style";

const Home = ({ menssage, logout }) => {
  const [token, setToken] = useState(true);
  let storeToken = localStorage.getItem("token");
  const logOut = () => {
    localStorage.removeItem("token");
    logout(false, "", "");
  };
  if (!token) {
    return <Redirect to="/" />;
  }

  return storeToken ? (
    <div className="page-home">
      <div className="header">
        <h1>Logo</h1>
        <div>
          <button onClick={logOut}>Sair</button>
          <i class="fas fa-sign-out-alt"></i>
        </div>
      </div>
      <main>
        <h1>{menssage}</h1>
      </main>

      <_JSXStyle id="Home">{`
        .page-home {
          display: flex;
          height: 100vh;
          width: 100vw;
          flex-direction: column;
          align-items: center;
          
        }
        
        .page-home main{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: aliceblue;
          border-radius: 4px;
          margin-top: 20px;
          width: 90%;
          padding: 20px;
          text-aligin: center;
        }

        .page-home main h1 {
          width: 90%;
          text-align: center;
        }

        .header {
          background-color: aliceblue;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 20px 40px;
        }

        .header div {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .header div button {
          width: 150px;
          height: 40px;
          align-items: center;
          background-color: var(--primary-color);
          border: solid 1px var(--primary-color);
          border-radius: 4px;
          color: white;
          font-size: 18px;
          font-weight: 600;
          position: relative;
          outline: none;
        }

        .header div button:active{
          background-color: #8277a6;

        }

        .header div i {
          position: absolute;
          font-size: 20px;
          color: white;
          margin-left: 36px;
        }
        .error {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: aliceblue;
          border-radius: 4px;
          padding: 40px;

        }
        .error div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: 20px;
        }
        .error div a {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          border: 0;
          border-radius: 4px;
          padding: 10px;
          font-size: 16px;
          color: white;
          text-align: center;
          text-decoration: none;
          width: 200px;
          position: relative;
          padding-left: 30px;
          font-weight: 600;
        }
        .error div a:active{
          background-color: #8277a6;
          transition: 400ms;

        }
        .error div i {
          position: absolute;
          font-size: 20px;
          color: white;
          margin-left: 30px;
        }

        @media(max-width: 700px) {
          .error {
            width: 90%;
          }
        }

        @media (max-width: 569px) {
          h1 {
            font-size: 4vw;
          }
          
        }
      `}</_JSXStyle>
    </div>
  ) : (
    <div className="error">
      <h1>Você não tem acesso a está página!</h1>
      <p>Volte e faça seu Login</p>
      <div>
        <Link to="/">Fazer Login!</Link>
        <i class="fas fa-sign-in-alt"></i>
      </div>

      <_JSXStyle id="Home">{`
        .error {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: aliceblue;
          border-radius: 4px;
          padding: 40px;

        }
        .error div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: 20px;
        }
        .error div a {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          border: 0;
          border-radius: 4px;
          padding: 10px;
          font-size: 16px;
          color: white;
          text-align: center;
          text-decoration: none;
          width: 200px;
          position: relative;
          padding-left: 30px;
          font-weight: 600;
        }
        .error div a:active{
          background-color: #8277a6;
          transition: 400ms;

        }
        .error div i {
          position: absolute;
          font-size: 20px;
          color: white;
          margin-left: 30px;
        }
        @media(max-width: 700px) {
          .error {
            width: 90%;
          }
          .error h1 {
            text-align: center;
          }
        }
      `}</_JSXStyle>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { menssage: state.text.text };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: (logged, token, text) => dispatch(logout(logged, token, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
