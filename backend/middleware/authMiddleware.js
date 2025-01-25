const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Adjust the path if necessary

const authMiddleware = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from the Authorization header
      token = req.headers.authorization.split(" ")[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user by ID from the token's payload
      req.user = await User.findById(decoded.id).select("-password"); // Exclude password

      // Proceed to the next middleware or route
      next();
    } catch (error) {
      console.error("Not authorized, token failed:", error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = authMiddleware;
