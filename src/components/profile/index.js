import React from 'react'
import { color, gradient, bg } from '../../colors'
import { Card, CardBody, CardFooter, CardHeader, GradientLabel, HeaderData } from '../../containers/Card'
import { PageBlock, PageRow } from '../../containers/Display'
import { Button, ButtonHeader } from '../../containers/Buttons'
import { UserFormulary } from '..'
import { SubmitButton } from '../../containers/Formulary'

export const Profile = () => {
  return (
    <PageBlock>
      <PageRow number='1' mdNumber='1' smNumber='1'>


        <UserFormulary />

      </PageRow>
    </PageBlock>
  )
}

export default Profile
