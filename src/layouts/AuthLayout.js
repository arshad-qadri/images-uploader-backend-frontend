import React, { useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";
import LoginHeader from "../components/LoginHeader";

const AuthLayouts = ({ children }) => {
  const headRef = useRef();
  const footerRef = useRef();

  return (
    <div>
      <div id="authHeader" ref={headRef}>
        <LoginHeader />
      </div>
      <Container
        style={{
          height: `calc(100vh - ${85
            // headRef?.current?.offsetHeight + footerRef?.current?.offsetHeight
          }px)`,
        }}
      >
        {children}
      </Container>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayouts;
