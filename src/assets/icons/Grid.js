import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Grid = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <title>Grid</title>
      <rect class='a' x='13' y='13' width='11' height='11' rx='2' transform='translate(37 37) rotate(180)' /><rect class='a' width='11' height='11' rx='2' transform='translate(11 11) rotate(180)' /><rect class='a' x='13' width='11' height='11' rx='2' transform='translate(37 11) rotate(180)' /><rect class='a' y='13' width='11' height='11' rx='2' transform='translate(11 37) rotate(180)' />
    </svg>
  )
})

Grid.displayName = 'Grid'
Grid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Grid
