import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const ZoomIn = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <title>ZoomIn</title>
      <path d='M16.8,10.14a1.34,1.34,0,0,0-1.27,1,6.46,6.46,0,0,1-1.65,2.79A6.6,6.6,0,1,1,11.42,3,1.35,1.35,0,0,0,12.55,3h0A1.33,1.33,0,0,0,12.34.54a9.23,9.23,0,1,0,5.74,11.32,1.34,1.34,0,0,0-1.27-1.72Z' transform='translate(0.02 0)' /><rect x='18.19' y='16.21' width='2.83' height='6.79' rx='1.41' transform='translate(-8.1 19.6) rotate(-45)' /><path d='M19.8,5a.9.9,0,0,1-.9.9H17.1v2a.9.9,0,1,1-1.8,0v-2H13.5a.9.9,0,0,1,0-1.8h1.8V2.5a.9.9,0,1,1,1.8,0V4.12h1.8A.9.9,0,0,1,19.8,5Z' transform='translate(0.02 0)' />
    </svg>
  )
})

ZoomIn.displayName = 'ZoomIn'
ZoomIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ZoomIn
