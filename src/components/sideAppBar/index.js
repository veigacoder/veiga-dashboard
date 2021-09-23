import { SideBar, SideBarContent, SideBarHeader } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import * as Icon from 'react-feather'
import dashboard from '../../assets/icons/dashboard.svg'
import home from '../../assets/icons/home.svg'
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
            <div>
              <img src={home} alt='home' width='24px' height='24px' />
            </div>
          </ButtonHeader>
          Home
        </Button>

        <Button>
          <ButtonHeader>
            <div>
              <img src={dashboard} alt='dashboard' width='24px' height='24px' />
            </div>
          </ButtonHeader>
          Dashboard
        </Button>

      </SideBarContent>
    </SideBar>
  )
}

export default SideAppBar
