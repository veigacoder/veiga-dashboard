import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Upload = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path class='a' d='M15.05,7.75H13.89V21.91A2,2,0,0,1,12,24h0a2,2,0,0,1-1.88-2.09V7.75H9a1.05,1.05,0,0,1-.81-1.59l3-5.65a.9.9,0,0,1,1.62,0l3,5.65A1.05,1.05,0,0,1,15.05,7.75Z' transform='translate(0 0)' /><path class='a' d='M8,14H8a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V10A2,2,0,0,1,2,8H2a2,2,0,0,1,2,2v2H6A2,2,0,0,1,8,14Z' transform='translate(0 0)' /><path class='a' d='M16,14h0a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2v2H18A2,2,0,0,0,16,14Z' transform='translate(0 0)' />
    </svg>
  )
})

Upload.displayName = 'Upload'
Upload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Upload
