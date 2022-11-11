import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../redux/reducers/getImageReducer";
import Loader from "../components/Loader";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [imageIds, setImageIds] = useState();
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const { images } = useSelector((state) => state);
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("userLogin"));
    if (auth?._id) {
        dispatch(getImages(auth._id));
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    // eslint-disable-next-line
    setImageIds(images.data);
  }, [images]);

  const handleClick = (url) => {
    window.open(
      `http://res.cloudinary.com/dsdcsntrd/image/upload/c_scale/v1/${url}`,
      "_blank"
    );
  };

  return (
    <div className="h-100">
      {images.isLoading ? (
        <Loader />
      ) : (
        <div className="gallery w-100 min-h-100 d-flex flex-wrap">
          {imageIds && imageIds.length > 0 ? (
            imageIds.map((imageId, index) => (
              <div
                className="m-2 image-hover overflow-hidden mx-auto"
                key={index}
                style={{ width: "300px", cursor: "pointer" }}
                onClick={() => handleClick(imageId.image_url)}
              >
                <Image
                  cloudName={"dsdcsntrd"}
                  publicId={imageId.image_url}
                  width="300"
                  height="170"
                  crop="scale"
                />
              </div>
            ))
          ) : (
            <div className="text-center w-100 py-5">
              Empty Gallary. <br />
              <Button
                variant="dark"
                className="my-2"
                onClick={() => nevigate("/upload")}
              >
                Upload your images
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
