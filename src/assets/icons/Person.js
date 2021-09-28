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
      <path class='a' d='M17.33,4.81c0,3.74-4.26,6.77-5.33,6.77s-5.33-3-5.33-6.77A4.4,4.4,0,0,1,7.82,1.94a5.47,5.47,0,0,1,8.36,0A4.4,4.4,0,0,1,17.33,4.81Z' transform='translate(0)' /><path class='a' d='M0,24a8.94,8.94,0,0,1,4-7.9c1.85-1.35,6.61-2.26,8-2.26s6.13.87,8,2.26A9.16,9.16,0,0,1,24,24' transform='translate(0)' />
    </svg>
  )
})

Person.displayName = 'Person'
Person.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Person
