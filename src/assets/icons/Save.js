import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Save = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path class='a' d='M23.54,5.44,19.6.72A2,2,0,0,0,18.06,0H2A2,2,0,0,0,0,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6.72A2,2,0,0,0,23.54,5.44ZM3,7.38V3H5V7H8V3h6V7.38c0,.34-.45.62-1,.62H4C3.45,8,3,7.72,3,7.38Zm12,8.83a4.51,4.51,0,1,1-5.16-5.16A4.52,4.52,0,0,1,15,16.21Z' /><rect class='a' x='9.51' y='15' width='2' height='2' rx='0.51' />
    </svg>
  )
})

Save.displayName = 'Save'
Save.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Save
