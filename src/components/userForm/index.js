import React from 'react'
import { Form, Input } from '../../containers/Formulary'
import { Card, ColorLabel, GradientLabel, CardHeader, HeaderData, CardSide, CardBody, CardFooter } from '../../containers/Card'
import { bg, gradient } from '../../colors'
import * as Icon from '../../assets/icons'
import { Button, ButtonHeader } from '../../containers/Buttons'

export const UserFormulary = () => {
  return (
    <Card round>
      <CardHeader>
        <GradientLabel round color={gradient.creation}>
          <Icon.EditInfo size='3rem' color={bg.dark} />
        </GradientLabel>
        <HeaderData>
          <span>Profile</span>
          <span><a className='creation'>Edit you profile info</a></span>
        </HeaderData>
      </CardHeader>
      <CardBody>
        <Form>
          <Input placeholder='First name' type='text' />
          <Input placeholder='Last name' type='text' />
          <Input placeholder='ID number (disabled)' type='text' disabled />
          <Input placeholder='Contact' type='text' />
          <Button disabled>
            <ButtonHeader>
              <Icon.Save />
            </ButtonHeader>
            Submit changes
          </Button>
        </Form>
      </CardBody>
      <CardFooter>
        <Button>
          Upload photo
        </Button>
      </CardFooter>
    </Card>
  )
}

export default UserFormulary
