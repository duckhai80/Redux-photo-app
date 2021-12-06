import Banner from "components/Banner";
import Images from "constants/images";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Container } from "reactstrap";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
const AddEdit = React.lazy(() => import("../AddEdit"));

const config = {
  apiKey: "AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM",
  authDomain: "myproject-1234.firebaseapp.com",
};
firebase.initializeApp(config);

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();

  // console.log("List of photos: ", photos);

  const handlePhotoEditClick = (photo) => {
    const editPhotoUrl = `${match.url}/${photo.id}`;
    history.push(editPhotoUrl);
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
          <Link to="/sign-in">Sign In</Link>
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
