import { Container, Row, Col, Button, Alert, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin
} from "react-icons/fa";
const OurBlogHome = () => {
  return (
    <div>
      <h1>Our Blog</h1>
      <h2>Get ready for the future with aiesec.</h2>
      <Alert style={{ width: "50%", margin: "auto" }}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="enjoy with our blogs & achievements"
            className="me-2"
            aria-label="Search"
          />
          <Button>Search</Button>
        </Form>
      </Alert>
      <div>
        <FaFacebookSquare />
        <FaYoutubeSquare />
        <FaInstagramSquare />
        <FaLinkedin />
      </div>
    </div>
  );
};
export default OurBlogHome;
