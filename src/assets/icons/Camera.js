import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Camera = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path class='a' d='M18,2h0a2,2,0,0,0-2-2H8A2,2,0,0,0,6,2H6A2,2,0,0,1,4,4H1.88A1.83,1.83,0,0,0,0,6c0,.88,0,2.07,0,2.07V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2H20A2,2,0,0,1,18,2ZM9,2h6a1,1,0,0,1,0,2H9A1,1,0,0,1,9,2Zm9.87,14.37a7.63,7.63,0,0,1-5.5,5.5,7,7,0,0,1-8.24-8.24,7.63,7.63,0,0,1,5.5-5.5A7,7,0,0,1,18.87,16.37Z' transform='translate(0)' /><circle class='a' cx='12' cy='15' r='4' />
    </svg>
  )
})

Camera.displayName = 'Camera'
Camera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Camera
