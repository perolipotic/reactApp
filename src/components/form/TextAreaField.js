import React from "react";

//components
import ErrorMessage from "./ErrorMessage";

//styles
import { FormGroup } from "../../styles/form/formGroup";
import { Label } from "../../styles/form/label";
import { TextArea } from "../../styles/form/textArea";

const TextAreaField = ({ message, label }) => (
  <FormGroup>
    <Label>{label}</Label>
    <TextArea {...message.input} type="text" placeholder="Message" rows="4" />
    <ErrorMessage meta={message.meta}/>
  </FormGroup>
);



export default TextAreaField;
