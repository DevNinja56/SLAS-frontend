import React from "react"
import InputBox from "@components/Common/Input"
import Button from "@components/Common/Button"

interface propTypes {
  onButtonClick: any
}

const ConversionAmount = ({ onButtonClick }: propTypes) => {
  return (
    <div className="flex flex-col gap-2 w-4/12">
      <div className="flex flex-col gap-4 bg-purple-200 rounded-lg py-10 px-2">
        <p className="flex justify-between">
          <span className="font-medium"> Conversion Amount</span>
        </p>
        <InputBox type="text" placeholder="1000" />
        <InputBox type="text" placeholder="87000" />
        <div className="flex gap-3">
          <Button text="CLEAR" className="bg-gray-500 rounded-full font-bold px-4 py-2" />
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
