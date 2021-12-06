import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import InputField from "custom-field/InputField";
import SelectField from "custom-field/SelectField";
import RandomPhotoField from "custom-field/RandomPhotoField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup, Label, Spinner } from "reactstrap";
import * as Yup from "yup";

PhotoForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  isAddMode: PropTypes.string.isRequired
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const { initialValues } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required."),
    categoryId: Yup.number().required("This field is required.").nullable(),
    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is required."),
      otherwise: Yup.string().notRequired(),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
              // imageUrl={Images.COLORFUL_BG}
            ></FastField>

            {/* <FormGroup>
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
            </FormGroup> */}

            <FormGroup>
              <Button type="submit" color="primary">
                {isSubmitting && <Spinner size="sm" />}
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
