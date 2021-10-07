import { FooterBar, FooterBarContent } from '../../containers/Bars'
import { Row } from '../../containers/Display'
import * as Icon from '../../assets/icons'

export const FooterAppBar = () => {
  return (
    <FooterBar>
      <Row number='1'>
        <FooterBarContent>
          <span>
            Hope you liked this web site experience. <br />
            From <Icon.Heart size='14' /> by <a className='link'>veigacoder, </a>
            {new Date().getFullYear()}
          </span>
        </FooterBarContent>
      </Row>
    </FooterBar>
  )
}

export default FooterAppBar
