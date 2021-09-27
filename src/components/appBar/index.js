import { Bar, BarContent } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import { ContainerRow, PageRow } from '../../containers/Display'
import { BarButton } from '../../containers/Buttons'
import { useHistory } from 'react-router-dom'

export const AppBar = () => {
  const history = useHistory()
  return (
    <Bar>
      <BarContent direction='rtl'>
        <Card round>
          <PageRow number='20' smNumber='5' mdNumber='5'>

            <BarButton
              title='Dashboard'
              onClick={() => history.push('/')}
            >
            </BarButton>
            <BarButton>
            </BarButton>

            <BarButton>
            </BarButton>

            <BarButton>
            </BarButton>
          </PageRow>

        </Card>
      </BarContent>
    </Bar>
  )
}

export default AppBar
