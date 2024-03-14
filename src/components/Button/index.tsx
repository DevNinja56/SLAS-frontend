import React from "react"
interface propTypes {
  text: string
  className?: string
}

const Button = ({ text, className }: propTypes) => {
  return <button className={`rounded-md ${className}`}>{text}</button>
}

export default Button
