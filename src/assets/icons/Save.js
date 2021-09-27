import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Save = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <title>Save</title>
      <path class='a' d='M23,24H1a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0H18.53a1,1,0,0,1,.77.36l4.47,5.36a1,1,0,0,1,.23.64V23A1,1,0,0,1,23,24ZM3,22H21a1,1,0,0,0,1-1V7.35a1,1,0,0,0-.22-.62L18.3,2.38A1,1,0,0,0,17.52,2H3A1,1,0,0,0,2,3V21A1,1,0,0,0,3,22Z' transform='translate(0 0)' /><path class='a' d='M14,8H5A1,1,0,0,1,4,7V0H15V7A1,1,0,0,1,14,8Z' transform='translate(0 0)' /><circle class='b' cx='10.5' cy='15.5' r='4.5' />
    </svg>
  )
})

Save.displayName = 'Save'
Save.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Save
