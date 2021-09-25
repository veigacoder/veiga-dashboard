import React, { useEffect, useState } from 'react'
import { Button, ButtonHeader } from '../../containers/Buttons'
import { Card, CardBody, CardFooter, CardHeader, GradientLabel, HeaderData } from '../../containers/Card'
import duster from '../../assets/icons/duster.svg'
import eye from '../../assets/icons/eye.svg'
import book from '../../assets/icons/book.svg'
import { PageBlock, PageRow } from '../../containers/Display'
import { bg, color, fg, gradient } from '../../colors'
import * as Icon from 'react-feather'
import { descendo, crescendo } from '../../assets/chartdata/precision'
import { BarChart, LineChart } from '../../containers/Charts'

export const Home = () => {
  useEffect(() => {
    const fetchData1 = () => {
      setChartData1({
        labels: descendo.sort().map((data) => data.name),
        datasets: [
          {
            label: 'Rate',
            data: descendo.sort().map((data) => data.taxa),
            color: bg.dark,
            backgroundColor: bg.platinum,
            borderColor: bg.actionTranslucid
          }
        ]
      })
    }
    const fetchData2 = () => {
      setChartData2({
        labels: crescendo.sort().map((data) => data.name),
        datasets: [
          {
            label: 'Rate',
            data: crescendo.sort().map((data) => data.taxa),
            color: bg.black,
            backgroundColor: bg.platinum,
            borderColor: bg.black
          }
        ]
      })
    }

    setTimeout(() => {
      fetchData1()
      fetchData2()
    }, 1000)
  }, [])

  const [chartData1, setChartData1] = useState({})
  const [chartData2, setChartData2] = useState({})
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
            <GradientLabel round>
              <BarChart chartData={chartData1} />
            </GradientLabel>
            <HeaderData>
              <span>
                Reserved
              </span>
              <span>
                <a className='alert'>
                  for a chart
                </a>
              </span>
            </HeaderData>
          </CardHeader>
          <CardBody />
        </Card>

        <Card round>
          <CardHeader>
            <GradientLabel color={gradient.green} round>
              <LineChart chartData={chartData2} />
            </GradientLabel>
            <HeaderData>
              <span>
                Reserved
              </span>
              <span>
                <a className='alert'>
                  for a chart
                </a>
              </span>
            </HeaderData>
          </CardHeader>
          <CardBody />
        </Card>
      </PageRow>
    </PageBlock>
  )
}

export default Home
