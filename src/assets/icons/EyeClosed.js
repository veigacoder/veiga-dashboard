import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const EyeClosed = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 16'
      fill={color}
      rest={rest}
    >
      <title>EyeClosed</title>
      <path class='a' d='M12,4C6,4,0,12,0,12a33.36,33.36,0,0,0,24,0S16,4,12,4Z' transform='translate(0 -4)' /><path class='a' d='M12,20C5.53,20,.42,12.62.21,12.31L0,12l.21-.31C.42,11.38,5.53,4,12,4s11.58,7.38,11.79,7.69L24,12l-.21.31C23.58,12.62,18.47,20,12,20ZM2.72,12c.89,1.19,4.76,6,9.28,6s8.39-4.81,9.28-6c-.89-1.19-4.76-6-9.28-6S3.61,10.81,2.72,12Z' transform='translate(0 -4)' />
    </svg>
  )
})

EyeClosed.displayName = 'EyeClosed'
EyeClosed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default EyeClosed
