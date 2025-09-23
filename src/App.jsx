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
            {/* Layout wraps all pages that share the Navbar */}
            <Route path="/" element={<Layout />}>
              {/* Only Listings page for now */}
              <Route index element={<Listings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
