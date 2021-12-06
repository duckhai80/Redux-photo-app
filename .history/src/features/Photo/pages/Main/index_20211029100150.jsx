import Banner from "components/Banner";
import Images from "constants/images";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const AddEdit = React.lazy(() => import("./features/Photo/pages/AddEdit"));

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div>
      Photo Main Page
      <div className="photo-main">
        <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

        <Container className="text-center">
          <Link to="/photos/add" component={AddEdit}>
            Add new photo
          </Link>
        </Container>
      </div>
    </div>
  );
}

export default MainPage;
