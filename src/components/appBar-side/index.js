import { SideBar, SideBarContent, SideBarHeader } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import { Button, ButtonHeader, IconButton } from '../../containers/Buttons'
import * as Icon from '../../assets/icons'
import { useHistory } from 'react-router'
import { Icons } from '../../assets/icons'

export const SideAppBar = () => {
  const history = useHistory()

  return (

    <SideBar>
      <SideBarHeader>
        <a href='https://github.com/veigacoder' target='blank_'>
          <b>veigacoder</b>
        </a>
      </SideBarHeader>
      <SideBarContent>

        <Button onClick={() => history.push('/')}>
          <ButtonHeader>
            <Icon.Dashboard />
          </ButtonHeader>
          Dashboard
        </Button>

        <Button onClick={() => history.push('/profile')}>
          <ButtonHeader>
            <Icon.Person />
          </ButtonHeader>
          Profile
        </Button>

        <Button onClick={() => history.push('/icons')}>
          <ButtonHeader>
            <Icon.Icons />
          </ButtonHeader>
          Icons
        </Button>

      </SideBarContent>
    </SideBar>

  )
}

export default SideAppBar
