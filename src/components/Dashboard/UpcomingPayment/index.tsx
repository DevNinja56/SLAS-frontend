import React from "react"
import Button from "@components/Common/Button"

const UpcomingPayment = () => {
  return (
    <div className="flex flex-col gap-4 bg-DashboardBgColor rounded">
      <span className="text-xl text-semibold">Upcoming Payments</span>
      <div className="flex gap-6 p-4">
        <div className="flex flex-col gap-4 bg-white border border-gray-300 rounded py-4 px-8 text-center">
          <span className="text-OrangeTextColor">Credit Card Bill</span>
          <span className="text-GreenBgColor">$580</span>
          <Button text="PAY NOW" className="bg-green-500  text-white p-1 rounded-full" />
        </div>
        <div className="flex flex-col gap-4 bg-white border border-gray-300 rounded py-4 px-8  text-center">
          <span className="text-OrangeTextColor">Electricity Bill</span>
          <span className="text-GreenBgColor">$780</span>
          <Button text="PAY NOW" className="bg-green-500  text-white p-1 rounded-full" />
        </div>
        <div className="flex flex-col gap-4 bg-white border border-gray-300 rounded py-4 px-8  text-center">
          <span className="text-OrangeTextColor">Mobile Bill</span>
          <span className="text-GreenBgColor">$580</span>
          <Button text="PAY NOW" className="bg-green-500  text-white rounded-full p-1" />
        </div>
      </div>
    </div>
  )
}

export default UpcomingPayment
