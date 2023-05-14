const { Schema } = require("mongoose")

const RegistrationSchema = new Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    phone: { type: String },
    email: { type: String },
    name: { type: String },
    group_size: { type: String },
    date: { type: String },
    group_sponsorship: { type: String },
    department: { type: String },
    reunion_tent: { type: String },
    reunion_tent_description: { type: String },
    resources: { type: String },
    type_of_grill: { type: String },
    size_of_tent: { type: String },
    type_of_av: { type: String },
    terms: { type: String },
  },
  { timestamps: true }
)

module.exports = RegistrationSchema
