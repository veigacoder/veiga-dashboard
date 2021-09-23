import { SideBar, SideBarContent, SideBarHeader } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import * as Icon from 'react-feather'
import { Button, ButtonHeader, IconButton } from '../../containers/Buttons'
import { gradient, bg, fg } from '../../colors'

export const SideAppBar = () => {
  return (
    <SideBar>
      <SideBarHeader>
        <a href='https://github.com/veigacoder' target='blank_'>
          <b><Icon.GitHub size='20px' strokeWidth='1.5px' />veigacoder</b>
        </a>
      </SideBarHeader>
      <SideBarContent>

        <Button>
          <ButtonHeader>
            <Icon.Menu size='2em' strokeWidth='1.5px' />
          </ButtonHeader>
          Menu
        </Button>
        <Button>
          <ButtonHeader>
            <Icon.Home size='2em' strokeWidth='1.5px' />
          </ButtonHeader>
          Home
        </Button>
        <Button>
          <ButtonHeader>
            <Icon.Grid size='2em' strokeWidth='1.5px' />
          </ButtonHeader>
          Dashboard
        </Button>

      </SideBarContent>
    </SideBar>
  )
}

export default SideAppBar
