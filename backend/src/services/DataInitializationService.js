
const bcrypt = require('bcrypt');
const User = require('../models/User');

class DataInitializationService {
  async initializeAdminUser() {
    const adminEmail = 'codewithzosh@gmail.com';
    const adminPassword = 'codewithzosh';

    try {
  
      const adminExists = await User.findOne({ email: adminEmail });

      if (!adminExists) {
     
        const hashedPassword = await bcrypt.hash(adminPassword, 10);

        const adminUser = new User({
          fullName: 'Zosh',
          email: adminEmail,
          password: hashedPassword,
          role: 'ROLE_ADMIN',
        });

        await adminUser.save();
        console.log('Admin user created successfully!');
      } else {
        console.log('Admin user already exists.');
      }
    } catch (error) {
      console.error('Error during admin initialization:', error);
    }
  }
}

module.exports = new DataInitializationService();
