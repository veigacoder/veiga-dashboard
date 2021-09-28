import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const EditInfo = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path class='a' d='M15.89,19.92l-2.48.3a.19.19,0,0,1-.23-.23l.29-2.48a.7.7,0,0,1,.2-.39l6.45-6.45,2.61,2.6-6.46,6.46A.63.63,0,0,1,15.89,19.92Z' /><path class='a' d='M21.41,10.56h1.68a1,1,0,0,1,1,1v.17a0,0,0,0,1,0,0H20.41a0,0,0,0,1,0,0v-.17A1,1,0,0,1,21.41,10.56Z' transform='translate(14.4 -12.47) rotate(45)' /><path class='a' d='M20,8V3a1,1,0,0,0-1-1H12.85a1,1,0,0,1-.95-.63,2,2,0,0,0-3.8,0A1,1,0,0,1,7.15,2H1A1,1,0,0,0,0,3V23a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V22a1,1,0,0,0-1-1h-.27a.92.92,0,0,0-.84.46A1,1,0,0,1,17,22H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H6A1,1,0,0,1,7,5,1,1,0,0,0,8,6h4a1,1,0,0,0,1-1,1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V8a1,1,0,0,0,1,1h0A1,1,0,0,0,20,8ZM10,3a1,1,0,1,1,1-1A1,1,0,0,1,10,3Z' /><rect class='a' x='4' y='9' width='12' height='2' rx='1' /><rect class='a' x='4' y='13' width='12' height='2' rx='1' /><rect class='a' x='4' y='17' width='8' height='2' rx='1' />
    </svg>
  )
})

EditInfo.displayName = 'EditInfo'
EditInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default EditInfo
