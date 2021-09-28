import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Dashboard = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <rect class='a' width='11' height='15' rx='2' /><path class='a' d='M2,18.08H8a2,2,0,0,1,2,2V24a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V20.08A2,2,0,0,1,2,18.08Z' /><rect class='a' x='13' y='9' width='11' height='15' rx='2' transform='translate(37 33) rotate(180)' /><path class='a' d='M16,0h6a2,2,0,0,1,2,2V7a0,0,0,0,1,0,0H14a0,0,0,0,1,0,0V2A2,2,0,0,1,16,0Z' transform='translate(38 7) rotate(180)' />
    </svg>
  )
})

Dashboard.displayName = 'Dashboard'
Dashboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Dashboard
