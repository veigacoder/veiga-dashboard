import React from 'react'
import { Button } from '../../containers/Buttons'
import { Card, CardBody, CardFooter, CardHeader, CardLabel } from '../../containers/Card'
import { PageBlock } from '../../containers/Display'
import { color, gradient } from '../../colors'

export const Home = () => {
  return (
    <PageBlock>
      <Card round>
        <CardHeader>
          <CardLabel round gradient={gradient.red} />
        </CardHeader>
        <CardBody> Body</CardBody>
        <CardFooter><Button>Lean More</Button></CardFooter>
      </Card>
    </PageBlock>
  )
}

export default Home
