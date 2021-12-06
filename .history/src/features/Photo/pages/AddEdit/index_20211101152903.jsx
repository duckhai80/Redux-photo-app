import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import "./styles.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();

  const editPhoto = useSelector((state) => state.photos);
  const isAddMode = !photoId;
  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : {
        title: photos.tiel,
      };

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("From submit values: ", values);

      setTimeout(() => {
        const action = addPhoto(values);
        dispatch(action);

        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm initialValues onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
