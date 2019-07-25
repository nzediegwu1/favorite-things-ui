import { object, string } from "yup";

export const categorySchema = object().shape({
  name: string()
    .trim()
    .min(2, "name should be 2 or more characters")
    .max(30, "name should not be more than 30 characters")
});

export const validateOption = {
  abortEarly: false,
  strict: true
};
