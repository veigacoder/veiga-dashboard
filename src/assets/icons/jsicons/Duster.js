import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Duster = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <title>Duster</title>
      <path class='a' d='M6,.3h.14a1,1,0,0,1,1,1V9.1a0,0,0,0,1,0,0H5a0,0,0,0,1,0,0V1.3a1,1,0,0,1,1-1Z' transform='translate(-4.51 3.81) rotate(-38.46)' /><path class='a' d='M7.11,8.39h6.72a2,2,0,0,1,2,2v1.22a0,0,0,0,1,0,0H5.11a0,0,0,0,1,0,0V10.39a2,2,0,0,1,2-2Z' transform='translate(-6.85 7.69) rotate(-38.46)' /><path class='a' d='M13.11,23.65a45,45,0,0,0-5.17-8.22l8.4-6.67s4.8,6.05,6.84,6.89' transform='translate(-2.9 -0.99)' />
    </svg>
  )
})

Duster.displayName = 'Duster'
Duster.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Duster
