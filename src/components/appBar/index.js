import { Bar, BarContent } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'

export const AppBar = () => {
  return (
    <Bar>
      <BarContent>
        <Card>
          <CardBody>
            Topbar
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            Topbar
          </CardBody>
        </Card>
      </BarContent>
    </Bar>
  )
}

export default AppBar
