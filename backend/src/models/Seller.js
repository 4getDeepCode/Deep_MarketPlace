const mongoose = require("mongoose")
const UserRoles = require("../domain/UserRoll")
const AccountStatus = require("../domain/AccountStatus")


const sellerSchema = new mongoose.Schema({
    
    sellerName: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    businessDetails: {
        businessName: {
            type: String,

        },
        businessEmail: {
            type: String,

        },
        businessMobile: {
            type: String,

        },
        businessAddress: {
            type: String,

        },

    },

    bankDetails: {
        accountNumber: {
            type: String,
        },
        accountHolderName: {
            type: String,
        },
        bankName: {
            type: String,
        },
        ifscCode: {
            type: String,
        },

    },

    pickupAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },

    GSTIN: {
        type: String,
        required: true,
        trim: true,
        match: /^[0-9A-Z]{15}$/,
    },

    role: {
        type: String,
        enum: [UserRoles.ADMIN, UserRoles.CUSTOMER, UserRoles.SELLER],
        default: UserRoles.SELLER
    },

    isEmailVerified: {
        type: Boolean,
        default: false
    },

    accountStatus: {
        type: String,
        enum: [
            AccountStatus.PENDING_VERIFICATION,
            AccountStatus.ACTIVE,
            AccountStatus.SUSPENDED,
            AccountStatus.DEACTIVATED,
            AccountStatus.BANNED,
            AccountStatus.CLOSED
        ],
        default: AccountStatus.PENDING_VERIFICATION

    }

}, {
    timestamps: true
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;