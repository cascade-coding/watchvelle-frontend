import { Routes, Route, Link } from "react-router";
import Brand from "./components/icons/Brand";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Shop from "./pages/Shop";

function About() {
  return <h1 className="text-3xl">ℹ️ About Page</h1>;
}

function Services() {
  return <h1>🛠️ Services Page</h1>;
}

function Contact() {
  return <h1>📞 Contact Page</h1>;
}

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watches" element={<Shop />} />
          <Route path="/watches/:productId" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
