import React, { useState } from "react"
import InputBox from "@components/Common/Input"
import Button from "@components/Common/Button"
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"

interface propTypes {
  onButtonClick: any
}

const ConversionAmount = ({ onButtonClick }: propTypes) => {
  const [phone, setPhone] = useState("")
  return (
    <div className="flex flex-col gap-2 w-4/12">
      <div className="flex flex-col gap-4 bg-purple-200 rounded-lg py-10 px-2">
        <p className="flex justify-between">
          <span className="font-medium"> Conversion Amount</span>
        </p>
        <PhoneInput
          defaultCountry="ua"
          inputClassName={"w-CountryPhoneFiledWidth"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
        <PhoneInput
          defaultCountry="ua"
          inputClassName={"w-CountryPhoneFiledWidth"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
        <div className="flex gap-3">
          <Button text="CLEAR" className="bg-slate-400 rounded-full font-bold px-4 py-2" />
          <Button
            text="CONTINUE"
            onClick={onButtonClick}
            className="bg-green-500 rounded-full text-white font-bold px-4 py-2"
          />
        </div>
      </div>
    </div>
  )
}

export default ConversionAmount
