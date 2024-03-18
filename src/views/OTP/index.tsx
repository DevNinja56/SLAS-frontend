import React, { useState } from "react"
import Heading from "@components/Common/Heading"
import OtpInput from "react-otp-input"
import Button from "@components/Common/Button"

const OTP = () => {
  const [otp, setOtp] = useState("")
  return (
    <div className="w-full">
      <div className="bg-FormBGColor w-2/4 mx-auto my-12 p-8 rounded-md">
        <Heading text="Please Enter OTP" className="text-center" />
        <form className="flex flex-col gap-5">
          <div>
            <p className="text-center">We sent an OTP to your mobile number</p>
            <p className="text-center text-OrangeTextColor">435XXXXX67</p>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} className="w-12 h-12"/>}
            />
          </div>
          <div>
            <p className="text-center">We sent an OTP to your Email ID</p>
            <p className="text-center text-OrangeTextColor">Indrahmz@gmail.com</p>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props}  className="w-12 h-12"/>}
            />
          </div>
          <Button text="CONTINUE" className="bg-GreenBgColor text-white w-1/5 mx-40 px-4 py-2" />
        </form>
      </div>
    </div>
  )
}

export default OTP
