import Banner from "components/Banner";
import Images from "constants/images";
import React from "react";
// import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import NotFound from "components/NotFound";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";

const AddEdit = React.lazy(() => import("../AddEdit"));

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  console.log("List of photos: ", photos);

  const handlePhotoEditClick = (photo) => {
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(aciton);
  };
  const handlePhotoRemoveClick = (photo) => {
    console.log("Remove: ", photo);
  };

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        ></PhotoList>
      </Container>
    </div>
  );
}

export default MainPage;
