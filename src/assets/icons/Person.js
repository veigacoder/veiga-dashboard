import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Person = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={color}
      rest={rest}
    >
      <title>Person</title>
      <path class='a' d='M16,5c0,3.31-3.2,6-4,6S8,8.31,8,5a4.33,4.33,0,0,1,.86-2.54,3.73,3.73,0,0,1,6.28,0A4.33,4.33,0,0,1,16,5Z' transform='translate(-3 -0.74)' /><path class='a' d='M3,22a8.51,8.51,0,0,1,3-7c1.39-1.19,5-2,6-2s4.6.78,6,2a8.7,8.7,0,0,1,3,7' transform='translate(-3 -0.74)' />
    </svg>
  )
})

Person.displayName = 'Person'
Person.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Person
