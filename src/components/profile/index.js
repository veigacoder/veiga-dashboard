import React from 'react'
import { color, gradient, bg } from '../../colors'
import { Card, CardBody, CardFooter, CardHeader, CardLabel, HeaderData } from '../../containers/Card'
import { PageBlock, PageRow } from '../../containers/Display'
import { Button, ButtonHeader } from '../../containers/Buttons'
import save from '../../assets/icons/save.svg'

export const Profile = () => {
  return (
    <PageBlock>
      <PageRow number='2'>
        <Card round>
          <CardHeader>
            <CardLabel color={gradient.red} round>
              <h1> Under Construction</h1>
            </CardLabel>
            <HeaderData>
              <span>Unfinished area</span>
              <span><a className='alert'>User Profile</a></span>
            </HeaderData>
          </CardHeader>
        </Card>

        <Card round>
          <CardHeader>
            <CardLabel color={gradient.creation} round>
              <h1> Username</h1>
            </CardLabel>
            <HeaderData>
              <span>Unfinished area</span>
              <span><a className='creation'>User Profile</a></span>
            </HeaderData>
          </CardHeader>
          <CardBody>
            <form>
              <input placeholder='login' disabled />
              <input placeholder='senha' />
            </form>
          </CardBody>
          <CardFooter>
            <Button>
              <ButtonHeader>
                <img src={save} alt='save' width='24' height='24' />
              </ButtonHeader>
              Update profile!
            </Button>

          </CardFooter>
        </Card>

      </PageRow>
    </PageBlock>
  )
}

export default Profile
