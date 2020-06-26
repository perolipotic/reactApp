import React, { useState, useEffect } from "react";
import { useForm, useField } from "react-final-form-hooks";
import styled from "styled-components";

//components
import EmailField from "../components/form/EmailField";
import TextAreaField from "../components/form/TextAreaField";

//utils
import { colors } from "../utils/colors";

//styles
import { Typography } from "../styles/typography";
import { SubmitButton } from "../styles/form/submitButton";

//validators
import {
  minValue,
  required,
  composeValidators,
  isEmailValid,
} from "../utils/validators";

//services
import { submitForm } from "../services/form";

const ContactPage = () => {
  const [data, onUserSubmit] = useState({});
  const [errors, onUserSubmitError] = useState([]);

  const onSubmit = (values) => {
    submitForm(values)
      .then((data) => {
        onUserSubmit(data);
        onUserSubmitError([]);
        form.reset();
      })
      .catch((e) =>
        e.json().then((c) => {
          onUserSubmit({});
          onUserSubmitError(c.errors);
        })
      );
  };

  useEffect(() => {}, [data]);

  const { form, handleSubmit, pristine, submitting } = useForm({
    onSubmit,
  });

  const email = useField(
    "email",
    form,
    composeValidators(required, isEmailValid)
  );

  const message = useField("message", form, minValue(30));
  return (
    <FormWrapper>
      {!data.message ? (
        <Form onSubmit={handleSubmit} noValidate>
          <EmailField email={email} label="E-mail" />
          <TextAreaField message={message} label="Message" />
          <SubmitButton type="submit" disabled={pristine || submitting}>
            Submit
          </SubmitButton>
          <ErrorWrapper>
            {errors.map((error) => (
              <Typography error key={error.msg}>
                {error.msg}
              </Typography>
            ))}
          </ErrorWrapper>
        </Form>
      ) : (
        <Typography success>{data.message}</Typography>
      )}
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  padding: 50px 80px;
  border: 2px solid ${colors.black};
  border-radius: 5px;
  position:relative;
`;

const ErrorWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

export default ContactPage;
