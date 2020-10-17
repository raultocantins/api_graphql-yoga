const User = require("./User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
module.exports = {
  Query: {
    users: () => User.find(),
    user: (root, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: function (root, { name, email, password }) {
      const hash = bcrypt.hashSync(password, salt);
      return User.create({ name, email, password: hash });
    },
  },
};
