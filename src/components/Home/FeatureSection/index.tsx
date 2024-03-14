import React from "react"
import TagButton from "@components/TagButton"

const FeatureSection = () => {
  return (
    <div className="w-full bg-TagBGgray py-12">
      <div className="w-11/12 mx-auto">
        <TagButton text="Features" className="block bg-white mb-4"/>
        <span className="text-3xl font-bold leading-10">Unlock the power of SlasPay</span>
        <p className="text-base mb-4 wi">
          Discover the essence of SlasPay, seamless cross-border transactions, speed, affordability, and security.
          Explore the features that redefine your financial experience
        </p>
        <div className="flex gap-6">
            <div className="drop-shadow-2xl p-6 bg-white rounded-md ">
              <span className="font-medium">Speed and Efficiency Redefined</span>
              <p>Empower your transactions with SlasPay - instant, seamless cross- border payment. No delays, just efficiency and innovation </p>
            </div>
            <div className="drop-shadow-2xl p-6 bg-white rounded-md">
              <span className="font-medium">Speed and Efficiency Redefined</span>
              <p>Empower your transactions with SlasPay - instant, seamless cross- border payment. No delays, just efficiency and innovation </p>
            </div>
            <div className="drop-shadow-2xl p-6 bg-white rounded-md">
              <span className="font-medium">Speed and Efficiency Redefined</span>
              <p>Empower your transactions with SlasPay - instant, seamless cross- border payment. No delays, just efficiency and innovation </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FeatureSection
