import React from "react"
import TagButton from "@components/TagButton"
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import { GrCurrency } from "react-icons/gr";

const FeatureSection = () => {
  return (
    <div className="w-full bg-TagBGgray py-12">
      <div className="w-10/12 mx-auto">
        <TagButton text="Features" className="block bg-white mb-4"/>
        <span className="text-3xl font-bold leading-10">Unlock the power of SlasPay</span>
        <p className="text-lg mb-4 wi">
          Discover the essence of SlasPay, seamless cross-border transactions, speed, affordability, and security.
          Explore the features that redefine your financial experience
        </p>
        <div className="flex gap-6">
            <div className="drop-shadow-2xl p-6 bg-white rounded-md ">
              <span className="font-bold flex item-center"> <AiOutlineGlobal className="inline mr-2"/>Global Transactions</span>
              <p>Seamlessly conduct cross-border payments, connecting you to a world of financial possibilities.</p>
            </div>
            <div className="drop-shadow-2xl p-6 bg-white rounded-md">
              <span className="font-bold flex item-center"><GrCurrency className="inline mr-2"/>Stellar Performance</span>
              <p>Experience swift and efficient financial transactions that redefine the speed of payments.  </p>
            </div>
            <div className="drop-shadow-2xl p-6 bg-white rounded-md">
              <span className="font-bold flex item-center"><MdOutlineSecurity className="inline mr-2"/>Ironclad Security</span>
              <p>Trust in our robust security measures to safeguard every Transaction, ensuring your financial peace of mind.  </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FeatureSection
