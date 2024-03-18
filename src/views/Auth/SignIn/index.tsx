import React from "react"
import InputBox from "@components/Common/Input"
import { useForm } from "react-hook-form"
import Heading from "@components/Common/Heading"
import { NavLink } from "react-router-dom"
import { URL } from "@configs/index"
import Button from "@components/Common/Button"

interface formType {
  email: string
  password: string
}
const SignIn = () => {
  const {
    register,
    handleSubmit: fromSubmit,
    formState: { errors },
    setValue,
    reset,
    watch
  } = useForm<formType>()

  const handleSubmit = ({ email, password }: formType) => {
    console.log("form")
  }

  return (
    <div className="w-full">
      <div className="flex w-9/12 mx-auto gap-12">
        <div className="bg-FormBGColor p-8 rounded-md w-2/4">
          <Heading text="Hi, Welcome Back!" />
          <p>Enter you details to Login</p>
          <form className="flex flex-col gap-5" onSubmit={fromSubmit(handleSubmit)}>
            <InputBox
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format"
                }
              })}
              placeholder="Enter Your Email ID"
              error={errors.email?.message}
              title="Email"
              type="email"
              autoComplete="off"
              className="p-0"
              customInputClass="px-2 py-[5px] text-[15px] rounded-md outline-none placeholder:text-md w-full"
            />
            <InputBox
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long"
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                }
              })}
              error={errors.password?.message}
              placeholder="Enter Your Password"
              title="Password"
              autoComplete="off"
              className="p-0"
              type="password"
              customInputClass="px-2 py-[5px] text-[15px] rounded-md outline-none placeholder:text-md w-full"
            />
            <NavLink to={URL.SIGN_IN} className="text-OrangeTextColor">
              Forgot Password?
            </NavLink>
            <Button text="LOGIN" className="bg-GreenBgColor text-white w-1/5 mx-40 px-4 py-2" />
            <p className="text-center font-medium mt-4">
              Are you a new user?{" "}
              <NavLink to={URL.SIGN_UP} className="text-OrangeTextColor">
                Register
              </NavLink>
            </p>
          </form>
        </div>
        <div>
          <img src="assets/images/Home/loginpage.PNG" alt="Banner" />
        </div>
      </div>
    </div>
  )
}

export default SignIn
