import React from "react"
import CurrencyLineChart from "@components/LineChart"
import { GoDotFill } from "react-icons/go"
import { IoIosArrowDown } from "react-icons/io"
import { SlCalender } from "react-icons/sl"
import CurrencyChange from "@components/Dashboard/CurrenecyChange"

const currencyData = [
  { month: "Jan", currency1: 500, currency2: 600 },
  { month: "Feb", currency1: 550, currency2: 620 },
  { month: "Mar", currency1: 600, currency2: 640 },
  { month: "Apr", currency1: 620, currency2: 670 },
  { month: "May", currency1: 650, currency2: 690 },
  { month: "Jun", currency1: 700, currency2: 720 },
  { month: "Jul", currency1: 750, currency2: 740 }
]

const CurrencyGraph = () => {
  return (
    <div>
      <div className="flex gap-4 p-4">
        <CurrencyChange />
        <div className="flex p-2 flex-col gap-4 rounded-lg w-8/12 border border-gray-200">
          <div className="flex justify-between">
            <span className="text-xl font-medium">Currency Tracking </span>
          </div>
          <div className="">
            <CurrencyLineChart data={currencyData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrencyGraph
