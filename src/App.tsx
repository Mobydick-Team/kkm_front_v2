import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/shared/Footer";
import { Header } from "./components/shared/Header";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/home/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
