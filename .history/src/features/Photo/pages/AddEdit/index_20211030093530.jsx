import Banner from "components/Banner";
import NotFound from "components/NotFound";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import "./styles.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("From submit values: ", values);
    const action = addPhoto(values);
    dispatch(action);
    console.log(action);
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
