const { model } = require("mongoose")

const RegistrationSchema = require("./registration")
const Registration = model("Registration", RegistrationSchema)

module.exports = {
  Registration
}
