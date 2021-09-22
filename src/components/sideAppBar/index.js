import { SideBar, SideBarContent } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import * as Icon from 'react-feather'
import { IconButton } from '../../containers/Buttons'
export const SideAppBar = () => {
  return (
    <SideBar>
      <SideBarContent>
        <Card>
          <IconButton><Icon.Menu size='2rem' /> Menu</IconButton>
          <IconButton><Icon.Home size='2rem' /> Home</IconButton>
          <IconButton><Icon.BookOpen size='2rem' /> Dashboard</IconButton>
        </Card>
      </SideBarContent>
    </SideBar>
  )
}

export default SideAppBar
