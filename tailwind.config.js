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
        SubmitButtonColor : "#0A9800"
      },
      lineHeight: {
        headingLineHeight: "3rem"
      }
    }
  },
  plugins: []
}
