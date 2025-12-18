export const authenticate = (req, res, next) => {
  /**
   * ASSUMPTION:
   * req.user is already set after login
   * Example:
   * req.user = { id: 1, role: "ADMIN" }
   */

  if (!req.user) {
    return res.status(401).json({
      message: "Authentication required",
    });
  }

  next();
};
