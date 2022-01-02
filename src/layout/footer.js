import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-3 bg-white">
      <Row>
        <Col md="6" className="mt-3 text-md-start text-center">
          <ul>
            <li className="list-inline-item">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">Terms of Use</Link>
            </li>
          </ul>
        </Col>
        <Col md="6" className="mt-3 text-md-end text-center">
          <div>
            ©<span>{new Date().getFullYear()}</span>, Made with ♥ by{" "}
            <a href="https://elmory.vercel.app/" target={`_blank`}>
              Abdo Elmorsy
            </a>
            .
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
