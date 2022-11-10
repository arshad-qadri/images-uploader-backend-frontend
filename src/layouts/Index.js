import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const headRef = useRef();
  const footerRef = useRef();
  const nevigate = useNavigate();
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("userLogin"));
    if (!auth) {
      alert("You need to login first !")
      nevigate("/login");
    } 
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div ref={headRef}>
        <Header />
      </div>
      {/* eslint-disable-next-line */}
      <div
        style={{
          height: `calc(100vh - ${
            85
            // headRef?.current?.offsetHeight + footerRef?.current?.offsetHeight
          }px)`,
        }}
       className="overflow-auto"  
      >
        <Container className="h-100">{children}</Container>
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
