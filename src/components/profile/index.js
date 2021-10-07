import React from 'react'
import { PageBlock, Row } from '../../containers/Display'
import { UserFormulary } from '..'

export const Profile = () => {
  return (
    <PageBlock>
      <Row number='2' mdNumber='1' smNumber='1'>

        <UserFormulary />
      </Row>
    </PageBlock>
  )
}

export default Profile
