import React from 'react'
import { Button, ButtonHeader } from '../../containers/Buttons'
import { Card, CardBody, CardFooter, CardHeader, GradientLabel, HeaderData } from '../../containers/Card'
import duster from '../../assets/icons/duster.svg'
import eye from '../../assets/icons/eye.svg'
import book from '../../assets/icons/book.svg'
import { PageBlock, PageRow } from '../../containers/Display'
import { color, gradient } from '../../colors'
import * as Icon from 'react-feather'

export const Home = () => {
  return (
    <PageBlock>
      <PageRow>
        <Card round>
          <CardHeader>
            <GradientLabel round color={gradient.red}><Icon.AlertTriangle /> </GradientLabel>
            <HeaderData><span>Alert</span> <span>Hard Disk overload</span></HeaderData>
          </CardHeader>
          <CardBody>
            <span><a className='alert'>97% </a>Disk Usage</span>
          </CardBody>
          <CardFooter>
            <Button>
              <ButtonHeader>
                <div>
                  <img src={duster} alt='duster' width='24px' height='24px' />
                </div>
              </ButtonHeader>
              Clean up space
            </Button>
          </CardFooter>
        </Card>
        <Card round>
          <CardHeader>
            <GradientLabel round color={gradient.green}>
              <Icon.Check />
            </GradientLabel>
            <HeaderData><span>Success</span> <span>Finished tasks</span></HeaderData>
          </CardHeader>
          <CardBody> All daily tasks done!</CardBody>
          <CardFooter>
            <Button>
              <ButtonHeader>
                <div>
                  <img src={eye} alt='eye' width='24px' height='24px' />
                </div>
              </ButtonHeader>
              See all
            </Button>
          </CardFooter>
        </Card>
        <Card round>
          <CardHeader>
            <GradientLabel round color={gradient.blue}>
              <Icon.Crosshair />
            </GradientLabel>
            <HeaderData><span>Target</span> <span>Week goal</span></HeaderData>
          </CardHeader>
          <CardBody>
            <span><a className='goal'>+25% </a>accomplishment rate to reach</span>
          </CardBody>
          <CardFooter>
            <Button>
              <ButtonHeader>
                <div>
                  <img src={book} alt='book' width='24px' height='24px' />
                </div>
              </ButtonHeader>
              Lean More
            </Button>
          </CardFooter>
        </Card>
      </PageRow>
      <PageRow number='2'>
        <Card round>
          <CardHeader>
            <GradientLabel round>This space is for a chart</GradientLabel>
          </CardHeader>
          <CardBody />
        </Card>
        <Card round>
          <CardHeader>
            <GradientLabel round>This one also</GradientLabel>
          </CardHeader>
          <CardBody />
        </Card>
      </PageRow>
    </PageBlock>
  )
}

export default Home
