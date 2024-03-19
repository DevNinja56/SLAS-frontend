/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        GreenBgColor: "#2CA283",
        OrangeTextColor: "#FF986D",
        TagBGgray: "#F8F8F8",
        DashboardBgColor: "#F6F6F6",
        BGGrey: "#FAFAFA",
        SearchBorderColor: "#4BB095",
        FooterBgColor: "#303030",
        SubmitButtonColor : "#0A9800",
        FormBGColor : "#EBF6FC",
        LightGrayColor : "#f9f9f9",
      },
      lineHeight: {
        headingLineHeight: "2.5rem"
      },
      width: {
        PhoneFiledWidth: "27.5rem"
      }
    }
  },
  plugins: []
}
