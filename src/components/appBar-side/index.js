import { SideBar, SideBarContent, SideBarHeader } from '../../containers/Bars'
import { Button, ButtonHeader } from '../../containers/Buttons'
import * as Icon from '../../assets/icons'
import { useHistory } from 'react-router'

export const SideAppBar = () => {
  const history = useHistory()

  return (

    <SideBar>
      <SideBarHeader>
        <b>veigacoder</b>
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
