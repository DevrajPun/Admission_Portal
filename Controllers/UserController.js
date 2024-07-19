const UserModel = require("../models/user");

class UserController {
  static insert = async (req, res) => {
    const { name, email, password, confirm_password, image } = req.body;
    console.log(req.body);
  };
}
module.exports = UserController;
