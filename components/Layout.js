import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "20px" }}>
        {children}
      </div>
      <Footer />      
    </>
  );
}
