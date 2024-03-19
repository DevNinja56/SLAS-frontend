import React from "react"

const GoogleSection = () => {
  return (
    <div className=" bg-MobileImageBgColor mt-36 mb-8">
      <div className=" flex w-10/12 mx-auto justify-between">
        <img src="assets/images/Home/mobile.PNG" className="-mt-24 w-2/5" alt="Banner" />
        <div className="py-40 w-6/12">
          <span className="text-2xl font-bold text-white">Download Our App Now</span>
          <div className="flex gap-4 items-center mt-6">
            <img src="assets/images/Home/google.PNG" className="" alt="Banner" />
            <img src="assets/images/Home/app.PNG" className="" alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoogleSection
