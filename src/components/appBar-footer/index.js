import { Bar, BarContent } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import { ContainerRow, PageRow } from '../../containers/Display'
import dashboard from '../../assets/icons/dashboard.svg'
import person from '../../assets/icons/person.svg'
import sun from '../../assets/icons/sun.svg'
import grid from '../../assets/icons/grid.svg'

import { useHistory } from 'react-router-dom'
import { bg, color } from '../../colors'

export const FooterAppBar = () => {
  const history = useHistory()
  return (
    <Bar>
      <BarContent>
        <Card round>
          <CardBody>
            <span>Hope you liked this web site experience, {new Date().getFullYear()} <a className='link  '> veigacoder </a>
            </span>
          </CardBody>

        </Card>
      </BarContent>
    </Bar>
  )
}

export default FooterAppBar
