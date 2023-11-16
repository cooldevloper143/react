/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useId } from "react";
/* Disable eslint */

const Input = React.forwardRef(function Input(
  { label, type = "text", classname = "", ...props },
  ref
) {
    const id = useId();
  return (
    <div className="w-full">
    {label && <label htmlFor={props.id || useId()} className="block text-sm font-medium text-gray-700">{label}</label>}
    <input
      ref={ref}
      type={type}
      id="{useId()}"
      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${classname}`}
    </div>
  )
});

export default Input;
