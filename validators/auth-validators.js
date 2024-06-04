const z = require("zod")

const signupSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "Email must contain atleast 3 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "password must contain atleast 3 characters" }),
});

module.exports = signupSchema;