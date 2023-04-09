import { createContext, useEffect, useState } from "react";
import Main from "./pages/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Purchase from "./pages/purchase";
import Send from "./pages/send";
import Swap from "./pages/swap";

export const AppContext = createContext();

function App() {
  const [myPoint, setMyPoint] = useState(localStorage.getItem("point") || 0);

  useEffect(() => {
    let savedPoint = localStorage.getItem("point");

    if (!savedPoint) {
      localStorage.setItem("point", 0);
    }
  }, []);

  return (
    <AppContext.Provider value={{ myPoint, setMyPoint }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/send" element={<Send />} />
          <Route path="/swap" element={<Swap />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
