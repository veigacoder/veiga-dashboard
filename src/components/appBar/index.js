import { Bar, BarContent } from '../../containers/Bars'
import { Card } from '../../containers/Card'
import { Input } from '../../containers/Formulary'
import { BarButton } from '../../containers/Buttons'
import { useHistory } from 'react-router-dom'
import * as Icon from '../../assets/icons'
import React, { useEffect, useState } from 'react'
import { bg } from '../../colors'

export const AppBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [barPos, setBarPos] = useState('fixed')
  const [card, setCard] = useState(bg.platinum)

  const history = useHistory()

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
    if (window.scrollY < 2 && window.innerHeight > 600) {
      setCard('none')
      setToggle(true)
      console.log(window.innerHeight)
    }
    if (window.scrollY > 2 && window.innerHeight > 600) {
      setCard(bg.platinum)
      setToggle(false)
    }
    if (window.innerHeight < 600) {
      setCard('none')
      setToggle(true)
      setBarPos('static')
    }
  }

  useEffect(() => {
    setCard('none')
    setToggle(true)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (

    <Bar position={barPos}>
      <Card color={card} show={toggle}>
        <BarContent direction='rtl'>

          <BarButton
            title='User'
            onClick={() => history.push('/profile')}
          >
            <Icon.Person />
          </BarButton>

          <BarButton
            title='Dashboard'
            onClick={() => history.push('/')}
          >
            <Icon.Dashboard />
          </BarButton>

          <BarButton title='Search'>
            <Icon.Zoom />
          </BarButton>

          <Input placeholder='Search' />

        </BarContent>
      </Card>
    </Bar>

  )
}

export default AppBar
