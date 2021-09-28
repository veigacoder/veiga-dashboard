import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Check = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      name='Check'
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={color}
      rest={rest}
    >
      <path class='a' d='M23.6.39a1.33,1.33,0,0,1,0,1.87L6.92,18.94l-.8.8a1.33,1.33,0,0,1-1.87,0l-.94-.94-3-3a1.12,1.12,0,0,1,0-1.58h0a1.32,1.32,0,0,1,1.88,0l1.9,1.89a1.32,1.32,0,0,0,1.87,0L21.72.39a1.33,1.33,0,0,1,1.88,0Z' transform='translate(-0.02)' />
    </svg>
  )
})

Check.displayName = 'Check'
Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Check
