export const createExperienceValidations = values => {
  const errors = {};
  const requiredFields = ['itemName', 'description'];
  const needLonger = 'Needs to be longer';
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.itemName === "Plantain Tuna") {
    values.imgUrl = "https://s3-us-west-1.amazonaws.com/foodie1/plaintainenctuna.jpg"
  }
  console.log(values);
  if (values.itemName && values.itemName.length < 6) {
    errors.itemName = needLonger;
  }
  if (values.description && values.description.length < 6) {
    errors.description = needLonger;
  }
  return errors;
};