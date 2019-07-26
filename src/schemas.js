import { object, string } from "yup";

const shortText = field =>
  string()
    .trim()
    .min(1, `${field} should be 1 or more characters`)
    .max(100, `${field} should not be more than 100 characters`);

export const categorySchema = object().shape({
  name: shortText("name")
});

export const metadataSchema = object().shape({
  name: shortText("name"),
  value: shortText("value")
});

export const favouriteSchema = object().shape({
  title: shortText("name"),
  description: string()
    .trim()
    .min(10)
});

export const validateOption = {
  abortEarly: false,
  strict: true
};
