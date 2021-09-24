import { Bar, BarContent } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import { PageRow } from '../../containers/Display'
import dashboard from '../../assets/icons/dashboard.svg'
import person from '../../assets/icons/person.svg'

export const AppBar = () => {
  return (
    <Bar>

      <BarContent>

        <Card>
          <CardBody>
            <div>
              <img src={dashboard} alt='dashboard' width='24px' height='24px' />
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div>
              <img src={person} alt='person' width='24px' height='24px' />
            </div>
          </CardBody>
        </Card>

      </BarContent>
    </Bar>
  )
}

export default AppBar
