import React from "react"
import Button from "@components/Common/Button"

const ExploreSection = () => {
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto flex gap-24">
        <div className="flex flex-col gap-4 pt-8">
          <span className="text-4xl leading-headingLineHeight w-3/5 font-semibold">
            Explore our current job openings and start your journey
          </span>
          <p className="w-4/6 text-sm font-medium leading-6">
            Are you ready to embark on a fulfilling career journey? at <span className="font-medium">Slas</span>
            <span className="text-OrangeTextColor font-medium">Pay</span>, we believe in fostering talent, creativity, and innovation. Join our dynamic team, where your skills are valued
          </p>
          <Button text="Join Us" className="bg-GreenBgColor p-4 font-xl font-medium text-white w-1/5 mt-12" />
        </div>
        <img src="assets/images/Home/explore.PNG" className="w-3/5" alt="Banner" />
      </div>
    </div>
  )
}

export default ExploreSection
