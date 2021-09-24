import React from 'react'

import { Button, ButtonHeader } from '../../containers/Buttons'
import eye from '../../assets/icons/eye.svg'
import eyeclosed from '../../assets/icons/eyeclosed.svg'
import duster from '../../assets/icons/duster.svg'
import home from '../../assets/icons/home.svg'
import sandbox from '../../assets/icons/sandbox.svg'
import sandbox2 from '../../assets/icons/sandbox2.svg'
import book from '../../assets/icons/book.svg'
import dashboard from '../../assets/icons/dashboard.svg'
import save from '../../assets/icons/save.svg'
import person from '../../assets/icons/person.svg'
import icons from '../../assets/icons/icons.svg'
import magnify from '../../assets/icons/magnify.svg'
import edit from '../../assets/icons/edit.svg'
import editinfo from '../../assets/icons/editinfo.svg'
import clipboard from '../../assets/icons/clipboard.svg'

import { PageBlock, PageRow } from '../../containers/Display'
import { Card, CardBody, CardFooter, CardHeader, GradientLabel, HeaderData } from '../../containers/Card'
import { color, gradient } from '../../colors'
export const Icons = () => {
  return (
    <>
      <PageBlock>
        <PageRow>
          <Card round>
            <CardHeader>
              <GradientLabel round color={gradient.blue}>
                <h1>These icons are prototypes </h1>
              </GradientLabel>
              <HeaderData>
                <span>Crafted by</span>
                <span>veigacoder</span>
              </HeaderData>
            </CardHeader>
            <CardBody>
              <PageRow number='4' smNumber='2'>

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
                    <img src={clipboard} alt='clipboard' width='24px' height='24px' />
                  </ButtonHeader>
                  clipboard
                </Button>

                <Button>
                  <ButtonHeader>
                    <img src={edit} alt='edit' width='24px' height='24px' />
                  </ButtonHeader>
                  edit
                </Button>

                <Button>
                  <ButtonHeader>
                    <img src={editinfo} alt='editinfo' width='24px' height='24px' />
                  </ButtonHeader>
                  editinfo
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
                    <img src={home} alt='home' width='24px' height='24px' />
                  </ButtonHeader>
                  home
                </Button>

                <Button>
                  <ButtonHeader>
                    <img src={icons} alt='icons' width='24px' height='24px' />
                  </ButtonHeader>
                  icons
                </Button>

                <Button>
                  <ButtonHeader>
                    <img src={magnify} alt='magnify' width='24px' height='24px' />
                  </ButtonHeader>
                  magnify
                </Button>

                <Button>
                  <ButtonHeader>
                    <img src={person} alt='save' width='24' height='24' />
                  </ButtonHeader>
                  person
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

              </PageRow>
            </CardBody>
            <CardFooter>
              <HeaderData>
                About them, soon, I'll make out a library or something
                <span>They are not all  I've made ...</span>
              </HeaderData>
              <HeaderData>
                <span><a className='link' href='#/contribute'>Contribute</a></span>
              </HeaderData>
            </CardFooter>
          </Card>
        </PageRow>
      </PageBlock>

    </>
  )
}
export default Icons
