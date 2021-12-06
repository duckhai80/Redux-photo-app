import Banner from "components/Banner";
import NotFound from "components/NotFound";
import PhotoForm from "features/Photo/components/PhotoForm";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./styles.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const handleSubmit = (values) => {
    console.log("From submit values: ", values);
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={(values) => console.log("Form submit: ", values)}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
