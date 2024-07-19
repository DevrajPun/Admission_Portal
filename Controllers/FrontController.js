class FrontController {
  static home = async (req, res) => {
    try {
      res.render("home");
    } catch (error) {
      console.log(error);
    }
  };
  static courses = async (req, res) => {
    try {
      res.render("courses");
    } catch (error) {
      console.log(error);
    }
  };
  static contact = async (req, res) => {
    try {
      res.render("contact");
    } catch (error) {
      console.log(error);
    }
  };
  static teachers = async (req, res) => {
    try {
      res.render("teachers");
    } catch (error) {
      console.log(error);
    }
  };
  static signUp = async (req, res) => {
    try {
      res.render("sign_up");
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = FrontController;
