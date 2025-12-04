const SellerError = require("../exceptions/SellerError");
const Seller = require("../models/Seller");
const SellerService = require("../services/SellerService");


class SellerController {


    async getSellerProfile(req, res) {
        try {
            const jwt = req.headers.authorization.split(" ")[1];
            const seller = await SellerService.getSellerProfile(jwt);

            res.status(200).json(seller);
        } catch (err) {
            res
                .status(err instanceof SellerError ? 404 : 500)
                .json({ message: err.message });
        }
    }


    async createSeller(req, res) {
        try {
            const newSeller = await SellerService.createSeller(req.body);


            return res
                .status(201)
                .json({
                    message: "Seller created successfully, verification email sent.",
                });

        } catch (err) {
            res
                .status(err instanceof SellerError ? 400 : 500)
                .json({ error: err.message });
        }
    }


    async getAllSellers(req, res) {
        try {
            const { status } = req.query;
            const sellers = await SellerService.getAllSellers(status);
            res.status(200).json(sellers);
        } catch (err) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }


    async updateSeller(req, res) {
        try {
            const seller = await req.seller;
            const updatedSeller = await SellerService.updateSeller(
                seller,
                req.body
            );
            res.status(200).json(updatedSeller);
        } catch (err) {
            res
                .status(err instanceof SellerError ? 404 : 500)
                .json({ message: err.message });
        }
    }

    async deleteSeller(req, res) {
        try {
            await SellerService.deleteSeller(req.params.id);
            res.status(204).json({ message: "seller deleted.." }).send();
        } catch (err) {
            res
                .status(err instanceof SellerError ? 404 : 500)
                .json({ message: err.message });
        }
    }

    async updateSellerAccountStatus(req, res) {
        try {
            const updatedSeller = await SellerService.updateSellerAccountStatus(
                req.params.id,
                req.params.status
            );
            res.status(200).json(updatedSeller);
        } catch (err) {
            res
                .status(err instanceof SellerError ? 404 : 500)
                .json({ message: err.message });
        }
    }

    async verifyLoginOtp(req, res) {
        try {
            const { otp, email } = req.body;

            const seller = await Seller.findOne({ email });


            return res.status(200).json(authResponse);
        } catch (err) {
            res
                .status(err instanceof SellerError ? 400 : 500)
                .json({ message: err.message });
        }
    }



}

module.exports = new SellerController();