import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Global/Layout";
import Sms from "./pages/Sms/Sms";
import Subscriptions from "./pages/Subscriptions/Subscriptions";

function App() {
  return (
    <main className=" max-w-7xl mx-auto items-center justify-center flex flex-col w-full">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/sms"
          element={
            <Layout>
              <Sms />
            </Layout>
          }
        />
        <Route
          path="/subscriptions"
          element={
            <Layout>
              <Subscriptions />
            </Layout>
          }
        />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </main>
  );
}

export default App;
