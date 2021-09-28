import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Edit = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path class='a' d='M6.47,23.17l-5.39.65a.43.43,0,0,1-.5-.5l.64-5.39a1.51,1.51,0,0,1,.43-.84l14-14,5.66,5.65-14,14A1.42,1.42,0,0,1,6.47,23.17Z' transform='translate(-0.58 -0.78)' /><path class='a' d='M17.3,2.83h6a1,1,0,0,1,1,1V5.37a0,0,0,0,1,0,0h-8a0,0,0,0,1,0,0V3.83a1,1,0,0,1,1-1Z' transform='translate(8.27 -13.94) rotate(45)' />
    </svg>
  )
})

Edit.displayName = 'Edit'
Edit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Edit
