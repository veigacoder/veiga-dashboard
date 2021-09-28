import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Sun = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path class='a' d='M19.26,9c-.45-1.09.64-3.23-.19-4.06s-3,.26-4.06-.19S13.21,2,12,2,10,4.3,9,4.74s-3.23-.64-4.06.19.26,3-.19,4.06S2,10.79,2,12s2.3,2,2.74,3-.64,3.23.19,4.06,3-.26,4.06.19S10.79,22,12,22s2-2.3,3-2.74,3.23.64,4.06-.19-.26-3,.19-4.06S22,13.21,22,12,19.7,10,19.26,9ZM12,19.14A7.14,7.14,0,1,1,19.14,12,7.14,7.14,0,0,1,12,19.14Z' transform='translate(-2 -2)' /><circle class='a' cx='10' cy='10' r='5.71' />
    </svg>
  )
})

Sun.displayName = 'Sun'
Sun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Sun
