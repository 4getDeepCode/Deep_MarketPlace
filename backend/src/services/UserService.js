const UserError = require('../exceptions/UsserError');
const User = require('../models/User');
const jwtProvider = require('../utils/jwtProvider');


class UserService {
   

    async findUserProfileByJwt(jwt) {
        const email = jwtProvider.getEmailFromJwt(jwt)
        
        const user = await User.findOne({ email }).populate("addresses");
        if (!user) {
            throw new UserError(`User does not exist with email ${email}`);
        }
        return user;
    }



    async findUserByEmail(email) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new UserException(`User does not exist with email ${email}`);
        }
        return user;
    }

  
}

module.exports = new UserService();
