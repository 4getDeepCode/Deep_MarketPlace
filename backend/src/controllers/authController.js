const UserError = require("../exceptions/UsserError");
const AuthService = require("../services/AuthService");



class AuthController {

    async sentLoginOtp(req, res) {
        try {
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