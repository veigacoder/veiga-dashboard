import React, { forwardRef } from 'react'
import { PropTypes } from 'prop-types'

export const Book = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <title>Book</title>
      <path class='a' d='M-10,3' transform='translate(-3)' />
      <path
        class='a' d='M19,0H11V14l-1-1a2.29,2.29,0,0,0-1.5-.41A2.29,2.29,0,0,0,7,13L6,14V0H5A2,2,0,0,0,3,2V22a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V1.92A2,2,0,0,0,19,0Z'
        transform='translate(-3)'
      />
    </svg>
  )
})

Book.displayName = 'Book'
Book.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Book
