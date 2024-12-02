import { useState, useEffect } from "react";
import Header from "./components/Layouts/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Header />
      <MainPage></MainPage>
    </>
  );
}

export default App;
