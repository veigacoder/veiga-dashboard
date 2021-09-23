import { Bar, BarContent } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import { PageRow } from '../../containers/Display'

export const AppBar = () => {
  return (
    <Bar>

      <BarContent>

        <Card>
          <CardBody>
            CARD
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            CARD
          </CardBody>
        </Card>

      </BarContent>
    </Bar>
  )
}

export default AppBar
