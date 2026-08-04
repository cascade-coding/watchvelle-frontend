import { Routes, Route, Link } from "react-router";

function Home() {
  return <h1>🏠 Home Page</h1>;
}

function About() {
  return <h1>ℹ️ About Page</h1>;
}

function Services() {
  return <h1>🛠️ Services Page</h1>;
}

function Contact() {
  return <h1>📞 Contact Page</h1>;
}

function Navigation() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navigation />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
