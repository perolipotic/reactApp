import React from "react";

//components
import ErrorMessage from "./ErrorMessage";

//styles
import { FormGroup } from "../../styles/form/formGroup";
import { Label } from "../../styles/form/label";
import { Input } from "../../styles/form/input";

const EmailField = ({ email, label }) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input {...email.input} type="email" placeholder="Email" />
    <ErrorMessage meta={email.meta} />
  </FormGroup>
);

export default EmailField;
