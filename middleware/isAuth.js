const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.header("authtoken");

    if (!token) {
      return res.status(401).json({ msg: "invalid token" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "invalid token" });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: `**authorisation error** ${err.message}` });
  }
};
