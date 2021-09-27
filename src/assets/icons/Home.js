import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Home = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <title>Home</title>
      <path class='a' d='M2.63,12V23a1,1,0,0,0,1,1H9.92V18.3a.29.29,0,0,1,.3-.3h3.56a.29.29,0,0,1,.3.3V24h6.29a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H3.63A1,1,0,0,0,2.63,12Z' transform='translate(0 -0.11)' /><path class='a' d='M.1,9.53,11.79.18a.33.33,0,0,1,.42,0L23.9,9.53c.21.16.07.47-.21.47H.31C0,10-.11,9.69.1,9.53Z' transform='translate(0 -0.11)' /><path class='a' d='M20.29,2.89h.08a1,1,0,0,1,1,1v5a0,0,0,0,1,0,0H19.29a0,0,0,0,1,0,0v-5A1,1,0,0,1,20.29,2.89Z' />
    </svg>
  )
})

Home.displayName = 'Home'
Home.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Home
