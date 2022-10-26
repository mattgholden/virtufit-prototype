import React from 'react'

export default function Input({
  id,
  placeholder,
  type,
  onChange,
  value,
  ...props
}) {
  return (
    <>
      <label htmlFor={id}>{placeholder}</label>
      <input id={id} type={type} onChange={onChange} value={value} {...props} />
    </>
  )
}
