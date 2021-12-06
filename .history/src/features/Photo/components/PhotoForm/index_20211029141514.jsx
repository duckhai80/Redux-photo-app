import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import InputField from "custom-field/InputField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Button, FormGroup, Input, Label } from "reactstrap";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  return (
    <Formik>
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField name="title" component={InputField} />
            <FormGroup>
              <Label for="titleId">Title</Label>
              <Input
                name="title"
                id="titleId"
                placeholder="Eg: Wow nature ..."
              />
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
      }}
    </Formik>
  );
}

export default PhotoForm;
