const {sign,verify} = require("jsonwebtoken");

const createToken = (user) => {
  const accesToken = sign(
    {
      userId: user._id,
      username: user.username,
    },
    process.env["JWT_SECRET"],
    { expiresIn: "1h" }
  );
  return accesToken;
};


const validateToken = (req, res, next) => {
  const token = req.cookies["access_token"];
  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }
  try {
    const validToken = verify(token, process.env["JWT_SECRET"]);
    if(validToken) {
      req.authenticated = true;
      req.userId= validToken.userId;
      return next();
    } 
}catch (err) {
    return res.status(401).json({
      auth: false,
      message: "Invalid token",
    });
  }
}

module.exports = {
  createToken,
  validateToken,
};
