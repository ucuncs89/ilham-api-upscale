class ErrorException extends Error {
  constructor(message, errorCode) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
  }
}

module.exports = ErrorException;
