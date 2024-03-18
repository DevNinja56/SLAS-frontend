/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        GreenBgColor: "#2CA283",
        OrangeTextColor: "#FF986D",
        TagBGgray: "#F8F8F8",
        BGGrey: "#FAFAFA",
        SearchBorderColor: "#4BB095",
        FooterBgColor: "#303030",
        SubmitButtonColor : "#0A9800",
        FormBGColor : "#EBF6FC"
      },
      lineHeight: {
        headingLineHeight: "2.5rem"
      }
    }
  },
  plugins: []
}
