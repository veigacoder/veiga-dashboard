import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Heart = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 20.36'
      fill={color}
      rest={rest}
    >
      <path class='a' d='M2,8.77V9a.49.49,0,0,1,0-.12A.53.53,0,0,1,2,8.77Z' transform='translate(0 -2.32)' /><path class='b' d='M24,8.48a6.15,6.15,0,0,1-1.81,4.37l-1.8,1.82-6.87,6.9c-.46.46-.91,1.11-1.53,1.11s-1.07-.65-1.53-1.11L3.6,14.67,1.79,12.85a6.19,6.19,0,0,1,0-8.71,6.07,6.07,0,0,1,8.67,0L12,5.68l1.53-1.54A6.15,6.15,0,0,1,24,8.48Z' transform='translate(0 -2.32)' />
    </svg>
  )
})

Heart.displayName = 'Heart'
Heart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Heart
