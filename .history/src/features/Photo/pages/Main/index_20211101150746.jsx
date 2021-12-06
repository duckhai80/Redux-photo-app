import Banner from "components/Banner";
import Images from "constants/images";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const AddEdit = React.lazy(() => import("../AddEdit"));

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  // console.log("List of photos: ", photos);

  const handlePhotoEditClick = (photo) => {
    const editPhotoId = `/photos/${photo.id}`;
    history.push("/photos/");
  };

  const handlePhotoRemoveClick = (photo) => {
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
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
