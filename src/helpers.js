import toastr from "toastr";

export const handleErrors = ({ errors, name, response, message }) => {
  if (errors) return errors.map(error => toastr.error(error, name));
  if (response && response.status < 500) {
    return Object.entries(response.data).map(([key, value]) =>
      toastr.error(value, key)
    );
  }
  return toastr.error(message);
};
