export const minValue = min => value =>
  !!value && value.length >= min ? undefined : `Should be greater than ${min}`;

export const required = value => (value ? undefined : 'Required')

export const isEmailValid = value => {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return filter.test(value) ? undefined : "Invalid email"
}

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);