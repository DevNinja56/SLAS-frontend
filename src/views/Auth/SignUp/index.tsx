import React, { useState } from "react"
import Heading from "@components/Common/Heading"
import InputBox from "@components/Common/Input"
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"
import Button from "@components/Common/Button"
import { NavLink } from "react-router-dom"
import { URL } from "@configs/index"
import { useForm } from "react-hook-form"
import { isValidPhoneNumber } from "libphonenumber-js"
import './../../../styles/style.css'

interface formType {
  email?: string
  mobile_number?: string
  password: string
  confirm_password: string
}

const SignUp = () => {
  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [error, setError] = useState("")

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked)
    setError("")
  }

  const handlePhoneChange = (value: any) => {
    setPhone(value)
    if (value.length > 8 && !isValidPhoneNumber(value)) {
      setPhoneError("Invalid phone number")
    } else {
      setPhoneError("")
      setValue("mobile_number", phone)
    }
  }

  const {
    register,
    handleSubmit: fromSubmit,
    formState: { errors },
    setValue,
    reset,
    watch
  } = useForm<formType>()
  const password = watch("password")

  const handleSubmit = ({ mobile_number, email, password, ...body }: formType) => {
    if (!isChecked) {
      setError("Please agree to the terms and conditions.")
    } else {
      console.log("Form submitted successfully")
    }
  }

  return (
    <div className="w-full">
      <div className="bg-FormBGColor w-2/3 mx-auto my-12 p-8 rounded-3xl">
        <Heading text="Let's get you started!" className="text-center" />
        <p className="text-center my-4">Enter you details to get started</p>
        <div className="flex flex-col gap-8">
          <form onSubmit={fromSubmit(handleSubmit)} className="flex flex-col gap-4">
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-GreenBgColor font-medium">Mobile Number</label>
                <PhoneInput
                  inputStyle={{ padding: "25px" }}
                  inputClassName={"w-PhoneFiledWidth"}
                  defaultCountry="pk"
                  value={phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "phone",
                    required: true
                  }}
                />
                {phoneError && <span className="text-red-500">{phoneError}</span>}
              </div>
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
                customInputClass="px-2 py-[10px] text-[15px] rounded-md outline-none placeholder:text-md w-full"
              />
            </div>
            <div className="flex gap-8">
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
                customInputClass="px-2 py-[10px] text-[15px] rounded-md outline-none placeholder:text-md w-full"
              />
              <InputBox
                {...register("confirm_password", {
                  required: "Confirm Password is required",
                  validate: (value) => value === password || "The passwords do not match"
                })}
                error={errors.confirm_password?.message}
                placeholder="Enter Your Confirm Password"
                title="Confirm Password"
                autoComplete="off"
                type="password"
                className="p-0"
                customInputClass="px-2 py-[10px] text-[15px] rounded-md outline-none placeholder:text-md w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="agreement"
                className="transform scale-150"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <p className="text-sm pt-4">
                I have read and agreed to the Terms, Conditions and KYC Police and confirm that I am opening this
                account for my own personal use, and not for use by a third party.{" "}
              </p>
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <Button text="CONTINUE" className="bg-GreenBgColor text-white w-1/5 mx-80 px-4 py-2 rounded-md font-medium" />
            <p className="text-center font-medium">
              Do you have an account?{" "}
              <NavLink to={URL.SIGN_IN} className="text-OrangeTextColor">
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
