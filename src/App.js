import React from "react";
import "./App.css";
import Login from "./Componets/Login";
import Home from "./Componets/Home";
import _JSXStyle from "styled-jsx/style";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

const store = createStore(reducer);

//email: "user@teste.com", password: "12345"
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <_JSXStyle id="App">{`
            :root{
              --primary-color: #6957A5;
            }
            
            * {
              margin: 0px;
              padding: 0px;
              box-sizing: border-box;
            }
            body {
              display: flex; 
              justify-content: center;
              position: fixed;
              height: 100vh;
              align-items: center;
              font-family: 'Montserrat', sans-serif;
            }
            .App {
              height: 100vh;
              width: 100vw;
              position: fixed;
              top: 0;
              left: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #6957A5aa;
            }
          `}</_JSXStyle>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
