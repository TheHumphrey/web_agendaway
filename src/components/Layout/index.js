import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <Container fluid style={{ backgroundColor: "#024C95" }}>
      <Row>
        <Col
          style={{
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            height: "100vh",
          }}
        >
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
