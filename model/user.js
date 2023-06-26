const mongoos = require("mongoose");
const schema = mongoos.Schema;

const userSchema = new schema({
  ip: {
    type: String,
    required: true,
  },
  codes: [
    {
      type: Object,
    },
  ],
});

userSchema.methods.addCode = function (code) {
  let oldCode = this.codes;
  updatedCodes = [...oldCode];
  updatedCodes.push(code);
  this.codes = updatedCodes;
  return this.save();
};

module.exports = mongoos.model("User", userSchema);
