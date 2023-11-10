import { useState } from "react";
import Header from "./components/header";
import "./App.css";
import Login from "./pages/login";
import Survey from "./pages/survey";
import Habit from "./pages/journey";
import Quotation from "./components/quotation";
import Message from "./components/message";
import { HashRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/game";
import Footer from "./components/footer";
import Profile from "./pages/profile";
import Resources from "./pages/resources";
import { AppProvider } from "./AppProvider";
import Admin from "./pages/admin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <AppProvider>
      <HashRouter hashType="noslash">
        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/game" element={<Game />} />
          <Route path="/habit" element={<Habit />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/message" element={<Message />} />
        </Routes>
        <Footer />
      </HashRouter>
      </AppProvider></div>
  );
}

export default App;
