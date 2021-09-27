import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Icons = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <title>Icons</title>
      <rect class='a' width='12' height='12' rx='2' /><rect class='a' x='15' y='8' width='8' height='8' rx='2' /><rect class='a' x='5' y='18' width='6' height='6' rx='2' />
    </svg>
  )
})

Icons.displayName = 'Icons'
Icons.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Icons
