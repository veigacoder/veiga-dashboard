import { Bar, BarContent } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import { ContainerRow, PageRow } from '../../containers/Display'
import dashboard from '../../assets/icons/dashboard.svg'
import person from '../../assets/icons/person.svg'
import { BarButton } from '../../containers/Buttons'

export const AppBar = () => {
  return (
    <Bar>
      <BarContent>
        <Card round>
          <ContainerRow>
            <BarButton>
              <img src={dashboard} alt='dashboard' width='24px' height='24px' />
            </BarButton>

            <BarButton>
              <img src={person} alt='person' width='24px' height='24px' />
            </BarButton>
          </ContainerRow>
        </Card>
      </BarContent>
    </Bar>
  )
}

export default AppBar
