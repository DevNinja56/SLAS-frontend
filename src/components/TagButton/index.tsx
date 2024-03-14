import React from 'react'
interface propTypes {
    text: string
    className?: string
  }

const TagButton = ({ text, className }: propTypes) => {
  return <button className={`rounded-md ${className} bg-TagBGgray text-OrangeTextColor p-2`}>{text}</button>
}

export default TagButton