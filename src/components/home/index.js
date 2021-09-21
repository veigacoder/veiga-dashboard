import React from 'react'
import { Button } from '../../containers/Buttons'
import { Card, CardBody, CardFooter, CardHeader, CardLabel } from '../../containers/Card'
import { PageBlock } from '../../containers/Display'

export const Home = () => {
  return (
    <PageBlock>
      <Card round>
        <CardHeader>
          <CardLabel>Dashboard</CardLabel>
        </CardHeader>
        <CardBody>
          Some interesting progress graphs
        </CardBody>
        <CardFooter><Button>Lean More</Button></CardFooter>
      </Card>
    </PageBlock>
  )
}

export default Home
