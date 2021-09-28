import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Sandbox = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path class='a' d='M12,10.57.73,13.79a1,1,0,0,0-.73,1v4.06a1,1,0,0,0,.65.93l10.65,4a2,2,0,0,0,1.4,0l10.65-4a1,1,0,0,0,.65-.93V14.75a1,1,0,0,0-.73-1Zm0,.9L20.84,14,12,16.53,3.16,14Z' transform='translate(0 -4)' /><path class='a' d='M8.12,4v.83a3.07,3.07,0,0,0,1,2.24h0a3.3,3.3,0,0,0,.91.61A3.19,3.19,0,0,0,11,8v6.11a.93.93,0,0,0,.93.93h.14a.93.93,0,0,0,.93-.93V8a3.19,3.19,0,0,0,1-.28,3.3,3.3,0,0,0,.91-.61h0a3.07,3.07,0,0,0,1-2.24V4Zm7,.83a2.41,2.41,0,0,1-1.12,2,2.45,2.45,0,0,1-1,.4l-.31,0H11.31l-.31,0a2.45,2.45,0,0,1-1-.4,2.41,2.41,0,0,1-1.12-2V4.71h6.24Z' transform='translate(0 -4)' />
    </svg>
  )
})

Sandbox.displayName = 'Sandbox'
Sandbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Sandbox
