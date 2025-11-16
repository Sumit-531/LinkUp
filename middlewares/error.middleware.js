const errorMiddleware = (err, req, res, next) => {
  try {
    next();
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
