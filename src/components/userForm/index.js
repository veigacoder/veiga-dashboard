import React from 'react'
import { Form, Input } from '../../containers/Formulary'
import { Card, ColorLabel, GradientLabel, CardHeader, HeaderData } from '../../containers/Card'
import editinfo from '../../assets/icons/editinfo.svg'
import { bg, gradient } from '../../colors'
export const UserFormulary = () => {
  return (
    <Card round>
      <CardHeader>
        <ColorLabel round color={bg.creation}>
          <img src={editinfo} alt='clipboard' width='40' height='40' />
        </ColorLabel>
        <HeaderData>
          <span>Edit you profile info</span>
        </HeaderData>
      </CardHeader>
      <Form>
        <Input placeholder='First name' type='text' />
        <Input placeholder='Last name' type='text' />
        <Input placeholder='ID number (disabled)' type='text' disabled />
        <Input placeholder='Contact' type='text' />

      </Form>
    </Card>
  )
}

export default UserFormulary
