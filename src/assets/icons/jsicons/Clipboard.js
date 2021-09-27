import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Clipboard = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      name='Clipboard'
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={color}
      rest={rest}
    >
      <title>Clipboard</title>
      <path class='a' d='M14.85,2a1,1,0,0,1-.95-.63,2,2,0,0,0-3.8,0A1,1,0,0,1,9.15,2H3A1,1,0,0,0,2,3V23a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1ZM12,1a1,1,0,1,1-1,1A1,1,0,0,1,12,1ZM4,21V5A1,1,0,0,1,5,4H8A1,1,0,0,1,9,5H9a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1h0a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,1-1,1H5A1,1,0,0,1,4,21Z' transform='translate(-2)' /><rect class='a' x='4' y='9' width='12' height='2' rx='1' /><rect class='a' x='4' y='13' width='12' height='2' rx='1' /><rect class='a' x='4' y='17' width='8' height='2' rx='1' />
    </svg>
  )
})

Clipboard.displayName = 'Clipboard'
Clipboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Clipboard
