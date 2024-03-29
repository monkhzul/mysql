import React from "react";
import ReactDOM from "react-dom";
import "./css/TextField.css";
import "./css/index.css";
import "./css/footer.css";
import "./css/Area.css"
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/modal.css'
import ModalProvider from './context/ModalContext'
import { UserProvider } from './context/UserContext';
import { FoodProvider } from './context/FoodContext';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <UserProvider>
        <FoodProvider>
           <App />
        </FoodProvider>
      </UserProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
