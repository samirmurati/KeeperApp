import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Footer />
    </div>
  );
}

export default App;
