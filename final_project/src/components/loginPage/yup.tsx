import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().min(3).max(25).required("Please enter your name"),
  password: Yup.string()
    .min(5)
    .matches(/[@$!%*?&]/, "Must contain at least one special character")
    .matches(/[0-9]/, "Must contain at least one number")
    .required("Please enter password"),
});
