const User = require("../models/User");
const VerificationCode = require("../models/VerificationCode");
const generateOTP = require("../utils/generateOtp");
const { sendVerificationEmail } = require("../utils/sendEmail");


class AuthService{

      async sendLoginOtp(email) {
        const SIGNING_PREFIX = "signing_";

        if (email.startsWith(SIGNING_PREFIX)) {
            email = email.substring(SIGNING_PREFIX.length);
            const user = await User.findOne({ email }); 
 
            if(!user) throw new UserError("user not founed with email : "+email);
        }

        const existingVerificationCode = await VerificationCode.findOne({ email });

        if (existingVerificationCode) {
            await VerificationCode.deleteOne({ email });
        }

        const otp = generateOTP();
        const verificationCode = new VerificationCode({ otp, email });
        await verificationCode.save();

        const subject = "Deep MarketPlace Login/Signup OTP";
        const text = `Your login OTP is - ${otp}`;
       
        await sendVerificationEmail(email, subject, text);
    }



}


module.exports = new AuthService();