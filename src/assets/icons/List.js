import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const List = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <rect class='a' x='9' y='1' width='15' height='4' rx='2' /><rect class='a' width='6' height='6' rx='3' /><rect class='a' x='9' y='10' width='15' height='4' rx='2' /><rect class='a' y='9' width='6' height='6' rx='3' /><rect class='a' x='9' y='19' width='15' height='4' rx='2' /><rect class='a' y='18' width='6' height='6' rx='3' />
    </svg>
  )
})

List.displayName = 'List'
List.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default List
