import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Target = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <title>Target</title>
      <path class='a' d='M12,2c-.34,0-.67,0-1,0v2a8.36,8.36,0,0,1,2,0v-2C12.67,2,12.34,2,12,2Z' /><path class='a' d='M22,11h-2A8,8,0,0,0,13,4.06V6.67C13,7.4,12.55,8,12,8s-1-.6-1-1.33V4.06A8,8,0,0,0,4.07,11H7a1,1,0,0,1,0,2H4.06A8,8,0,0,0,11,19.94V17a1,1,0,0,1,2,0v6a1,1,0,0,1-2,0V22A10,10,0,0,1,2.05,13H1a1,1,0,0,1,0-2h1a10,10,0,0,1,9-8.95V1.33C11,.6,11.45,0,12,0s1,.6,1,1.33v.72A10,10,0,0,1,22,11Z' /><path class='a' d='M24,12a1,1,0,0,1-1,1H22A10,10,0,0,1,13,22v-2A8,8,0,0,0,19.94,13H17a1,1,0,0,1,0-2h6A1,1,0,0,1,24,12Z' /><circle class='a' cx='12' cy='12' r='1' />
    </svg>
  )
})

Target.displayName = 'Target'
Target.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Target
