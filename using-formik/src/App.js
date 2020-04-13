import React from "react";
import ReactDOM from "react-dom";

import MyForm from "./MyForm";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Formik</h1>
      <MyForm />
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
