import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import HomePage from "Pages/Home";
import AboutPage from "Pages/About";
import NavigationBar from "Components/NavigationBar";
import User from "Pages/User";
import "./App.css";
import Signup from "Pages/Signup";
import Login from "Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<User />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
