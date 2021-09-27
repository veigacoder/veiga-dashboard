import { SideBar, SideBarContent, SideBarHeader } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import { Button, ButtonHeader, IconButton } from '../../containers/Buttons'
import { gradient, bg, fg } from '../../colors'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { PageBlock } from '../../containers/Display'

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
            <div>
            </div>
          </ButtonHeader>
          Dashboard
        </Button>

        <Button onClick={() => history.push('/profile')}>
          <ButtonHeader>
            <div>
            </div>
          </ButtonHeader>
          Profile
        </Button>

        <Button onClick={() => history.push('/icons')}>
          <Link to='/icons' />
          <ButtonHeader>
            <div>
            </div>
          </ButtonHeader>
          Icons
        </Button>

      </SideBarContent>
    </SideBar>

  )
}

export default SideAppBar
