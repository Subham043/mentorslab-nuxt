import Vue from 'vue';
import { ValidationProvider, extend, ValidationObserver, configure } from 'vee-validate';
// eslint-disable-next-line camelcase
import { required, email, alpha_spaces, confirmed, ext } from 'vee-validate/dist/rules';

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
    // ...
  }
})

// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});

extend('phone', {
  validate: value => /^((\+91?)|\+)[7-9][0-9]{9}$/.test(value),
  message: (fieldName, placeholders) => {
    return `${fieldName} is invalid`;
  }
});

// No message specified.
extend('email', {
  ...email,
  message: (fieldName, placeholders) => {
    return `${fieldName} is invalid`;
  }
});

// Override the default message.
extend('required', {
  ...required,
  message: (fieldName, placeholders) => {
    return `${fieldName} is required`;
  }
});

extend('alpha_spaces', {
  // eslint-disable-next-line camelcase
  ...alpha_spaces,
  message: (fieldName, placeholders) => {
    return `${fieldName} is invalid`;
  }
});

extend('confirmed', {
  // eslint-disable-next-line camelcase
  ...confirmed,
  message: (fieldName, placeholders) => {
    return `Both the passwords should match`;
  }
});

extend('ext', {
  ...ext,
});

extend('min', {
  validate(value, { min }) {
    return value.length >= min;
  },
  params: ['min'],
  message: (fieldName, placeholders) => {
    return `The ${fieldName} field must have at least ${placeholders.min} characters`;
  }
});

extend('max', {
  validate(value, { max }) {
    return value.length <= max;
  },
  params: ['max'],
  message: (fieldName, placeholders) => {
    return `The ${fieldName} field must have ${placeholders.max} characters at most`;
  }
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);