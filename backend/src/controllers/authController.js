const { validationResult } = require("express-validator");
const UserError = require("../exceptions/UsserError");
const AuthService = require("../services/AuthService");

class AuthController {
  async sentLoginOtp(req, res) {
    try {
      console.log("BODY:", req.body);
      console.log("EMAIL:", req.body?.email);
      const email = req.body.email;
      await AuthService.sendLoginOtp(email);

      return res.status(201).json({ message: "otp sent" });
    } catch (error) {
      if (error instanceof UserError || error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createUserHandler(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const token = await AuthService.createUser(req.body);
      const authResponse = {
        jwt: token,
        message: "Register Success",
        role: "ROLE_CUSTOMER",
      };

      return res.status(200).json(authResponse);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async signin(req, res) {
    console.log("Signing in...");
    try {
      const authResponse = await AuthService.signin(req.body);
      return res.status(200).json(authResponse);
    } catch (error) {
      if (error instanceof Error || error instanceof UserError) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new AuthController();
