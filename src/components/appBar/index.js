import { Bar, BarContent } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import { Input } from '../../containers/Formulary'
import { PageRow } from '../../containers/Display'
import { BarButton } from '../../containers/Buttons'
import { useHistory } from 'react-router-dom'
import * as Icon from '../../assets/icons'
import React, { useEffect, useState } from 'react'
import { bg } from '../../colors'

export const AppBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [barPos, setBarPos] = useState('static')
  const [card, setCard] = useState(bg.platinum)

  const history = useHistory()

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
    if (window.scrollY <= 0) {
      setBarPos('static')
      setCard('none')
      setToggle(true)
    } else {
      setBarPos('fixed')
      setCard(bg.platinum)
      setToggle(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>

      <Bar position={barPos}>

        <BarContent direction='rtl'>
          <Card round color={card} show={toggle}>
            <PageRow number='20' smNumber='5' mdNumber='5'>

              <BarButton title='User'>
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
            </PageRow>

          </Card>
        </BarContent>

      </Bar>
    </>
  )
}

export default AppBar
