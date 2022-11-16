module.exports = async (req, res, next) => {
  try {
    if (!req.user || req.user.email !== 'admin')
      throw new Error('you aint authorized dawg');
    next();
  } catch (error) {
    error.status = 403;
    next(error);
  }
};
