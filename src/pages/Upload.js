import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadImages } from "../redux/reducers/uploadImage";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";

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

    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      if (auth) {
        dispstch(
          uploadImages({ source: reader.result, id: auth._id, push: nevigate })
        );
      }
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
    };
  };
  return (
    <div className="py-4">
      <Form onSubmit={handleSubmitFile}>
        <Form.Group className="mb-3">
          <Form.Control
            id="fileInput"
            type="file"
            name="image"
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
      {/* <form onSubmit={handleSubmitFile} className="form">
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input d-none"
                />
                <label htmlFor='fileInput' className='cursor-pointer w-100 boder-1'> <span>Browse image</span> </label>
                <button className="btn" type="submit">
                    Submit
                </button>
            </form> */}
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
    </div>
  );
}
