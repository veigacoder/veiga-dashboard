import { Bar, BarContent } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import { PageRow } from '../../containers/Display'
import save from '../../assets/icons/save.svg'

export const AppBar = () => {
  return (
    <Bar>

      <BarContent>

        <Card>
          <CardBody>
            <div>
              <img src={save} alt='save' width='24px' height='24px' />
            </div>
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
