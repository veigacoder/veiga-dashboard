import React from 'react'
import { Button, ButtonHeader } from '../../containers/Buttons'
import eye from '../../assets/icons/eye.svg'
import eyeclosed from '../../assets/icons/eyeclosed.svg'
import duster from '../../assets/icons/duster.svg'
import sandbox from '../../assets/icons/sandbox.svg'
import sandbox2 from '../../assets/icons/sandbox2.svg'
import book from '../../assets/icons/book.svg'
import dashboard from '../../assets/icons/dashboard.svg'
import save from '../../assets/icons/save.svg'
import person from '../../assets/icons/person.svg'

import { PageBlock, PageRow } from '../../containers/Display'
import { Card, CardBody, CardHeader, CardLabel, HeaderData } from '../../containers/Card'
import { color, gradient } from '../../colors'
export const Icons = () => {
  return (
    <>
      <PageBlock>
        <PageRow>
          <Card round>
            <CardHeader>
              <CardLabel round color={gradient.blue}>
                <h1>These icons are prototypes </h1>
              </CardLabel>
              <HeaderData>
                <span>Crafted by</span>
                <span>Me</span>
              </HeaderData>
            </CardHeader>
            <CardBody>
              <PageRow number='4'>

                <Button>
                  <ButtonHeader>
                    <img src={book} alt='book' width='24' height='24' />
                  </ButtonHeader>
                  book
                </Button>

                <Button>
                  <ButtonHeader>
                    <img src={dashboard} alt='dashboard' width='24' height='24' />
                  </ButtonHeader>
                  dashboard
                </Button>

                <Button>
                  <ButtonHeader>
                    <img src={duster} alt='duster' width='24px' height='24px' />
                  </ButtonHeader>
                  duster
                </Button>

                <Button>
                  <ButtonHeader>
                    <img className='eye' src={eye} alt='eye' width='24px' height='24px' />
                  </ButtonHeader>
                  eye
                </Button>

                <Button>
                  <ButtonHeader>
                    <img src={eyeclosed} alt='eyeclosed' width='24px' height='24px' />
                  </ButtonHeader>
                  eyeclosed
                </Button>

                <Button>
                  <ButtonHeader>
                    <img src={sandbox} alt='sandbox' width='24px' height='24px' />
                  </ButtonHeader>
                  sandbox
                </Button>

                <Button>
                  <ButtonHeader>
                    <img src={sandbox2} alt='sandbox2' width='24' height='24' />
                  </ButtonHeader>
                  sandbox2
                </Button>

                <Button>
                  <ButtonHeader>
                    <img src={save} alt='save' width='24' height='24' />
                  </ButtonHeader>
                  save
                </Button>

                <Button>
                  <ButtonHeader>
                    <img src={person} alt='save' width='24' height='24' />
                  </ButtonHeader>
                  person
                </Button>

              </PageRow>
            </CardBody>
          </Card>
        </PageRow>
      </PageBlock>

    </>
  )
}
export default Icons
