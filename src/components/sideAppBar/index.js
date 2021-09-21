import { SideBar, SideBarContent } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'

export const SideAppBar = () => {
  return (
    <SideBar>
      <SideBarContent>
        <Card>
          <CardBody>Sidebar</CardBody>
        </Card>
      </SideBarContent>
    </SideBar>
  )
}

export default SideAppBar
