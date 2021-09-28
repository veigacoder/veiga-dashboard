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
              {new Date().getFullYear()}, from <Icon.Heart /> by <a className='link  '> veigacoder </a>
            </span>
          </CardBody>
        </Card>
      </BarContent>
    </FooterBar>
  )
}

export default FooterAppBar
