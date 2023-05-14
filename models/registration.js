const { Schema } = require("mongoose")

const RegistrationSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String },
    group_size: { type: String, required: true },
    date: { type: String, required: true },
    group_sponsorship: { type: String },
    department: { type: String },
    reunion_tent: { type: String, required: true },
    reunion_tent_description: { type: String },
    resources: { type: String, required: true },
    type_of_grill: { type: String },
    size_of_tent: { type: String },
    type_of_av: { type: String },
    location: { type: String, required: true },
    terms: { type: String, required: true },
    auth: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = RegistrationSchema
