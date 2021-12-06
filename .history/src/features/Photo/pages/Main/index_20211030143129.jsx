import Banner from "components/Banner";
import Images from "constants/images";
import React from "react";
// import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import NotFound from "components/NotFound";
import { useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";

const AddEdit = React.lazy(() => import("../AddEdit"));

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);

  console.log("List of photos: ", photos);

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>
        <PhotoList photos={photos}
          onPhotoEditClick={ }
          onPhotoremoveClick={}
        ></PhotoList>
      </Container>
    </div>
  );
}

export default MainPage;
