exports.responseSuccess = (res, message, data, code) => {
  const responseMessage = {};

  responseMessage.success = true;
  responseMessage.message = message;
  responseMessage.status_code = code;

  if (data) {
    responseMessage.data = data;
  }
  return res.status(code).json(responseMessage);
};

exports.responseFailed = (res, error) => {
  let responseMessage = {};
  responseMessage.success = false;
  if (typeof error.message === "string") {
    responseMessage.message = error.message;
  } else {
    responseMessage = error.message;
  }

  const code = error.errorCode || 400;
  responseMessage.status_code = code || 400;

  return res.status(code).json(responseMessage);
};
