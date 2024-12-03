import { useState, useEffect } from "react";
import Header from "./components/Layouts/Header";
import MainPage from "./pages/MainPage";
import SideMenu from "./components/Layouts/SideMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckPage from "./pages/CheckPage";

function App() {
  const [openSide, setOpenSide] = useState(false);

  const openSideCtrl = () => {
    setOpenSide(!openSide);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Header theme={true} openSideCtrl={openSideCtrl} />}>
            <Route path="/"></Route>
          </Route>
          <Route element={<Header theme={false} openSideCtrl={openSideCtrl} />}>
            <Route path="/check"></Route>
          </Route>
        </Routes>

        <SideMenu openSide={openSide} openSideCtrl={openSideCtrl} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/check" element={<CheckPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
