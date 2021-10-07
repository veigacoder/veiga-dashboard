import React, { useState } from 'react'
import { Button } from '../../containers/Buttons'
import * as Icon from '../../assets/icons'
import { PageBlock, Row } from '../../containers/Display'
import { Card, CardBody, CardFooter, CardHeader, GradientLabel, HeaderData } from '../../containers/Card'
import { gradient } from '../../colors'
import { Input, ColorInput } from '../../containers/Formulary'

export const Icons = () => {
  const [view, setView] = useState('6')
  const [inputData, setInputData] = useState('24')
  const [iconColor, setIconColor] = useState('#1C1C1C')

  const toggleGrid = () => {
    if (view < '6') { setView('6') }
  }
  const toggleList = () => {
    if (view > '2') { setView('2') }
  }

  const getInputData = (e) => {
    setInputData(e.target.value)
    if (e.target.value <= 9) (setInputData('10'))
    console.log(e.target.value)
  }
  const getInputColor = (e) => {
    setIconColor(e.target.value)
  }

  return (

    <PageBlock>

      <Row number='3'>

        <Card round>
          <CardBody>
            <Input placeholder='Size' onChange={getInputData} type='range' />
            <label for={inputData}>{inputData}px</label>
          </CardBody>
        </Card>

        <Card round minHeight='200px'>
          <CardBody>
            <Icon.Edit size={inputData} color={iconColor} />
          </CardBody>
        </Card>

        <Card round>
          <CardBody>
            <ColorInput placeholder='Size' onChange={getInputColor} type='color' />
            <label for={iconColor}>{iconColor}</label>
          </CardBody>
        </Card>
      </Row>

      <Row number='1'>
        <Card round minWidth='60rem'>
          <CardHeader>
            <GradientLabel round color={gradient.blue}>
              <h1>These icons are prototypes </h1>
            </GradientLabel>
            <HeaderData>
              <span>Crafted by</span>
              <span>veigacoder</span>
            </HeaderData>
          </CardHeader>
          <CardBody>
            <Row number='2'>
              <Button onClick={toggleGrid} title='Grid View'>
                <Icon.Grid />
              </Button>
              <Button onClick={toggleList} title='List View'>
                <Icon.List />
              </Button>
            </Row>
          </CardBody>
          <CardBody>

            <Row number={view} smNumber='2'>
              <Button>
                <Icon.Book />
              </Button>

              <Button>
                <Icon.Check />
              </Button>

              <Button>
                <Icon.Clipboard />
              </Button>

              <Button>
                <Icon.Dashboard />
              </Button>

              <Button>
                <Icon.Duster />
              </Button>

              <Button>
                <Icon.Download />
              </Button>

              <Button>
                <Icon.Edit />
              </Button>

              <Button>
                <Icon.EditInfo />
              </Button>

              <Button>
                <Icon.Eye />
              </Button>

              <Button>
                <Icon.EyeClosed />
              </Button>

              <Button>
                <Icon.Heart />
              </Button>

              <Button>
                <Icon.Home />
              </Button>

              <Button>
                <Icon.Icons />
              </Button>

              <Button>
                <Icon.Moon />
              </Button>

              <Button>
                <Icon.No />
              </Button>

              <Button>
                <Icon.Person />
              </Button>

              <Button>
                <Icon.Sandbox />
              </Button>

              <Button>
                <Icon.Sun />
              </Button>

              <Button>
                <Icon.Save />
              </Button>

              <Button>
                <Icon.Target />
              </Button>

              <Button>
                <Icon.Upload />
              </Button>

              <Button>
                <Icon.Zoom />
              </Button>

              <Button>
                <Icon.ZoomIn />
              </Button>

              <Button>
                <Icon.ZoomOut />
              </Button>

            </Row>
          </CardBody>

          <CardFooter>
            <HeaderData>
              About them,
              <span>they're ones I've done so far...</span>
            </HeaderData>
            <HeaderData>
              <span><a className='link' href='#/contribute'>Contribute</a></span>
            </HeaderData>
          </CardFooter>
        </Card>
      </Row>

    </PageBlock>

  )
}
export default Icons
