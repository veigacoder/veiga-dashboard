import React from 'react'
import { color, gradient, bg } from '../../colors'
import { Card, CardBody, CardFooter, CardHeader, GradientLabel, HeaderData } from '../../containers/Card'
import { PageBlock, PageRow } from '../../containers/Display'
import { Button, ButtonHeader } from '../../containers/Buttons'
import save from '../../assets/icons/save.svg'
import { UserFormulary } from '..'
import { SubmitButton } from '../../containers/Formulary'

export const Profile = () => {
  return (
    <PageBlock>
      <PageRow number='2' mdNumber='1' smNumber='1'>
        <Card round>
          <CardHeader>
            <GradientLabel color={gradient.red} round>
              <h1> Under Construction</h1>
            </GradientLabel>
            <HeaderData>
              <span>Unfinished area</span>
              <span><a className='alert'>User Profile</a></span>
            </HeaderData>
          </CardHeader>
        </Card>

        <Card round>
          <CardHeader>
            <GradientLabel color={gradient.creation} round>
              <h1> User</h1>
            </GradientLabel>
            <HeaderData>
              <span />
              <span><a className='creation'>Profile</a></span>
            </HeaderData>
          </CardHeader>

          <CardBody>
            <UserFormulary />
          </CardBody>

          <CardBody>
            <HeaderData>
              <SubmitButton>
                <ButtonHeader>
                  <img src={save} alt='save' width='24' height='24' />
                </ButtonHeader>
                Update profile!
              </SubmitButton>
            </HeaderData>
          </CardBody>
        </Card>

      </PageRow>
    </PageBlock>
  )
}

export default Profile
