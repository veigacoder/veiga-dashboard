import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Zoom = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d='M15.75,2.7a9.24,9.24,0,1,0,0,13.07A9.26,9.26,0,0,0,15.75,2.7ZM13.88,13.9a6.6,6.6,0,1,1,0-9.33A6.59,6.59,0,0,1,13.88,13.9Z' transform='translate(0.02 0)' /><rect x='18.19' y='16.21' width='2.83' height='6.79' rx='1.41' transform='translate(-8.1 19.6) rotate(-45)' />
    </svg>
  )
})

Zoom.displayName = 'Zoom'
Zoom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Zoom
