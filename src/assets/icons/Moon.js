import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Moon = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <title>Moon</title>
      <path class='a' d='M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,17A7,7,0,0,1,12,5a6.89,6.89,0,0,1,3.66,1A4.78,4.78,0,0,0,15,6a6,6,0,0,0,0,12,4.78,4.78,0,0,0,.66,0A6.89,6.89,0,0,1,12,19Z' transform='translate(-2 -2)' />
    </svg>
  )
})

Moon.displayName = 'Moon'
Moon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Moon
