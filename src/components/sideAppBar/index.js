import { SideBar, SideBarContent, SideBarHeader } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import * as Icon from 'react-feather'
import dashboard from '../../assets/icons/dashboard.svg'
import sandbox2 from '../../assets/icons/sandbox2.svg'
import { Button, ButtonHeader, IconButton } from '../../containers/Buttons'
import { gradient, bg, fg } from '../../colors'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export const SideAppBar = () => {
  const history = useHistory()

  return (
    <SideBar>

      <SideBarHeader>
        <a href='https://github.com/veigacoder' target='blank_'>
          <b><Icon.GitHub size='20px' strokeWidth='1.5px' />veigacoder</b>
        </a>
      </SideBarHeader>
      <SideBarContent>

        <Button onClick={() => history.push('/')}>
          <Link to='/' />
          <ButtonHeader>
            <div>
              <img src={dashboard} alt='home' width='24px' height='24px' />
            </div>
          </ButtonHeader>
          Dashboard
        </Button>
        <Button onClick={() => history.push('/icons')}>
          <Link to='/icons' />
          <ButtonHeader>
            <div>
              <img src={sandbox2} alt='sandbox2' width='24px' height='24px' />
            </div>
          </ButtonHeader>
          Icons
        </Button>

      </SideBarContent>
    </SideBar>
  )
}

export default SideAppBar
