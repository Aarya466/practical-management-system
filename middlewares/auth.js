import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  // Extract token from the Authorization header
  const token = req.header("Authorization")?.replace("Bearer ", "");  // Extract token

  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }

  try {
    // Verify the token and decode it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Ensure that the decoded object contains the user info
    if (!decoded.user) {
      return res.status(401).json({ error: "Invalid token format" });
    }

    // Attach the user information to req.user
    req.user = decoded.user;  // Ensure the decoded token contains a 'user' object
    next();  // Proceed to the next middleware or route
  } catch (error) {
    console.error("Authorization Error:", error);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export default authMiddleware;
