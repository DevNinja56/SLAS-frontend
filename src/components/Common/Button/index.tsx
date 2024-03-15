import React from "react"
interface propTypes {
  text: string
  className?: string
}

const Button = ({ text, className }: propTypes) => {
  return <button  type="submit" className={`rounded-md ${className}`}>{text}</button>
}

export default Button
