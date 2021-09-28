import React, { useState } from 'react'
import { Button, ButtonHeader } from '../../containers/Buttons'
import * as Icon from '../../assets/icons'
import { PageBlock, PageRow } from '../../containers/Display'
import { Card, CardBody, CardFooter, CardHeader, GradientLabel, HeaderData } from '../../containers/Card'
import { color, gradient } from '../../colors'
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

      <PageRow number='2'>
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

          <CardHeader>
            <Button onClick={toggleGrid} title='Grid View'>
              <Icon.Grid />
            </Button>
            <Button onClick={toggleList} title='List View'>
              <Icon.List />
            </Button>
          </CardHeader>

          <CardHeader>
            <Card round>
              <CardBody>
                <Input placeholder='Size' onChange={getInputData} type='range' />
                <ColorInput placeholder='Size' onChange={getInputColor} type='color' value='#1C1C1C' />
                <label for={inputData}>{inputData}px</label>
              </CardBody>
              <CardFooter>
                <Icon.Edit size={inputData} color={iconColor} />
              </CardFooter>
            </Card>
          </CardHeader>
          <CardBody>
            <PageRow number={view} smNumber='2'>
              <Button>
                <ButtonHeader>
                  <Icon.Book />
                </ButtonHeader>
                Book
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Check />
                </ButtonHeader>
                Check
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Clipboard />
                </ButtonHeader>
                Clipboard
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Dashboard />
                </ButtonHeader>
                Dashboard
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Duster />
                </ButtonHeader>
                Duster
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Edit />
                </ButtonHeader>
                Edit
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.EditInfo />
                </ButtonHeader>
                EditInfo
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Eye />
                </ButtonHeader>
                Eye
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.EyeClosed />
                </ButtonHeader>
                EyeClosed
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Heart />
                </ButtonHeader>
                Heart
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Home />
                </ButtonHeader>
                Home
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Icons />
                </ButtonHeader>
                Icons
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Moon />
                </ButtonHeader>
                Moon
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.No />
                </ButtonHeader>
                No
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Person />
                </ButtonHeader>
                Person
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Sandbox />
                </ButtonHeader>
                Sandbox
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Sun />
                </ButtonHeader>
                Sun
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Save />
                </ButtonHeader>
                Save
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.Zoom />
                </ButtonHeader>
                Zoom
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.ZoomIn />
                </ButtonHeader>
                ZoomIn
              </Button>

              <Button>
                <ButtonHeader>
                  <Icon.ZoomOut />
                </ButtonHeader>
                ZoomOut
              </Button>
            </PageRow>
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

      </PageRow>

    </PageBlock>

  )
}
export default Icons
