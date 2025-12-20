const bcrypt = require("bcrypt");
const User = require("../models/User");

class DataInitializationService {
  async initializeAdminUser() {
 
    if (process.env.NODE_ENV === "production") {
      console.log("Admin initialization skipped in production.");
      return;
    }

    const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

  
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      throw new Error(
        "ADMIN_EMAIL and ADMIN_PASSWORD must be set in environment variables"
      );
    }

    try {
      const adminExists = await User.exists({ email: ADMIN_EMAIL });
      if (adminExists) {
        console.log("Admin user already exists.");
        return;
      }

      const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 12);

      await User.create({
        fullName: "Admin",
        email: ADMIN_EMAIL,
        password: hashedPassword,
        role: "ROLE_ADMIN",
      });

      console.log("Admin user created successfully.");
    } catch (error) {
      console.error("Admin initialization failed:", error.message);
      throw error;
    }
  }
}

module.exports = new DataInitializationService();
