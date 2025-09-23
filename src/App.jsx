import "./App.css";
import UserProvider from "./components/context/UserProvider";
import Layout from "./components/layout/Layout";
import Listings from "./components/listings/Listings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Listings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
