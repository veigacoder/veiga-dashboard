import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardLabel } from '../../containers/Card/styles'
import { MainBlock } from './styles'

export const Home = () => {
  return (
    <MainBlock>
      <Card round>
        <CardHeader>
          <CardLabel>HOME</CardLabel>
        </CardHeader>
        <CardBody>
          HOME <br />
          HOME <br />
        </CardBody>
        <CardFooter>a</CardFooter>
      </Card>
    </MainBlock>
  )
}

export default Home
