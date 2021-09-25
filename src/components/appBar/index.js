import { Bar, BarContent } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import { ContainerRow, PageRow } from '../../containers/Display'
import dashboard from '../../assets/icons/dashboard.svg'
import person from '../../assets/icons/person.svg'
import sun from '../../assets/icons/sun.svg'
import moon from '../../assets/icons/moon.svg'
import { BarButton } from '../../containers/Buttons'

export const AppBar = () => {
  return (
    <Bar>
      <BarContent>
        <Card round>
          <PageRow number='5' smNumber='5' mdNumber='5'>
            <BarButton>
              <img src={dashboard} alt='dashboard' width='24px' height='24px' />
            </BarButton>

            <BarButton>
              <img src={person} alt='person' width='24px' height='24px' />
            </BarButton>

            <BarButton>
              <img src={sun} alt='sun' width='24px' height='24px' />
            </BarButton>

            <BarButton>
              <img src={moon} alt='moon' width='24px' height='24px' />
            </BarButton>
          </PageRow>

        </Card>
      </BarContent>
    </Bar>
  )
}

export default AppBar
