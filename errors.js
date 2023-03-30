// errors.js

// Parent error class
class AppError extends Error {
  constructor(id) {
    super();
    this.name = this.constructor.name;

    if (this instanceof UserIdError)
      this.message = `User ID: ${id} does not exist.`;
    else if (this instanceof ProductIdError)
      this.message = `Product ID: ${id} does not exist.`;

    this.statusCode = 500;
  }
}

// Child error classes
class UserIdError extends AppError {}
class ProductIdError extends AppError {}

module.exports = {
  UserIdError,
  ProductIdError,
};
