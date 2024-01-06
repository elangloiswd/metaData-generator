/* eslint-disable no-undef */
import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const MetaTagForm = ({ metaTagsCollections, setMetaTagsCollections }) => {
  const handleInputChange = (name, value) => {
    setMetaTagsCollections({ ...metaTagsCollections, [name]: value });
  };
  const handleReset = () => {
    setMetaTagsCollections({
      title: "",
      url: "",
      description: "",
      keywords: "",
      imageUrl: "",
      author: "",
    });
  };

  return (
    <Form>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formbasicTitle">
            <Form.Label>Website Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Website Title"
              value={metaTagsCollections.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formbasicUrl">
            <Form.Label>Website Address</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter Website URL"
              value={metaTagsCollections.url}
              onChange={(e) => handleInputChange("url", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={12}>
          <Form.Group className="mb-3" controlId="formbasicDescription">
            <Form.Label>Website Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter the Website Descripton"
              value={metaTagsCollections.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={12}>
          <Form.Group className="mb-3" controlId="formbasicKeywords">
            <Form.Label>Website Meta Keywords</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Ente Website Keywords"
              value={metaTagsCollections.keywords}
              onChange={(e) => handleInputChange("keywords", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formbasicImageUrl">
            <Form.Label>Website URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter The URL"
              value={metaTagsCollections.imageUrl}
              onChange={(e) => handleInputChange("imageUrl", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formBasicAuthor">
            <Form.Label>Website Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Author Name"
              onChange={(e) => handleInputChange("author", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} className="text-center mt-3 pt-3 pb-5">
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MetaTagForm;
