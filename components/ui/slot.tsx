import React from "react"

interface SlotProps extends React.HTMLAttributes<HTMLElement> { }

const Slot = ({ children, ...props }: SlotProps) => {
  return React.isValidElement(children)
    ? React.cloneElement(children, props)
    : null
}

export { Slot }
