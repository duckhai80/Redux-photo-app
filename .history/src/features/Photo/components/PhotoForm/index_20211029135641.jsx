import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import { Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  return <Formik>{(formikProps) => {
    return (
      <Form>
        <FormGroup>
          <Label for="titleId">Title</Label>
          <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
        </FormGroup>

        <FormGroup>
          <Label for="categoryId">Category</Label>
          <Select
            id="categoryId"
            name="categoryId"
            placeholder="What's your photo category?"
            options={PHOTO_CATEGORY_OPTIONS}
          />
        </FormGroup>

        <FormGroup>
          <Label for="categoryId">Photo</Label>

          <div>
            <Button type="button" outline color="primary">
              Random a photo
            </Button>
          </div>
          <div>
            <img
              width="200px"
              height="200px"
              src={Images.COLORFUL_BG}
              alt="colorful background"
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Button color="primary">Add to album</Button>
        </FormGroup>
      </Form>
    );
  }}</Formik>;
}

export default PhotoForm;

{
  /* <Form>
  <FormGroup>
    <Label for="titleId">Title</Label>
    <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
  </FormGroup>

  <FormGroup>
    <Label for="categoryId">Category</Label>
    <Select
      id="categoryId"
      name="categoryId"
      placeholder="What's your photo category?"
      options={PHOTO_CATEGORY_OPTIONS}
    />
  </FormGroup>

  <FormGroup>
    <Label for="categoryId">Photo</Label>

    <div>
      <Button type="button" outline color="primary">
        Random a photo
      </Button>
    </div>
    <div>
      <img
        width="200px"
        height="200px"
        src={Images.COLORFUL_BG}
        alt="colorful background"
      />
    </div>
  </FormGroup>

  <FormGroup>
    <Button color="primary">Add to album</Button>
  </FormGroup>
</Form>; */
}
