import toastr from "toastr";

export const handleErrors = ({ errors, name, response, message }) => {
  if (errors) return errors.forEach(error => toastr.error(error, name));
  if (response) {
    return Object.entries(response.data).forEach(([key, value]) =>
      toastr.error(value, key)
    );
  }
  toastr.error(message);
};
