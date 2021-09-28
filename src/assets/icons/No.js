import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const No = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <rect class='a' x='-4.31' y='10.42' width='32.63' height='3.17' rx='1.58' transform='translate(12 28.97) rotate(-135)' /><rect class='a' x='-4.31' y='10.42' width='32.63' height='3.17' rx='1.58' transform='translate(-4.97 12) rotate(-45)' />
    </svg>
  )
})

No.displayName = 'No'
No.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default No
