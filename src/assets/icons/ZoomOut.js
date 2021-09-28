import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const ZoomOut = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d='M16.8,10.14a1.34,1.34,0,0,0-1.27,1,6.46,6.46,0,0,1-1.65,2.79A6.6,6.6,0,1,1,11.42,3,1.35,1.35,0,0,0,12.55,3h0A1.33,1.33,0,0,0,12.34.54a9.23,9.23,0,1,0,5.74,11.32,1.34,1.34,0,0,0-1.27-1.72Z' transform='translate(0.02 0)' /><rect x='18.19' y='16.21' width='2.83' height='6.79' rx='1.41' transform='translate(-8.1 19.6) rotate(-45)' /><path d='M15.1,7.06H13.3a.9.9,0,0,1,0-1.8h5.4a.9.9,0,0,1,0,1.8Z' transform='translate(0.02 0)' />
    </svg>
  )
})

ZoomOut.displayName = 'ZoomOut'
ZoomOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ZoomOut
