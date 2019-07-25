import { object, string } from "yup";

const shortText = field =>
  string()
    .trim()
    .min(1, `${field} should be 1 or more characters`)
    .max(30, `${field} should not be more than 30 characters`);

export const categorySchema = object().shape({
  name: shortText("name")
});

export const metadataSchema = object().shape({
  name: shortText("name"),
  value: shortText("value")
});

export const validateOption = {
  abortEarly: false,
  strict: true
};
