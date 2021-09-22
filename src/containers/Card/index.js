import styled from 'styled-components'
import { bg, color, fg, gradient } from '../../colors'

export const Card = styled.div`
background-color: ${bg.light};
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;
color:  ${fg.dark} ;
width: max-content;
height: max-content;
border-radius: ${props => props.round ? '.5em' : 'none'};
box-shadow: 1px 3px 10px  ${bg.darkest};
&+&{
  box-shadow: 8px 3px 10px  ${bg.darkest};
}
`
export const CardBody = styled.div`
justify-content: center;
align-items: center;
display: flex;
padding: 1rem;
height: fit-content;
border-radius: inherit;
`
export const CardHeader = styled.div`
justify-content: center;
align-items: center;
display: flex;
position: relative;
padding: .5rem;
width: 1;
height: fit-content;
border-radius: inherit;
`
export const CardFooter = styled.div`
justify-content: center;
align-items: center;
display: flex;
padding: .5rem;
width: 80%;
height: max-content;
border-top: .1px dashed ${fg.translucid};
`
export const CardLabel = styled.div.attrs(props => ({
  gradient: props.gradient || gradient.default
}))`
justify-content: center;
align-items: center;
display: flex;
padding: .5rem;
box-shadow: 2px 3px 5px  ${bg.darkest};
background-image: ${props => props.gradient};
color: ${fg.normal};
border-radius: ${props => props.round ? '.5em' : 'none'};
font-size: 90%;
width: 1;
`
