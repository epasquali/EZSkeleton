//Provides useful form validation functions for all components

//RFC2822 Email Validation REGEX
const VALID_EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

//8-64 chaacters, upper and lowercase, numeric and special characters
const VALID_PWD_REGEX = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g;

const VALID_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif"];

class FormValidation {
  isValidEmail(email) {
    return VALID_EMAIL_REGEX.test(email);
  }

  isValidPwd(pwd) {
    return VALID_PWD_REGEX.test(pwd);
  }

  isValidFirstname(firstname) {
    return firstname.length >= 2 && firstname.length <= 20;
  }

  isValidLastname(lastname) {
    return lastname.length >= 2 && lastname.length <= 20;
  }

  isValidBio(bio) {
    return bio.length >= 10 && bio.length <= 250;
  }

  isValidDripTitle(title) {
    return title.length >= 2 && title.length <= 75;
  }

  isValidDripDescription(desc) {
    return desc.length >= 40 && desc.length <= 250;
  }

  isValidImage(file) {
    return file.size < 10000000 && VALID_IMAGE_TYPES.includes(file.type);
  }

  isValidEpisodeTitle(title) {
    return title.length >= 2 && title.length <= 75;
  }
}

export default new FormValidation();
