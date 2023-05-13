const { Registration } = require("../models")

const postTailgateRegistration = async (req, res) => {
  try {
    const registration = await new Registration(req.body)
    await registration.save()
    return res.status(201).json({ registration })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
const getTailgateRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find()
    return res.status(200).json({ registrations })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  postTailgateRegistration,
  getTailgateRegistrations
}
