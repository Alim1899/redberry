import "./App.css";
import UserProvider from "./components/context/UserProvider";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <UserProvider>
      <div className="app">
        <Layout />
      </div>
    </UserProvider>
  );
}

export default App;
