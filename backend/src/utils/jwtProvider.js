require("dotenv").config();

const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;

if (!secretKey) {
  throw new Error("SECRET_KEY is missing in environment variables (.env)");
}

class JwtProvider {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  createJwt(payload) {
    return jwt.sign(payload, this.secretKey, { expiresIn: "24h" });
  }

  getEmailFromJwt(token) {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      return decoded.email;
    } catch (error) {
      throw new Error("Invalid token");
    }
  }

  verifyJwt(token) {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      throw new Error("Invalid token");
    }
  }
}

module.exports = new JwtProvider(secretKey);
