import React from "react"
interface propTypes {
  text: string
  className?: string
  icon?: React.ReactNode; 
}

const Button = ({ text, className, icon }: propTypes) => {
  return <button  type="submit" className={` ${className}`}>{text} {icon}</button>
}

export default Button
