import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const CameraRemove = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path class='a' d='M23,13a6.87,6.87,0,0,1-3.95,2,8.06,8.06,0,0,1-.13,1.45,7.63,7.63,0,0,1-5.5,5.5,7,7,0,0,1-8.24-8.24,7.63,7.63,0,0,1,5.5-5.5L11,8.08V8a6.89,6.89,0,0,1,1.26-4H9A1,1,0,0,1,9,2h5.4a6.9,6.9,0,0,1,3.34-1A2,2,0,0,0,16,0H8A2,2,0,0,0,6,2a2,2,0,0,1-.59,1.41A2,2,0,0,1,4,4H1.88A1.83,1.83,0,0,0,0,6c0,.88,0,2.07,0,2.07V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V11.6A6.89,6.89,0,0,1,23,13Z' transform='translate(0)' /><path class='a' d='M16,15a4,4,0,1,1-4.31-4A7,7,0,0,0,16,14.71,2.81,2.81,0,0,1,16,15Z' transform='translate(0)' /><path class='a' d='M19.25,6.75h2.5a1.25,1.25,0,0,1,0,2.5h-7.5a1.25,1.25,0,0,1,0-2.5h2.5' transform='translate(0)' />
    </svg>
  )
})

CameraRemove.displayName = 'CameraRemove'
CameraRemove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default CameraRemove
