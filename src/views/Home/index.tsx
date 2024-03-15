import React from "react"
import Button from "@components/Common/Button"
import CountBar from "@components/CountBar"
import TagButton from "@components/TagButton"
import FeatureSection from "@components/Home/FeatureSection"
import ExploreSection from "@components/Home/ExploreSction"
import AccordionFAQ from "@components/FAQs/AccordionFAQ"

const Home = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-10/12 mx-auto flex gap-24">
          <img src="assets/images/Home/Capture.PNG" className="w-3/5" alt="Banner" />
          <div className="flex flex-col gap-4 pt-8">
            <span className="text-4xl leading-headingLineHeight w-3/5 font-semibold">
              Experience a payment solution for seamless property transactions across continents.
            </span>
            <p className="w-4/6 text-sm font-medium leading-6">
              <span className="font-bold"> Welcome to SlasPay! </span>Sign up, download the app, and experience seamless
              cross-border transactions. Redefine the way you transact -
              <span className="text-OrangeTextColor font-medium"> START TODAY!</span>
            </p>
            <Button text="Get Started" className="bg-GreenBgColor p-4 font-xl font-medium text-white w-1/5 mt-12" />
          </div>
        </div>
        <CountBar />
      </div>
      <div className="w-10/12 mx-auto">
        <TagButton text="About Us" className="my-12" />
        <div className="flex w-full gap-7 mt-6 mb-12">
          <div className="flex flex-col w-6/12 gap-3">
            <span className="font-bold text-xl leading-headingLineHeight">
              Revolutionize Global Transactions With Slaspay! Speed, Security, And Simplicity In One Fintech Solution.
            </span>
            <span className="font-bold text-xl">Welcome To The Future - This is Slaspay !</span>
            <img src="assets/images/Home/videoPic.PNG" alt="assetsCapture" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="drop-shadow-2xl p-6 bg-white w-4/5 mx-auto rounded-md hover:border-l-8 hover:border-GreenBgColor hover:scale-x-110 transition duration-300 ease-in-out">
              <span className="font-bold leading-8">Speed and Efficiency Redefined</span>
              <p className="text-sm">
                Empower your transactions with SlasPay - instant, seamless cross- border payment. No delays, just
                efficiency and innovation{" "}
              </p>
            </div>
            <div className="drop-shadow-2xl p-6 bg-white w-4/5 mx-auto rounded-md hover:border-l-8 hover:border-GreenBgColor hover:scale-x-110 transition duration-300 ease-in-out">
              <span className="font-bold  leading-8">Affordable Access Anytime, Anywhere</span>
              <p className="text-sm">
                Gain financial freedom with SlasPay - affordable, mobile-friendly, and always accessible. Your finance,
                your way!{" "}
              </p>
            </div>
            <div className="drop-shadow-2xl p-6 bg-white w-4/5 mx-auto rounded-md hover:border-l-8 hover:border-GreenBgColor hover:scale-x-110 transition duration-300 ease-in-out">
              <span className="font-bold leading-8">Secure and Liberating Financial Experience</span>
              <p className="text-sm">
                SlasPay: Ensuring your financial security and freedom with cutting - edge features for hassie-free
                transactions.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <FeatureSection />
      <ExploreSection />
      <div className="w-full">
        <div className="w-10/12 mx-auto">
          <TagButton text="FAQ" className="block mx-auto" />
          <span className="text-xl font-semibold ">
            Discover worry-free transactions with SlasPay FAQs - yourr guide to a seamless financial journey.
          </span>
          <AccordionFAQ />
        </div>
      </div>
    </>
  )
}

export default Home
