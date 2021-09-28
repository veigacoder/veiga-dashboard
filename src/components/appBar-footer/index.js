import { BarContent, FooterBar } from '../../containers/Bars'
import { Card, CardBody } from '../../containers/Card'
import * as Icon from '../../assets/icons'

export const FooterAppBar = () => {
  return (
    <FooterBar>
      <BarContent>
        <Card round>
          <CardBody>
            <span>
              Hope you liked this web site experience.<br />
              From <Icon.Heart size='14' /> by <a className='link  '> veigacoder </a> <br />
              {new Date().getFullYear()}
            </span>
          </CardBody>
        </Card>
      </BarContent>
    </FooterBar>
  )
}

export default FooterAppBar
