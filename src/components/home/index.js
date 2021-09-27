import React, { useEffect, useState } from 'react'
import { Button, ButtonHeader } from '../../containers/Buttons'
import { Card, CardBody, CardFooter, CardHeader, GradientLabel, HeaderData } from '../../containers/Card'
import { PageBlock, PageRow } from '../../containers/Display'
import { bg, color, fg, gradient } from '../../colors'
import { descendo, crescendo } from '../../assets/chartdata/precision'
import { BarChart, LineChart } from '../../containers/Charts'
import * as Icon from '../../assets/icons'

export const Home = () => {
  useEffect(() => {
    const fetchData1 = () => {
      setChartData1({
        labels: descendo.sort().map((data) => data.name),
        datasets: [
          {
            label: 'Rate',
            data: descendo.sort().map((data) => data.taxa),
            color: bg.platinum,
            backgroundColor: bg.platinum
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
            color: bg.darkest,
            backgroundColor: bg.platinum,
            borderColor: bg.platinum
          }
        ]
      })
    }
    console.log(Icon)
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
            <GradientLabel round color={gradient.red}>
              <Icon.No />
            </GradientLabel>
            <HeaderData>
              <span> Alert</span>
              <span>You have a pending report</span>
            </HeaderData>
          </CardHeader>
          <CardBody>
            <span><a className='alert'>5 days </a> until delivery day</span>
          </CardBody>

          <CardFooter>
            <Button>
              <ButtonHeader>
                <Icon.Edit />
              </ButtonHeader>
              Start writing
            </Button>
          </CardFooter>
        </Card>

        <Card round>
          <CardHeader>
            <GradientLabel round color={gradient.green}>
              <Icon.Check />
            </GradientLabel>
            <HeaderData>
              <span>Success</span>
              <span>Finished tasks</span>
            </HeaderData>
          </CardHeader>
          <CardBody> All day tasks done!</CardBody>
          <CardFooter>
            <Button>
              <ButtonHeader>
                <Icon.Eye />
              </ButtonHeader>
              See all
            </Button>
          </CardFooter>
        </Card>

        <Card round>
          <CardHeader>
            <GradientLabel round color={gradient.blue}>
              <Icon.Target />
            </GradientLabel>
            <HeaderData>
              <span>Target</span>
              <span>Week goal</span>
            </HeaderData>
          </CardHeader>
          <CardBody>
            <span><a className='goal'>+25% </a>accomplishment rate to reach</span>
          </CardBody>
          <CardFooter>
            <Button>
              <ButtonHeader>
                <Icon.Book />
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
