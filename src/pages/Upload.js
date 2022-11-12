import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadImages } from "../redux/reducers/uploadImage";
import { useDispatch } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function Upload() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const nevigate = useNavigate();
  const dispstch = useDispatch();
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    const auth = JSON.parse(localStorage.getItem("userLogin"));

    if (previewSource && fileInputState) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        if (auth) {
          // if(previewSource && fileInputState){

          dispstch(
            uploadImages({
              source: reader.result,
              id: auth._id,
              push: nevigate,
            })
          );
        }
      };
      reader.onerror = () => {
        console.error("AHHHHHHHH!!");
      };
    } else {
      alert("Please select image !");
    }
  };
  return (
    <div className="py-4">
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <Form onSubmit={handleSubmitFile}>
            <Form.Group className="mb-3">
              <Form.Control
                id="fileInput"
                type="file"
                name="image"
                accept="image/png, image/gif, image/jpeg"
                onChange={handleFileInputChange}
                value={fileInputState}
              />

              <Button
                variant="light"
                className="my-3 mx-2"
                onClick={() => {
                  setFileInputState("");
                  setPreviewSource("");
                }}
              >
                Cancel
              </Button>
              <Button variant="dark" type="submit" className="my-3">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          {previewSource && (
            <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
          )}
        </Col>
      </Row>
    </div>
  );
}
