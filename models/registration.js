const { Schema } = require("mongoose")

const RegistrationSchema = new Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    phone: { type: String },
    email: { type: String },
    name: { type: String },
    group_size: { type: Number },
    date: { type: Date },
    group_sponsorship: { type: String },
    department: { type: String },
    reunion_tent: { type: Boolean },
    reunion_tent_description: { type: String },
    resources: [{ type: String }],
    type_of_grill: { type: String },
    size_of_tent: { type: String },
    type_of_av: { type: String },
    terms: { type: Boolean },
  },
  { timestamps: true }
)

module.exports = RegistrationSchema
