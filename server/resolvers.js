const User = require('./model/userSchema.js');

const resolvers = {
  Query: {
    getUsers: async (_, { id }) => {
      return await User.findById(id);
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        const { name, email, password } = input;
        if (!name) {
          throw new Error('Name is required.');
        }
        if (!email) {
          throw new Error('Email is required.');
        }
        if (!password) {
          throw new Error('Password is required.');
        }

        

        const newUser = new User({ name, email, password });
        return await newUser.save();
      } catch (err) {
        throw new Error(err.message);
      }
    },
    changePass: async (_, { id, password }) => {
      try {
        const user = await User.findByIdAndUpdate(id, { password }, { new: true });
        if (!user) {
          throw new Error('User not found.');
        }
        return user;
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
  User: {
    email: (parent) => parent.email || '',
    name: (parent) => parent.name || '',
    password: (parent) => parent.password || ''
  },
};

module.exports = resolvers;