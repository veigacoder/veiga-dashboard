import styled from 'styled-components'
import { bg, fg } from '../../colors'

export const Card = styled.div`
background-color: ${bg.light};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:  ${fg.normal} ;
width: max-content;
height: max-content;
border-radius: ${props => props.round ? '.5em' : 'none'};
box-shadow: 1px 3px 2px  ${bg.darkest};

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
padding: 1rem;
width: 1;
height: max-content;
border-radius: inherit;
`
export const CardFooter = styled.div`
justify-content: center;
align-items: center;
display: flex;
padding: .5rem;
margin-bottom: .2em;
height: max-content;
border-top: 2px dashed ${fg.normal};
`
export const CardLabel = styled.div`
justify-content: center;
align-items: center;
display: flex;
padding: .5rem;
position: absolute;
box-shadow: 1px 1px 1px  ${bg.darkest};
background-color: ${bg.action};
font-size: 90%;
top: -30%;
width: 1;
`
